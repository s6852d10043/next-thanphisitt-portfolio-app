import SkillCard from '@/components/SkillCard';

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-(family-name:--font-kanit) text-3xl font-bold text-slate-800">
        My Skills (ทักษะความสามารถ)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard category="Frontend" items={['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']} />
        <SkillCard category="Backend" items={['Node.js', 'Express', 'PHP']} />
        <SkillCard category="Database" items={['MySQL', 'PostgreSQL', 'Supabase']} />
        <SkillCard category="Tools" items={['Git', 'GitHub', 'VS Code', 'Docker']} />
      </div>
    </div>
  );
}