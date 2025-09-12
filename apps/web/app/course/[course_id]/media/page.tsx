import File from '../../../../components/media/File';
import { FaRegFileAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaRegFileImage } from 'react-icons/fa';
import SearchBar from '../../../../components/SearchBar';

export default function Page() {
  return (
    <div className="mx-6 space-y-6">
      <SearchBar placeholder="Search files or media..." />
      <div className="rounded-lg border border-slate-300 bg-white shadow-sm">
        <div className="rounded-t-lg bg-sky-800 px-4 py-2">
          <h3 className="text-lg font-semibold text-white">Files</h3>
        </div>
        <div>
          <File text="Some-file.txt" fileSize={'17 KB'}>
            <FaRegFileAlt />
          </File>
          <File text="Some-special-file.pdf" fileSize={'2.5 MB'}>
            <GrDocumentPdf />
          </File>
          <File text="Some-image-file.png" fileSize={'1 MB'}>
            <FaRegFileImage />
          </File>
        </div>
        <div className="w-full p-1 bg-slate-200 mt-4">
          <div className="flex justify-end items-center gap-2">
            <div className="lg:w-1/4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                style={{ width: '3%' }}
              />
            </div>
            <span className="text-sm font-medium text-slate-400">
              3.5 MB of 500 MB used
            </span>
          </div>
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
