import { Link } from "react-router-dom";
import Class from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={`main__logo ${Class.logo}`}>
      <Link to="/" title="Your privat but professional finance app">
        <img
          src="./logo-large.svg"
          alt="Finace Large Logo "
          className={`${Class.logo__large} logo__large `}
        />
      </Link>
    </div>
  );
};

export default Logo;
