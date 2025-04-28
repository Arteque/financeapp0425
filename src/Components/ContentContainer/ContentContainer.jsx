import Class from "./ContentCOntainer.module.scss";
const ContentContainer = ({
  children,
  props,
  colorMode,
  shadow,
  marginBlockEnd,
  className,
}) => {
  return (
    <div
      style={{
        boxShadow: shadow ? "0 4px 25px rgba(0 0 0 / 25%)" : "none",
        marginBlockEnd: marginBlockEnd ? "12px" : "0",
        background: `${colorMode === "dark" ? "var(--clr-grey-400)" : null}`,
        color: `${colorMode === "dark" ? "var(--clr-grey-100)" : null}`,
      }}
      className={`${Class.container} ${className ? className : null}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
