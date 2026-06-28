export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h2 className="font-(family-name:--font-kanit) text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2">
        About Me (เกี่ยวกับฉัน)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ฝั่งซ้าย: ข้อมูลส่วนตัว & การศึกษา */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-(family-name:--font-kanit) text-xl font-semibold text-blue-600 mb-3">ประวัติส่วนตัว</h3>
            <p className="text-slate-600 leading-relaxed">
              <strong>ชื่อ-นามสกุล:</strong> นายธัญพิสิษฐ์ กงพูน<br />
              <strong>ชื่อเล่น:</strong> บิ๊ก<br />
              <strong>Career Objective:</strong> มุ่งมั่นที่จะใช้ทักษะด้านการพัฒนาเว็บเพื่อสร้างสรรค์ระบบที่มีประสิทธิภาพ และพร้อมที่จะเติบโตไปกับทีมพัฒนาในฐานะนักพัฒนาเว็บมืออาชีพ
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-(family-name:--font-kanit) text-xl font-semibold text-blue-600 mb-3">ประวัติการศึกษา</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="border-l-2 border-blue-500 pl-3">
                <p className="font-semibold">มหาวิทยาลัยเอเชียอาคเนย์ (SAU)</p>
                <p className="text-sm">สาขาวิชา... (เช่น เทคโนโลยีดิจิทัลหรือวิทยาการคอมพิวเตอร์)</p>
              </li>
            </ul>
          </div>
        </div>

        {/* ฝั่งขวา: จุดแข็ง & ความสนใจ & งานอดิเรก */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-(family-name:--font-kanit) text-xl font-semibold text-blue-600 mb-3">จุดแข็ง (Strengths)</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>เรียนรู้เทคโนโลยีใหม่ๆ ได้รวดเร็ว</li>
              <li>มีความรับผิดชอบและทำงานเป็นทีมได้ดี</li>
              <li>ชอบแก้ไขปัญหาด้วยตรรกะและเหตุผล</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-(family-name:--font-kanit) text-xl font-semibold text-blue-600 mb-3">ความสนใจ & งานอดิเรก</h3>
            <p className="text-slate-600 leading-relaxed">
              <strong>ความสนใจ:</strong> Web Technology, AI Integration, UI/UX Design<br />
              <strong>งานอดิเรก:</strong> ฝึกเขียนโค้ดโปรเจ็กต์ย่อย, อ่านบทความเทคโนโลยี, ฟังเพลง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}