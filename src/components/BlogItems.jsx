const BlogItems = ({ src, children, className }) => {
  return (
    <div className={`flex gap-20 ${className}`}>
      <div>
        <img src={src} alt="blog img" />
      </div>
      <div>
        <ul className="flex gap-8 text-[#726E9E] font-quicksand font-medium text-base">
          <li>
            <a className="hover:text-brand cursor-pointer">News </a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer">By Tomas Nikelson</a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer">Posted </a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer">5 Hours Ago </a>
          </li>
        </ul>
        <h3 className="text-3xl text-[#141135] font-open font-bold w-[550px] leading-10 mt-4 mb-5">
          {children}
        </h3>
        <a
          href=""
          className="text-[#141135] text-xl font-bold relative after:absolute px-3 after:right-0 after:-top-1 after:w-7 after:bg-[#19bf009e] after:h-10 after:-z-10 after:rounded-r-full after:transition-all hover:after:w-full hover:after:rounded-l-full"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogItems;
