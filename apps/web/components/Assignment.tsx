export default function Assignment({
  assignmentTitle,
  score,
  outOf,
  date,
}: {
  assignmentTitle: string;
  score: number;
  outOf: number;
  date: string;
}) {
  return (
    <div className="flex mb-4 p-4 bg-slate-700 rounded-md w-full text-white">
      {assignmentTitle}
      <div className="ml-auto flex flex-col">
        <div className="text-right">
          <span className="text-lg font-semibold text-sky-400">{score}</span>/
          {outOf}
        </div>
        <span className="text-slate-400 text-sm">{date}</span>
      </div>
    </div>
  );
}
