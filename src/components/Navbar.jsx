import { FaChevronDown } from "react-icons/fa";
import Button from "./home/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" py-5 bg-[rgba(22,12,109,0.8)] absolute top-0 left-0 w-full z-50">
      <div className="container ">
        <div className="flex items-center justify-between">
          <div>
            <img src="/Logo.png" alt="Logo" />
          </div>
          <div className=" w-3/5  ">
            <ul className="text-white flex gap-10 items-center justify-center">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 group transition-all"
                >
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    Home
                  </span>
                  <FaChevronDown className=" text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="flex items-center gap-2 group transition-all"
                >
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    About
                  </span>
                  <FaChevronDown className=" text-xs" />
                </Link>
              </li>
              <li>
                <a className="flex items-center gap-2 group transition-all">
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    Service
                  </span>
                  <FaChevronDown className=" text-xs" />
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 group transition-all">
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    Portfolio
                  </span>
                  <FaChevronDown className=" text-xs" />
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 group transition-all">
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    Price
                  </span>
                  <FaChevronDown className=" text-xs" />
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 group transition-all">
                  <span className="group-hover:text-brand font-open text-lg font-semibold">
                    Blog
                  </span>
                  <FaChevronDown className=" text-xs" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button title="Contact Us" color="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
