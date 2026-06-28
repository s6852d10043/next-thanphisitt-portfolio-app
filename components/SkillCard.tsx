interface SkillCardProps {
  category: string;
  items: string[];
}

export default function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
      <h3 className="font-(family-name:--font-kanit) text-lg font-bold text-blue-600 mb-4 pb-1 border-b border-slate-100">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}