const Button = ({ title, color }) => {
  return (
    <button
      className={`${color} py-3 px-7 font-open text-lg font-bold capitalize hover:text-white border-2 border-brand rounded-full hover:bg-brand transition-all`}
    >
      {title}
    </button>
  );
};

export default Button;
