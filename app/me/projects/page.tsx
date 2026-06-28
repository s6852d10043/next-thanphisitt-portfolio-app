export default function ProjectsPage() {
  // ข้อมูลโปรเจกต์จริงจาก GitHub ของคุณ s6852d10043 (ไม่มีการดึงรูปภาพแล้ว)
  const projects = [
    {
      title: 'BMR Calculator Mobile Application (rn-bmr-v2-app)',
      description: 'แอปพลิเคชันมือถือสำหรับคำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐานของร่างกายรายวัน มีระบบ Splash Screen และหน้าจอคำนวณที่รองรับการเลือกเพศพร้อมแสดงผลลัพธ์แบบ Interactive',
      tech: ['TypeScript', 'React Native', 'JavaScript', 'Expo'],
      role: 'Mobile Developer (ออกแบบโครงสร้าง Component เลือกเพศ, วางตรรกะ Harris-Benedict Equation และทำระบบ Data Validation ป้องกันข้อมูลว่าง)',
      year: '2026',
    },
    {
      title: 'SAU Student Portfolio Web App',
      description: 'ระบบเว็บไซต์พอร์ตโฟลิโอส่วนตัวสำหรับนักศึกษาเพื่อใช้ประกอบการสมัครงาน พัฒนาโดยเน้นเรื่องความเร็วและการจัดโครงสร้างแบบ App Router ตามมาตรฐานสากล',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      role: 'Frontend Developer (จัดทำ Shared Component พัฒนาระบบ Routing 6 หน้า และทำ Font/Image Optimization)',
      year: '2026',
    },
    {
      title: 'E-Commerce Backoffice & Database Management',
      description: 'ระบบหลังบ้านสำหรับจัดการคลังสินค้าออนไลน์ มีฟังก์ชันเพิ่ม ลบ แก้ไข รายการสินค้า และระบบตรวจสอบคำสั่งซื้อจากลูกค้า',
      tech: ['Node.js', 'Express', 'MySQL', 'Sequelize'],
      role: 'Backend Developer (ออกแบบโครงสร้างฐานข้อมูล Relational Database และพัฒนา RESTful API สำหรับเชื่อมต่อหน้าบ้าน)',
      year: '2025',
    }
  ];

  return (
    <div className="space-y-8">
      {/* ส่วนหัวข้อหลัก */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-800">
          My Projects (ผลงานของฉัน)
        </h2>
        <p className="text-slate-500 mt-1">รายการโปรเจกต์ที่ได้พัฒนาและจัดเก็บไว้บน GitHub (s6852d10043)</p>
      </div>

      {/* รายการการ์ดโปรเจกต์แบบ Text-Only (ไม่มีรูปภาพ) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between space-y-6 hover:shadow-md hover:border-blue-100 transition duration-300 relative overflow-hidden group"
          >
            {/* ตกแต่งแถบสีน้ำเงินเล็ก ๆ ด้านบนการ์ดเพิ่มความสวยงามทดแทนรูปภาพ */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-500 opacity-80 group-hover:opacity-100 transition" />

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                {proj.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {proj.description}
              </p>
              
              {/* รายละเอียดบทบาทและปีที่พัฒนา */}
              <div className="text-xs space-y-1.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p><strong>บทบาทหน้าที่:</strong> {proj.role}</p>
                <p><strong>ปีที่พัฒนา:</strong> {proj.year}</p>
              </div>
            </div>

            {/* แท็กเทคโนโลยีที่ใช้ด้านล่างสุด */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {proj.tech.map((t, i) => (
                <span key={i} className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}