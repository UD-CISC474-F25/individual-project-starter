export default function Assignment({
  assignmentTitle,
  score,
  outOf,
}: {
  assignmentTitle: string;
  score: number;
  outOf: number;
}) {
  return (
    <div className="flex mb-4 p-3 border-2 border-slate-500 bg-sky-950 rounded-md w-full text-white">
      {assignmentTitle}
      <div className="ml-auto flex">
        <div className="text-right">
          <span className="text-lg font-semibold text-yellow-400">{score}</span>
          /{outOf}
        </div>
      </div>
    </div>
  );
}
