import type { Metadata } from 'next';
import { Inter, Kanit, Sarabun } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

// 1. Setup 3 Google Fonts Optimization ตามข้อกำหนด
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const kanit = Kanit({ weight: ['400', '700'], subsets: ['thai', 'latin'], variable: '--font-kanit' });
const sarabun = Sarabun({ weight: ['400', '600'], subsets: ['thai', 'latin'], variable: '--font-sarabun' });

export const metadata: Metadata = {
  title: 'Thanphisit Portfolio',
  description: 'My Personal Portfolio Website Built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable} ${sarabun.variable}`}>
      {/* ใช้ฟอนต์ Sarabun เป็นฟอนต์หลักของทั้งเว็บไซต์ */}
      <body className={`${sarabun.className} ${kanit.variable} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {/* เมนูบาร์ส่วนกลาง */}
        <Navbar />
        
        {/* เนื้อหาของแต่ละหน้าจะมาแสดงผลตรงนี้ */}
        <main className="grow max-w-6xl w-full mx-auto p-6 md:p-12">
          {children}
        </main>

        {/* ส่วนท้ายเว็บไซต์ (Footer เปล่า) */}
        <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm">
          © {new Date().getFullYear()} Thanphisit Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}