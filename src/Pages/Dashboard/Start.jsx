import { Link } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import Flex from "../../Components/Layouts/Flex";
import MainTitle from "../../Components/PageTitle/MainTitle";
import MidTitle from "../../Components/PageTitle/MidTitle";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SmallTitle from "../../Components/PageTitle/SmallTitle";

import Currency from "../../Services/Currency";

const Start = () => {
  return (
    <>
      <MainTitle>Overview</MainTitle>
      <section className="top_section">
        <ContentContainer colorMode="dark" shadow={true} marginBlockEnd={true}>
          <SmallTitle>Current Balance</SmallTitle>
          <PageTitle>{Currency(4836, 2)}</PageTitle>
        </ContentContainer>
        <ContentContainer colorMode="light" shadow={true} marginBlockEnd={true}>
          <SmallTitle className={" txt-grey-300"}>Income</SmallTitle>
          <PageTitle>{Currency(3814.25, 2)}</PageTitle>
        </ContentContainer>
        <ContentContainer colorMode="light" shadow={true}>
          <SmallTitle className={" txt-grey-300"}>Expenses</SmallTitle>
          <PageTitle>{Currency(1700.5, 2)}</PageTitle>
        </ContentContainer>
      </section>

      <section className="pots_section" style={{ marginBlockEnd: "16px" }}>
        <ContentContainer dark={false} shadow={false} marginBlockEnd={false}>
          {/* Pots Header Data */}
          <Flex between="space-between" itemsCenter="center">
            <MidTitle>Pots</MidTitle>
            <SmallTitle>
              <Link
                to="/pots"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span className="text txt-grey-300">See Details</span>
                <span className="icon">
                  <img src="/icon-caret-right.svg" alt="See Details Arrow" />
                </span>
              </Link>
            </SmallTitle>
          </Flex>
          {/* Total Saved */}
          <ContentContainer colorMode={false} className="bg-beige-100">
            <Flex itemsCenter="center" gap="16px">
              <div className="icon">
                <img src="/icon-pot.svg" alt="Pots Icon" />
              </div>
              <Flex direction="column" gap="11px">
                <SmallTitle>Total Saved</SmallTitle>
                <PageTitle>{Currency(850)}</PageTitle>
              </Flex>
            </Flex>
          </ContentContainer>
          <div
            className="savings_container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "auto",
              gap: "1rem",
            }}
          >
            {/* Savings Small */}
            <div
              className="saving__small"
              style={{ position: "relative", paddingInlineStart: "20px" }}
            >
              <div
                className="sabing__smal--color bg-second-green"
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: "4px",
                  borderRadius: "10px",
                }}
              ></div>
              <Flex direction="column" gap="4px">
                <SmallTitle className={"txt-grey-300"}>Savings</SmallTitle>
                <MidTitle>{Currency(159)}</MidTitle>
              </Flex>
            </div>
            {/* Savings Small */}
            <div
              className="saving__small"
              style={{ position: "relative", paddingInlineStart: "20px" }}
            >
              <div
                className="sabing__smal--color bg-second-cyan"
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: "4px",
                  borderRadius: "10px",
                }}
              ></div>
              <Flex direction="column" gap="4px">
                <SmallTitle className={"txt-grey-300"}>Gift</SmallTitle>
                <MidTitle>{Currency(40)}</MidTitle>
              </Flex>
            </div>
            {/* Savings Small */}
            <div
              className="saving__small"
              style={{ position: "relative", paddingInlineStart: "20px" }}
            >
              <div
                className="sabing__smal--color bg-second-navy"
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: "4px",
                  borderRadius: "10px",
                }}
              ></div>
              <Flex direction="column" gap="4px">
                <SmallTitle className={"txt-grey-300"}>
                  Concert Ticket
                </SmallTitle>
                <MidTitle>{Currency(110)}</MidTitle>
              </Flex>
            </div>
            {/* Savings Small */}
            <div
              className="saving__small"
              style={{ position: "relative", paddingInlineStart: "20px" }}
            >
              <div
                className="sabing__smal--color bg-second-yellow"
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: "4px",
                  borderRadius: "10px",
                }}
              ></div>
              <Flex direction="column" gap="4px">
                <SmallTitle className={"txt-grey-300"}>New Laptop</SmallTitle>
                <MidTitle>{Currency(10)}</MidTitle>
              </Flex>
            </div>
          </div>
        </ContentContainer>
      </section>
      <section
        className="transactions_section"
        style={{ marginBlockEnd: "24px" }}
      >
        <ContentContainer>
          <Flex between="space-between" itemsCenter="center">
            <MidTitle>Transactions</MidTitle>
            <SmallTitle>
              <Link
                to="/transactions"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span className="text txt-grey-300">See Details</span>
                <span className="icon">
                  <img src="/icon-caret-right.svg" alt="See Details Arrow" />
                </span>
              </Link>
            </SmallTitle>
          </Flex>
          <Flex direction="row" between={"space-between"} itemsCenter={"center"}>
            <Flex
              direction={"row"}
              between={"space-between"}
              itemsCenter={"center"}
            >
              <Flex direction={"row"} gap={"16px"} itemsCenter={"center"}>
                <img
                  src="/avatars/emma-richardson.jpg"
                  alt="Emma Richardson"
                  style={{
                    width: "32px",
                    aspectRatio: 1,
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                />
                <SmallTitle
                  className={"txt-grey-400"}
                  style={{ fontWeight: "bold" }}
                >
                  Emma Richardson
                </SmallTitle>
              </Flex>

              <Flex direction={"column"} gap={"8"}>
                <MidTitle
                  className={75.5 >= 0 ? `txt-second-green` : `txt-grey-300`}
                >
                  {75.5 >= 0
                    ? `+${Currency(75.5, true)}`
                    : `-${Currency(75.5)}`}
                </MidTitle>
                <SmallTitle>
                  19 Aug 2024
                </SmallTitle>
              </Flex>
            </Flex>
          </Flex>
        </ContentContainer>
      </section>
    </>
  );
};

export default Start;
