import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SkinClassify",
  description: "For educational use only",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* ทำให้ทั้งหน้าสูงเต็มและจัดเป็นคอลัมน์ */}
      <body className="min-h-screen bg-gray-50 text-gray-800 antialiased flex flex-col">
        <Navbar />
        <div className="h-[calc(56px+env(safe-area-inset-top))] md:h-16" />
        {/* ให้พื้นที่กลาง “ยืดได้” และจัดกึ่งกลางทั้งแนวแกน X/Y */}
        <main className="flex-1 flex items-center justify-center">
          {/* กล่องจำกัดความกว้าง + padding ของทุกหน้า */}
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
