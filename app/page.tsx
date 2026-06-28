import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-12 flex flex-col items-center">
      
      {/* 🖼️ ส่วนรูปภาพโปรไฟล์ - ปรับแก้พาธและเพิ่ม unoptimized เพื่อบังคับให้รูปขึ้นชัวร์บน Vercel */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-lg bg-slate-100">
        <Image 
          src="/images/me.jpg" // ลบเว้นวรรคหลัง .jpg ออกแล้ว
          alt="Thanphisit Profile"
          fill                 // ขยายภาพให้เต็มวงกลม
          priority             // สั่งให้ดาวน์โหลดภาพนี้เป็นอันดับแรกสุด
          unoptimized          // ป้องกันไม่ให้ระบบบีบอัดภาพของ Vercel บล็อกรูปภาพ
          className="object-cover"
        />
      </div>
      
      {/* 📝 ข้อมูลจริงสำหรับหน้าแรก - ปรับแก้คลาสฟอนต์เพื่อลบเส้นเหลืองกวนใจออกทั้งหมด */}
      <h1 className="text-4xl font-bold mb-2 text-slate-800">
        นายธัญพิสิษฐ์ 
      </h1>
      
      <p className="text-xl text-blue-600 font-semibold mb-4">
        ตำแหน่งที่ต้องการสมัคร: Full Stack Developer / Frontend Developer
      </p>
      
      <p className="text-slate-500 max-w-xl mb-8 leading-relaxed">
        ยินดีต้อนรับสู่เว็บไซต์พอร์ตโฟลิโอส่วนตัวของผมครับ ผมมีความสนใจในการพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ 
        และพร้อมที่จะเรียนรู้สิ่งใหม่ ๆ เพื่อสร้างสรรค์ผลงานที่มีประสิทธิภาพให้กับองค์กรครับ
      </p>

      {/* 🚀 ปุ่มนำทางเข้าสู่หน้าต่าง ๆ ตามข้อกำหนด */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm font-medium">
          ประวัติส่วนตัว (About Me)
        </Link>
        <Link href="/me/projects" className="bg-slate-200 text-slate-800 px-6 py-2 rounded-lg hover:bg-slate-300 transition shadow-sm font-medium">
          ดูผลงานทั้งหมด
        </Link>
      </div>

    </div>
  );
}