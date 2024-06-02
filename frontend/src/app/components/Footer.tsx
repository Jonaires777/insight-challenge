import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const style = { color: "rgb(14 165 233)", fontSize: "1.5rem" };

  return (
    <footer className="border-t-2 border-sky-500 flex justify-center items-center gap-6 mt-auto p-4">
      <div className="flex gap-1 items-center cursor-pointer hover:scale-110 transition-all ease-in delay-100">
        <p className="text-sky-500">Linkedin</p>
        <FaLinkedin style={style} />
      </div>
      <div className="flex gap-1 items-center cursor-pointer hover:scale-110 transition-all ease-in delay-100">
        <p className="text-sky-500 ">Github</p>
        <FaGithub style={style} />
      </div>
      <div className="flex gap-1 items-center cursor-pointer hover:scale-110 transition-all ease-in delay-100">
        <p className="text-sky-500 ">Instagram</p>
        <FaInstagram style={style} />
      </div>
    </footer>
  );
};

export default Footer;
