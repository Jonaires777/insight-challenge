import { IoMdHome, IoMdAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-sky-500 shadow-md flex justify-between p-4">
      <p className="text-white flex items-center gap-1 hover:scale-110 transition ease-in delay-100 cursor-pointer">
        <IoMdHome size={24} />
        Inicio
      </p>
      <p className="text-white flex items-center gap-1 hover:scale-110 transition ease-in delay-100 cursor-pointer">
        <IoMdAddCircleOutline size={24} />
        Adicionar Fonecedor
      </p>
    </nav>
  );
};

export default Navbar;
