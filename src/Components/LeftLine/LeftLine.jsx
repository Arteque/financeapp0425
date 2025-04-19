import React from "react";

import Flex from "../Layouts/Flex";
import SmallTitle from "../PageTitle/SmallTitle";
import MidTitle from "../PageTitle/MidTitle";

const LeftLine = ({name, theme, total, props}) => {
  return (
    <div
      className="saving__small"
      dataname={name}
      style={{ position: "relative", paddingInlineStart: "20px" }}
      {...props}
    >
      <div
        className="sabing__smal--color"
        style={{
          position: "absolute",
          inset: "0 auto 0 0",
          width: "4px",
          borderRadius: "10px",
          backgroundColor: `${theme}`,
        }}
      ></div>
      <Flex direction="column" gap="4px">
        <SmallTitle className={"txt-grey-300"}>{name}</SmallTitle>
        <MidTitle>{total}</MidTitle>
      </Flex>
    </div>
  );
};

export default LeftLine;
