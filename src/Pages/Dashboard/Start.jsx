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
import {
  BalanceData,
  TransactionsData,
  BudgetsData,
  PotsData,
  recurringBillsData,
} from "../../Services/FinanceCalculations";

//Test Data. The real data will be fetched from the API
import Doughnut from "../../Components/Charts/Doughnut";
import LeftLine from "../../Components/LeftLine/LeftLine";
import Grid3Cols from "../../Components/Grids/Grid3Cols/Grid3Cols";
import Grid2Cols from "../../Components/Grids/Grid2Cols/Grid2Cols";

const Start = () => {
  const balance = BalanceData();

  const transactions = TransactionsData();
  const transactionsMax = 4;

  const pots = PotsData();

  // get the budgets data
  const budgets = BudgetsData();

  //Recuring Bills
  const recurringBills = recurringBillsData();
  return (
    <>
      <MainTitle>Overview</MainTitle>
      <section className="top_section">
        <Grid3Cols>
          <ContentContainer
            colorMode="dark"
            shadow={true}
            marginBlockEnd={true}
          >
            <SmallTitle>Current Balance</SmallTitle>
            <PageTitle>{Currency(balance.current, 2)}</PageTitle>
          </ContentContainer>
          <ContentContainer
            colorMode="light"
            shadow={true}
            marginBlockEnd={true}
            className={"bg-white-100"}
          >
            <SmallTitle className={" txt-grey-300"}>Income</SmallTitle>
            <PageTitle>{Currency(balance.income, 2)}</PageTitle>
          </ContentContainer>
          <ContentContainer
            colorMode="light"
            shadow={true}
            className={"bg-white-100"}
          >
            <SmallTitle className={" txt-grey-300"}>Expenses</SmallTitle>
            <PageTitle>{Currency(balance.expenses, 2)}</PageTitle>
          </ContentContainer>
        </Grid3Cols>
      </section>

      <section className="pots_section" style={{ marginBlockEnd: "16px" }}>
        <ContentContainer
          dark={false}
          shadow={false}
          marginBlockEnd={false}
          className={"bg-white-100"}
        >
          {/* Pots Header Data */}
          <Flex
            between="space-between"
            itemsCenter="center"
            margin="0 0 32px 0"
          >
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
          <Grid2Cols>
            <ContentContainer colorMode={false} className="bg-beige-100">
              <Flex itemsCenter="center" gap="16px">
                <div className="icon">
                  <img src="/icon-pot.svg" alt="Pots Icon" />
                </div>
                <Flex direction="column" gap="11px">
                  <SmallTitle>Total Saved</SmallTitle>
                  <PageTitle>{Currency(pots.potsSavingTotal)}</PageTitle>
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
              {pots.pots &&
                pots.pots.length > 0 &&
                pots.pots.map(
                  ({ name, total, theme }, index) =>
                    index < 4 && (
                      // Pots Data
                      <LeftLine
                        name={name}
                        total={Currency(total)}
                        theme={theme}
                        key={index}
                      />
                    )
                )}
            </div>
          </Grid2Cols>
        </ContentContainer>
      </section>
      {/* Pots Section End */}
      {/* Transactions Section Start */}
      <section
        className="transactions_section"
        style={{ marginBlockEnd: "24px" }}
      >
        <ContentContainer className={"bg-white-100"}>
          {/* Transactions Header Data */}
          <Flex
            className="Start__transactions__header"
            between="space-between"
            itemsCenter="center"
            margin="0 0 32px 0"
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
                      key={index}
                      data-category={category}
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
        {/* Budgets Section start */}
        <ContentContainer className={"bg-white-100"}>
          {/* Budgets Header Data */}
          <Flex
            className="Start__transactions__header"
            between="space-between"
            itemsCenter="center"
            margin="0 0 32px 0"
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
          <div className="budgets_content__container">
            {/* Budgets Data Start*/}
            <div className="chart__container" style={{ position: "relative" }}>
              {/* Chart Doughnut */}
              <Doughnut />
              {/* data inside the Doughnut element */}
              <h3
                style={{
                  fontSize: "2rem",
                  lineHeight: "120%",
                  fontWeight: "bold",
                  position: "absolute",
                  inset: "50% auto auto 50%",
                  transform: "translate(-50%,-50%)",
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
                  <span>{Currency(budgets.transactionsBudgetTotal)} </span>
                  <small
                    className="txt-grey-300"
                    style={{
                      fontSize: "12px",
                      fontWeight: "normal",
                      lineHeight: "150%",
                    }}
                  >
                    of {Currency(budgets.budgetsTotal)} limit
                  </small>
                </span>
              </h3>
            </div>
            <div
              className="budgets_items__container"
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "8px",
                marginBlock: "1rem",
              }}
            >
              {budgets.budgets &&
                budgets.budgets.length > 0 &&
                budgets.budgets.map(({ category, maximum, theme }, index) => (
                  <div
                    className="budgets_item__Container"
                    key={index}
                    style={{ flexBasis: "1", flexGrow: 1, width: "45%" }}
                  >
                    <LeftLine
                      name={category}
                      total={Currency(maximum)}
                      theme={theme}
                    />
                  </div>
                ))}
            </div>
            {/* Budgets Data End*/}
          </div>
        </ContentContainer>
        {/* Budgets Section start */}
      </section>
      <section
        className="recurringbills_section"
        style={{ marginBlockEnd: "4rem" }}
      >
        <ContentContainer className={"bg-white-100"}>
          {/* Recurring Bills Header Data */}
          <Flex
            className="Start__transactions__header"
            between="space-between"
            itemsCenter="center"
            margin="0 0 32px 0"
          >
            <MidTitle>Recurring Bills</MidTitle>
            <SmallTitle>
              <Link
                to="/recurring_bills"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span className="text txt-grey-300">See Details</span>
                <span className="icon">
                  <img src="/icon-caret-right.svg" alt="See Details Arrow" />
                </span>
              </Link>
            </SmallTitle>
          </Flex>

          {/* Recurring Bills Content Start */}
          <div
            className="bg-beige-100"
            style={{
              padding: "24px 1rem",
              borderRadius: "8px",
              borderInlineStart: "4px solid var(--clr-second-green)",
            }}
          >
            <Flex between="space-between" itemsCenter="center">
              <SmallTitle className="txt-grey-300">Paid Bills</SmallTitle>
              <SmallTitle style={{ fontWeight: "bold" }}>
                {Currency(recurringBills.paidBillsTotal, 2)}
              </SmallTitle>
            </Flex>
          </div>
          {/* Recurring Bills Content End */}
          {/* Recurring Bills Content Start */}
          <div
            className="bg-beige-100"
            style={{
              padding: "24px 1rem",
              borderRadius: "8px",
              borderInlineStart: "4px solid var(--clr-second-yellow)",
            }}
          >
            <Flex between="space-between" itemsCenter="center">
              <SmallTitle className="txt-grey-300">Total Upcoming</SmallTitle>
              <SmallTitle style={{ fontWeight: "bold" }}>
                {Currency(recurringBills.upcomingBillsTotal, 2)}
              </SmallTitle>
            </Flex>
          </div>
          {/* Recurring Bills Content End */}
          {/* Recurring Bills Content Start */}
          <div
            className="bg-beige-100"
            style={{
              padding: "24px 1rem",
              borderRadius: "8px",
              borderInlineStart: "4px solid var(--clr-second-cyan)",
            }}
          >
            <Flex between="space-between" itemsCenter="center">
              <SmallTitle className="txt-grey-300">Due Soon</SmallTitle>
              <SmallTitle style={{ fontWeight: "bold" }}>
                {Currency(recurringBills.dueSoonBillsTotal, 2)}
              </SmallTitle>
            </Flex>
          </div>
          {/* Recurring Bills Content End */}
        </ContentContainer>
      </section>
    </>
  );
};

export default Start;
