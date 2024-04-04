import { FiSearch } from "react-icons/fi";

const Form = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="border  flex items-center rounded-full gap-1 hover:border-red-400"
    >
      <input
        className="bg-transparent py-2 px-4 outline-none"
        type="text"
        placeholder="Search By Country Name "
      />
      <button className="w-full h-full text-xl p-2 hover:text-red-400">
        <FiSearch />
      </button>
    </form>
  );
};

export default Form;
