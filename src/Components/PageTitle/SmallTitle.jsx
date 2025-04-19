import Class from "./SmallTitle.module.scss";

const SmallTitle = ({ children, className, ...props }) => {
  return (
    <h4
      className={`${Class.small__title} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </h4>
  );
};

export default SmallTitle;
