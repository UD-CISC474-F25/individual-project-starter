import { FaDownload } from 'react-icons/fa6';

export default function File({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex text-base items-center m-2">
      <p className="flex items-center text-sky-700 hover:cursor-pointer hover:text-sky-800">
        <span className="mr-2">{children}</span>
        <u>{text}</u>
      </p>
      <p className="ml-auto hover:cursor-pointer">
        <FaDownload />
      </p>
    </div>
  );
}
