const Gallaryitems = ({ className, src }) => {
  return (
    <div className={` w-1/4 ${className} `}>
      <img src={src} className="w-full" alt="gallary" />
    </div>
  );
};

export default Gallaryitems;
