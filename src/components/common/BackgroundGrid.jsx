const BackgroundGrid = () => {

  return (

    <div
      className="fixed inset-0 -z-50 opacity-[0.04]"
      style={{
        backgroundImage: `
        linear-gradient(to right,#ffffff 1px,transparent 1px),
        linear-gradient(to bottom,#ffffff 1px,transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    />

  );

};

export default BackgroundGrid;