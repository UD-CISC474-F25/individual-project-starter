import Media from '../../../../components/media/Media';
import File from '../../../../components/media/File';
import { FaRegFileAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaRegFileImage } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="m-6 space-y-6">
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
