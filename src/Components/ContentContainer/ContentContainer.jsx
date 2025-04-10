import Class from "./ContentCOntainer.module.scss";
const ContentContainer = ({ children, ...props }) => {
  return <div className={Class.container} {...props}>{children}</div>;
};

export default ContentContainer;
