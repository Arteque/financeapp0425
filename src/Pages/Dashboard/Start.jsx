//React imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import Flex from "../../Components/Layouts/Flex";
import MainTitle from "../../Components/PageTitle/MainTitle";
import MidTitle from "../../Components/PageTitle/MidTitle";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SmallTitle from "../../Components/PageTitle/SmallTitle";
import Avatar from "../../Components/Avatar/Avatar";

//Utilities
import Currency from "../../Services/Currency";
import DateFormater from "../../Services/DateFormater";

//Test Data. The real data will be fetched from the API
import Data from "../../API/data.json";
import Doughnut from "../../Components/Charts/Doughnut";

const Start = () => {
  const transactions = Data.transactions;
  const transactionsMax = 4;

  // get the budgets data
  const budgets = Data.budgets;

  // get the categories used in the budgets table
  const budgetsCategories = budgets.map(({ category }) => category);
  
  // budgetsCategories used in the transactions table and group them by category
  const transactionsCategories = budgetsCategories.map((item) => {
    const filteredTransactions = transactions.filter(transaction => {
      if(transaction.category== item) return transaction
    })
    return filteredTransactions
  })

  console.log(transactionsCategories)

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
          {/* Transactions Header Data */}
          <Flex
            className="Start__transactions__header"
            between="space-between"
            itemsCenter="center"
          >
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
          {/* Transaction list START */}
          <Flex
            direction="column"
            between={"space-between"}
            itemsCenter={"center"}
          >
            {transactions &&
              transactions.length > 0 &&
              transactions.map(
                ({ avatar, name, category, date, amount, recurring }, index) =>
                  index <= transactionsMax && (
                    <div
                      key={index} data-category={category}
                      className="transactions_item_container"
                      style={{
                        width: "100%",
                        paddingBlock: "24px",
                        borderBlockEnd: "1px solid var(--clr-grey-100)",
                      }}
                      data-recurring={recurring}
                    >
                      <Flex
                        direction={"row"}
                        between={"space-between"}
                        itemsCenter={"center"}
                        width={"100%"}
                      >
                        <Flex
                          direction={"row"}
                          gap={"16px"}
                          itemsCenter={"center"}
                        >
                          <Avatar src={"/avatars/" + avatar} alt={name} />

                          <SmallTitle className={"txt-grey-400"}>
                            <b>{name}</b>
                          </SmallTitle>
                        </Flex>

                        <ul
                          className="transactions__amount_date"
                          style={{ textAlign: "right" }}
                        >
                          <li
                            className={
                              `${amount}` >= 0
                                ? ` txt-second-green`
                                : ` txt-grey-300`
                            }
                          >
                            <b
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                lineHeight: "150%",
                              }}
                            >
                              {amount >= 0 && `+`}
                              {Currency(amount, true)}
                            </b>
                          </li>
                          <li
                            className={" txt-grey-300"}
                            style={{
                              fontSize: "12px",
                              fontWeight: "normal",
                              lineHeight: "150%",
                            }}
                          >
                            {DateFormater(date)}
                          </li>
                        </ul>
                      </Flex>
                    </div>
                  )
              )}
          </Flex>
          {/* Transaction list END */}
        </ContentContainer>
      </section>

      <section className="buddgets_section" style={{ marginBlockEnd: "24px" }}>
        <ContentContainer>
          {/* Budgets Header Data */}
          <Flex
            className="Start__transactions__header"
            between="space-between"
            itemsCenter="center"
          >
            <MidTitle>Budgets</MidTitle>
            <SmallTitle>
              <Link
                to="/budgets"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span className="text txt-grey-300">See Details</span>
                <span className="icon">
                  <img src="/icon-caret-right.svg" alt="See Details Arrow" />
                </span>
              </Link>
            </SmallTitle>
          </Flex>
          {/* Budgets Data Start*/}
          <div className="chart__container" style={{ position: "relative" }}>
            <Doughnut />
            <h3
              style={{
                fontSize:'2rem',
                lineHeight:'120%',
                fontWeight:'bold',
                position:'absolute',
                inset: '50% auto auto 50%',
                transform:'translate(-50%,-50%)',
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>{Currency(338)} </span>
                <small
                  className="txt-grey-300"
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    lineHeight: "150%",
                  }}
                >
                  of {Currency(975)} limit
                </small>
              </span>
            </h3>
          </div>
          {/* Budgets Data End*/}
        </ContentContainer>
      </section>
    </>
  );
};

export default Start;
