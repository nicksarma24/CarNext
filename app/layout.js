import { Geist, Geist_Mono, Inter } from "next/font/google";
// import "./globals.css";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter=Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CarNext - Car Marketplace",
  description: "Find your dream car",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          
          {/* Toaster for notifications */}
          <Toaster richColors/>

          <footer className="bg-blue-50 py-12">
           
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
