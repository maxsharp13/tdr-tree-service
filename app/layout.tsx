import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "TDR Tree Service",
  description: "Tree removal and trimming services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>
          <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}