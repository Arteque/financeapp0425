const Flex = ({ children, direction, between, itemsCenter, gap, props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: direction ? direction : null,
        justifyContent: between ? between : null,
        alignItems: itemsCenter ? itemsCenter : null,
        gap: gap ? gap : null,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
