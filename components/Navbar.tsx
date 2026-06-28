'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // ฟังก์ชันช่วยเช็คคลาสสี: ถ้าเป็นหน้าปัจจุบันให้สีเข้ม/มีเส้นใต้ ถ้าไม่ใช่ให้สีปกติ
  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-medium transition duration-200 py-1 ${
      isActive
        ? 'text-blue-600 border-b-2 border-blue-600 font-bold' // สไตล์เมื่ออยู่หน้านี้ (เด่นกว่า)
        : 'text-slate-600 hover:text-blue-500'                // สไตล์หน้าปกติทั่วไป
    }`;
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* โลโก้หรือชื่อแบรนด์ */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Thanphisit
        </Link>
        
        {/* รายการเมนูนำทาง */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/me/skills" className={linkClass('/me/skills')}>Skills</Link>
          <Link href="/me/projects" className={linkClass('/me/projects')}>Projects</Link>
          <Link href="/me/gallery" className={linkClass('/me/gallery')}>Gallery</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}