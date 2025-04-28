import Class from "./Grid3Cols.module.scss";

const Grid3Cols = ({ children, ...props }) => {
  return (
    <div className={`${Class.grid} grid-3cols-container`} {...props}>
      {children}
    </div>
  );
};

export default Grid3Cols;
