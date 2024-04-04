import { TiWarningOutline } from "react-icons/ti";

const ErrorDisplay = ({ message, retry }) => {
  return (
    <div className="col-span-3 w-full flex flex-col gap-6">
      <div className="flex items-center gap-4 bg-red-400 rounded-md p-5">
        <TiWarningOutline className="text-4xl" />
        <div>
          <h2>Oop! An error occurred.</h2>
          <p>{message}</p>
        </div>
      </div>

      <button
        onClick={retry}
        className="border text-gray-600 transition hover:bg-red-100 p-2 rounded-md"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorDisplay;
