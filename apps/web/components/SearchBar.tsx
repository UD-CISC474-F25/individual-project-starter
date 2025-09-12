import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative w-full my-5">
      <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-2 border-slate-700 rounded-md pl-10 pr-3 py-2 outline-none"
      />
    </div>
  );
}
