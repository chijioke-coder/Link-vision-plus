export const VENDOR_WHATSAPP_NUMBER = "2348033905119";

export interface CheckoutFormValues {
  productName: string;
  productPrice?: string;
  fullName: string;
  phone: string;
  address: string;
  stateCity: string;
  vendorWhatsappNumber?: string;
}

export const sanitizeText = (value: string) =>
  value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const buildWhatsAppOrderLink = ({
  productName,
  productPrice,
  fullName,
  phone,
  address,
  stateCity,
  vendorWhatsappNumber = VENDOR_WHATSAPP_NUMBER,
}: CheckoutFormValues) => {
  const safeProduct = sanitizeText(productName);
  const safeName = sanitizeText(fullName);
  const safePhone = sanitizeText(phone);
  const safeAddress = sanitizeText(address);
  const safeState = sanitizeText(stateCity);

  const safePrice = productPrice ? sanitizeText(productPrice) : "";

  const message = [
    "*LINK VISION PLUS - NEW ORDER*",
    "",
    `*Package:* ${safeProduct}`,
    `*Price:* ${safePrice}`,
    `*Customer Name:* ${safeName}`,
    `*Phone:* ${safePhone}`,
    `*Delivery Address:* ${safeAddress}, ${safeState}`,
  ].join("\n");

  return `https://wa.me/${vendorWhatsappNumber}?text=${encodeURIComponent(message)}`;
};
