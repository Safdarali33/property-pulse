import type { Metadata } from "next";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property with PropertyPulse. Browse listings, view photos, and connect with landlords easily.",
  keywords: ["rental properties", "find rentals", "property listings", "rentals near me", "landlord connections"],
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
