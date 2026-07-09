const GradientBorder = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-[32px] p-[1.5px]
      bg-gradient-to-r
      from-fuchsia-500
      via-purple-500
      to-sky-400
      ${className}`}
    >
      <div
        className="rounded-[31px]
        bg-[#160A28]
        backdrop-blur-xl"
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;