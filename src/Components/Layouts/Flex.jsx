const Flex = ({ children, direction, between, itemsCenter, gap, width,margin, props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: direction ? direction : null,
        justifyContent: between ? between : null,
        alignItems: itemsCenter ? itemsCenter : null,
        width: width ? width : null,
        gap: gap ? gap : null,
        margin: margin ? margin : null,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
