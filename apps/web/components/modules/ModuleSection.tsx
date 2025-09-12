export default function ModuleSection({
  sectionTitle,
}: {
  sectionTitle: string;
}) {
  return (
    <div className="p-3 border border-slate-200 hover:bg-slate-300 hover:cursor-pointer">
      <p>{sectionTitle}</p>
    </div>
  );
}
