import { MdOutlineCoronavirus } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //aranilan country
    const text = e.target[0].value;
    // navigate to detail
    navigate(`/detail/${text}`);
  };
  return (
    <header className="flex bg-zinc-900 text-white py-5 px-10 md:px-20 justify-between items-center">
      <Link to={"/"} className="flex items-center gap-2">
        <MdOutlineCoronavirus className="text-red-400 text-3xl" />
        <h1 className="font-mono font-semibold text-lg">Covid-19 Tracker</h1>
      </Link>
      <Form handleSubmit={handleSubmit} />
    </header>
  );
};

export default Header;
