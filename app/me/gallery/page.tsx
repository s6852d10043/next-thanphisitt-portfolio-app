'use client'; // ต้องใส่บรรทัดนี้ไว้บนสุด เพราะเราจะใช้ useState ในการเช็คสถานะรูปภาพ

import { useState } from 'react';
import Image from 'next/image';

// สร้าง Component ย่อยเพื่อเช็คว่ารูปภาพโหลดผ่านไหม
function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-4">
      {/* ⚠️ เงื่อนไข: ถ้าหาไฟล์รูปไม่เจอ (Error) ให้แสดงกล่องข้อความเตือนแทนรูปภาพ */}
      {isError ? (
        <div className="text-center space-y-2">
          <div className="text-4xl">🖼️</div>
          <p className="text-sm font-semibold text-amber-600 font-(family-name:--font-kanit)">
            ไม่พบไฟล์ภาพที่ {index}
          </p>
          <p className="text-xs text-slate-400">
            กรุณาเพิ่มไฟล์ชื่อ <code className="bg-slate-200 px-1 rounded text-red-500">{src.replace('/images/', '')}</code> ไว้ในโฟลเดอร์ <span className="underline">public/images/</span>
          </p>
        </div>
      ) : (
        /* 🚀 ถ้ารูปโหลดปกติ ให้แสดงรูปตามข้อกำหนด Image Optimization */
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover hover:scale-105 transition duration-300"
          onError={() => setIsError(true)} // หาก Next.js ตรวจว่าไม่มีไฟล์รูปจริง จะสั่งให้เปลี่ยนสถานะเป็น Error ทันที
        />
      )}
    </div>
  );
}

export default function GalleryPage() {
  // จำลองพาธรูปภาพ 6 รูปตามโจทย์ต้องการ
  const galleryImages = [
    '/coding1.jpg',
    '/coding2.jpg',
    '/coding3.jpg',
    '/coding4.jpg',
    '/coding5.jpg',
    '/coding6.jpg',
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-800">
          Coding Gallery
        </h2>
        <p className="text-slate-500 mt-1">แสดงภาพบรรยากาศขณะศึกษาและเขียนโปรแกรมจำนวน 6 ภาพ</p>
      </div>

      {/* Grid แสดงรูปภาพ 6 ช่อง */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, idx) => (
          <GalleryImage 
            key={idx} 
            src={src} 
            alt={`Coding Activity ${idx + 1}`} 
            index={idx + 1} 
          />
        ))}
      </div>
    </div>
  );
}