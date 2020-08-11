import React from "react";
import { Button } from "semantic-ui-react";

const PlaceOrder = (props) => {
  const { cardInfo, errorCardFn, check, setCheckValid, method, total } = props;
  const { cardNumber, cardMonth, cardYear, cardHolder, cardVerify } = cardInfo;

  const validateForm = () => {
    if (!check) setCheckValid(false);
    switch (method) {
      case "credit":
        const {
          setCardNumberError,
          setCardMonthError,
          setCardYearError,
          setCardHolderError,
          setCardVerifyNumberError,
        } = errorCardFn;

        if (!cardNumber.value)
          setCardNumberError("Please enter your Card Number");

        if (!cardMonth.value)
          setCardMonthError("Please enter your Card Expiration Month");

        if (!cardYear.value)
          setCardYearError("Please enter your Card Expiration Year");

        if (!cardHolder.value)
          setCardHolderError("Please enter your Card Holder Name");

        if (!cardVerify.value)
          setCardVerifyNumberError("Please enter your CVV/CVC");

        break;
      default:
    }
  };

  return (
    <Button color="orange" onClick={validateForm} fluid>
      Place order ( ${total} ){" "}
    </Button>
  );
};

export default PlaceOrder;
