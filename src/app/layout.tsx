import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Mediacall Services | IT & Telecommunication Solutions",
  description:
    "Mediacall Services provides IT services, data processing, web development, telecommunication services, and VoIP solutions. Based in Sofia, Bulgaria.",
  keywords:
    "IT services, data processing, web development, telecommunication services, VoIP solutions, Mediacall Services, Sofia Bulgaria IT company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200 font-sans scroll-smooth">
        {children}
      </body>
    </html>
  );
}
