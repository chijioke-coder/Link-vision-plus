import { useEffect, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildWhatsAppOrderLink, VENDOR_WHATSAPP_NUMBER } from "@/lib/checkout";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: string;
  options?: { label: string; price: string }[];
}

const states = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Enugu",
  "Kaduna",
  "Abeokuta",
];

const initialState = {
  fullName: "",
  phone: "",
  address: "",
  stateCity: "Lagos",
};

const CheckoutModal = ({
  isOpen,
  onClose,
  productName,
  productPrice,
  options = [],
}: CheckoutModalProps) => {
  const [form, setForm] = useState(initialState);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialState);
    }
  }, [isOpen]);

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(`${options[0].label}|${options[0].price}`);
    } else {
      setSelectedOption(null);
    }
  }, [options, isOpen]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedLabel = selectedOption
      ? selectedOption.split("|")[0]
      : productName;

    const selectedPrice = selectedOption
      ? selectedOption.split("|")[1]
      : productPrice;

    const link = buildWhatsAppOrderLink({
      productName: `${productName} - ${selectedLabel}`,
      productPrice: selectedPrice || productPrice,
      fullName: form.fullName,
      phone: form.phone,
      address: form.address,
      stateCity: form.stateCity,
      vendorWhatsappNumber: VENDOR_WHATSAPP_NUMBER,
    });

    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl border-none bg-card/95 p-0 shadow-[0_25px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.5rem]">
          <div className="bg-gradient-to-r from-[#1f3d2e] via-[#2f6a41] to-[#4da26d] p-6 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
              <Sparkles className="h-4 w-4" />
              Fast checkout
            </div>

            <DialogHeader className="mt-3 text-left">
              <DialogTitle className="text-2xl font-semibold text-white">
                Complete your order
              </DialogTitle>

              <DialogDescription className="mt-2 max-w-md text-sm text-emerald-50/90">
                We’ll send this order straight to the vendor on WhatsApp with
                your delivery details.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur">
              <span className="text-emerald-50">Selected item</span>
              <span className="font-semibold">
                {productName} • {productPrice}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name
                </label>

                <Input
                  id="fullName"
                  placeholder="Amina Yusuf"
                  value={form.fullName}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      fullName: event.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="08012345678"
                  value={form.phone}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      phone: event.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            {options.length > 0 && (
              <div className="space-y-2">
                <label
                  htmlFor="productOption"
                  className="text-sm font-medium text-foreground"
                >
                  Select Package / Memory Option
                </label>

                <Select
                  value={selectedOption ?? ""}
                  onValueChange={(value) => setSelectedOption(value)}
                >
                  <SelectTrigger
                    id="productOption"
                    className="bg-background"
                  >
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>

                  <SelectContent>
                    {options.map((opt) => (
                      <SelectItem
                        key={opt.label}
                        value={`${opt.label}|${opt.price}`}
                      >
                        {opt.label} • {opt.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="address"
                className="text-sm font-medium text-foreground"
              >
                Delivery Address
              </label>

              <Textarea
                id="address"
                placeholder="No. 12, Allen Avenue, Ikeja"
                value={form.address}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    address: event.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="stateCity"
                className="text-sm font-medium text-foreground"
              >
                State / City
              </label>

              <Select
                value={form.stateCity}
                onValueChange={(value) =>
                  setForm((current) => ({
                    ...current,
                    stateCity: value,
                  }))
                }
              >
                <SelectTrigger id="stateCity" className="bg-background">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>

                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" />
              🛒 Complete Order via WhatsApp
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;