import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "./PageTitle";

const MainTitle = ({ children, ...props }) => {
  return (
    <header {...props}>
      <ContentContainer>
        <PageTitle>{children}</PageTitle>
      </ContentContainer>
    </header>
  );
};

export default MainTitle;
