import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" pt-36 pb-14 bg-[#48409C]">
      <div className="container">
        <div className="flex flex-wrap justify-between mb-20">
          <div className="f_details">
            <img src="Logo.png" alt="Logo" />
            <p className="sm:w-[449px] w-full font-nunito font-normal text-lg text-[#FEFEFE] mt-11">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="f_feature">
            <h3 className="font-semibold font-open text-2xl text-white">
              Features
            </h3>
            <ul className="flex flex-col gap-7 font-nunito font-semibold text-xl text-white mt-12">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Benifit</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="f_products">
            <h3 className="font-semibold font-open text-2xl text-white">
              Products
            </h3>
            <ul className="flex flex-col gap-7 font-nunito font-semibold text-xl text-white mt-12">
              <li>
                <Link>Task Management</Link>
              </li>
              <li>
                <Link>Company growth</Link>
              </li>
              <li>
                <Link>Time tracking</Link>
              </li>
            </ul>
          </div>
          <div className="f_support">
            <h3 className="font-semibold font-open text-2xl text-white">
              Support
            </h3>
            <ul className="flex flex-col gap-7 font-nunito font-semibold text-xl text-white mt-12">
              <li>
                <Link>Customer service </Link>
              </li>
              <li>
                <Link>Accessibility </Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:flex justify-between">
          <div>
            <p className="font-nunito font-normal text-lg text-[#FEFEFE]">
              @20201 Innovate.All rights reserved.
            </p>
          </div>
          <div className="flex gap-14">
            <Link className="font-nunito font-normal text-lg text-[#FEFEFE]">
              Privacy policy
            </Link>
            <Link className="font-nunito font-normal text-lg text-[#FEFEFE]">
              Terms & condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
