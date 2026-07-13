import { describe, it, expect } from "vitest";
import { buildWhatsAppOrderLink, sanitizeText } from "./checkout";

describe("checkout utils", () => {
  it("sanitizes and formats a WhatsApp order link", () => {
    const link = buildWhatsAppOrderLink({
      productName: "Security Starter Pack",
      fullName: "  Chioma   Okafor  ",
      phone: "08012345678",
      address: "12, Allen Avenue\nIkeja",
      stateCity: "Lagos",
      vendorWhatsappNumber: "2348033905119",
    });

    expect(link).toContain("https://wa.me/2348033905119?");
    expect(link).toContain("Security%20Starter%20Pack");
    expect(link).toContain("Chioma%20Okafor");
    expect(link).toContain("08012345678");
    expect(link).toContain("Ikeja");
  });

  it("strips unsafe tags and normalizes whitespace", () => {
    expect(sanitizeText("<b>  Chioma  </b>")).toBe("Chioma");
  });
});
