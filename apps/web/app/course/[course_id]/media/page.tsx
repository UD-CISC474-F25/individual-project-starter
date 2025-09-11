import File from '../../../../components/media/File';
import { FaRegFileAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaRegFileImage } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

// TODO - add magnifying glass icon to search bar
// TODO - add fake file data size for each file
// TODO - add storage bar at the bottom

export default function Page() {
  return (
    <div className="m-6 space-y-6">
      <div className="relative w-full">
        <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search files or media..."
          className="w-full border border-slate-400 rounded-md pl-10 pr-3 py-2 outline-none"
        />
      </div>
      <div className="rounded-lg border border-slate-300 bg-white shadow-sm">
        <div className="rounded-t-lg bg-sky-800 px-4 py-2">
          <h3 className="text-lg font-semibold text-white">Files</h3>
        </div>
        <div>
          <File text="Some-file.txt">
            <FaRegFileAlt />
          </File>
          <File text="Some-special-file.pdf">
            <GrDocumentPdf />
          </File>
          <File text="Some-image-file.png">
            <FaRegFileImage />
          </File>
        </div>
      </div>
      <div className="rounded-lg border border-slate-300 bg-white shadow-sm">
        <div className="rounded-t-lg bg-cyan-800 px-4 py-2">
          <h3 className="text-lg font-semibold text-white">Media</h3>
        </div>
        <div className="p-4">
          <p className="text-sky-600">
            There are currently no media resources for this course.
          </p>
        </div>
      </div>
    </div>
  );
}
