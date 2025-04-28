import Class from "./Grid2Cols.module.scss";

const Grid2Cols = ({ children, className, ...props }) => {
  return (
    <div
      className={`${Class.grid} grid-2-cols ${className ? className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid2Cols;
