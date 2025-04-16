import Class from "./MidTitle.module.scss";

const MidTitle = ({ children, className, props }) => {
  return (
    <h2 className={Class.mid__title + className} {...props}>
      {children}
    </h2>
  );
};

export default MidTitle;
