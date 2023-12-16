import Header from "@/components/Header";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Dil App",
  description: "E commerce app created as part of Dil-foods Assesment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body>
          <Header />
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
