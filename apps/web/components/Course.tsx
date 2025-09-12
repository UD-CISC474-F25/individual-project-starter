export default function Course({ courseName }: { courseName?: string }) {
  return (
    <div className="w-11/12 p-4 hover:cursor-pointer border-2 border-slate-400 bg-slate-700 text-white m-auto my-5 rounded-sm">
      {courseName}
    </div>
  );
}
