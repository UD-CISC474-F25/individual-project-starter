export default function Course({ courseName }: { courseName?: string }) {
  return (
    <div className="w-11/12 p-4 border border-slate-500 bg-slate-950 text-white m-auto my-5 rounded-sm">
      {courseName}
    </div>
  );
}
