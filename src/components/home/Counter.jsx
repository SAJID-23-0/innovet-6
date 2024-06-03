import CountUp from "react-countup";

const Counter = ({ countvalue, title, border, countpost }) => {
  return (
    <div className={`text-center w-1/4 ${border} m-auto`}>
      <h3 className="text-[64px] text-brand font-extrabold font-open">
        {<CountUp end={countvalue} />}
        {countpost}
      </h3>
      <p className=" text-3xl font-bold font-open text-[#141135] capitalize">
        {title}
      </p>
    </div>
  );
};

export default Counter;
