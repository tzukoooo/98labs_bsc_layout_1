import React from "react";
import { Form, Icon, Popup, Grid, Segment } from "semantic-ui-react";
import { useGlobalContext } from "../../Context/GlobalState";

const CreditCard = () => {
  const { cardInfo, updateCardFn } = useGlobalContext();

  const { cardNumber, cardMonth, cardYear, cardHolder, cardVerify } = cardInfo;
  const {
    updateCardNumber,
    updateCardMonth,
    updateCardYear,
    updateCardHolder,
    updateCardVerifyNumber,
  } = updateCardFn;

  const filterToNum = (value) => {
    const arr = value.match(/\d+/g) ? value.match(/\d+/g).join("") : "";
    return arr;
  };

  const checkCCNumber = (value) => {
    if (value.length === 0) updateCardNumber(value);
    else {
      const ccNumberedOnly = filterToNum(value);
      if (ccNumberedOnly.length <= 16) {
        updateCardNumber(ccNumberedOnly);
      }
    }
  };

  const checkDateNumber = (value, prevVal, limit) => {
    return value <= limit ? filterToNum(value) : prevVal;
  };

  const checkCardVerification = (value) => {
    if (value.length === 0) updateCardVerifyNumber(value);
    else {
      const cardVerifyNumOnly = filterToNum(value);
      if (cardVerifyNumOnly.length <= 3)
        updateCardVerifyNumber(cardVerifyNumOnly);
    }
  };

  return (
    <Form>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Segment>
              <Form.Field required>
                <label>Card Number</label>
                <Form.Input
                  error={
                    cardNumber.error
                      ? {
                          content: cardNumber.error,
                          pointing: "below",
                        }
                      : false
                  }
                  type="text"
                  icon="credit card outline"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    checkCCNumber(e.target.value);
                  }}
                  value={
                    cardNumber.value &&
                    cardNumber.value.match(/.{1,4}/g).join(" ")
                  }
                />
              </Form.Field>

              <Form.Field required>
                <label>Valid thru (mm/yy)</label>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Form.Input
                        error={
                          cardMonth.error
                            ? {
                                content: cardMonth.error,
                                pointing: "below",
                              }
                            : false
                        }
                        type="text"
                        pattern="[0-9]*"
                        onChange={(e) => {
                          updateCardMonth(
                            checkDateNumber(e.target.value, cardMonth.value, 12)
                          );
                        }}
                        min={1}
                        max={12}
                        value={cardMonth.value}
                      />
                    </Grid.Column>
                    <Grid.Column
                      width={1}
                      verticalAlign="middle"
                      textAlign="center"
                    >
                      /
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Form.Input
                        error={
                          cardYear.error
                            ? {
                                content: cardYear.error,
                                pointing: "below",
                              }
                            : false
                        }
                        type="text"
                        pattern="[0-9]*"
                        onChange={(e) => {
                          updateCardYear(
                            checkDateNumber(e.target.value, cardYear.value, 99)
                          );
                        }}
                        min={0}
                        max={99}
                        value={cardYear.value}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form.Field>

              <Form.Field required>
                <label>Cardholder's name</label>
                <Form.Input
                  error={
                    cardHolder.error
                      ? {
                          content: cardHolder.error,
                          pointing: "below",
                        }
                      : false
                  }
                  type="text"
                  pattern="[A-Za-z]*"
                  onChange={(e) => {
                    updateCardHolder(e.target.value);
                  }}
                  value={cardHolder.value}
                />
              </Form.Field>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment style={{ border: "none", boxShadow: "none" }}>
              <Form.Field required>
                <label>CVV/CVC</label>
                <Form.Input
                  error={
                    cardVerify.error
                      ? {
                          content: cardVerify.error,
                          pointing: "below",
                        }
                      : false
                  }
                  type="text"
                  icon={
                    <Popup
                      content="Your CVV number can be located by looking on the surface of your credit card"
                      trigger={<Icon name="question circle outline" link />}
                    />
                  }
                  pattern="[0-9]*"
                  onChange={(e) => {
                    checkCardVerification(e.target.value);
                  }}
                  value={cardVerify.value}
                ></Form.Input>
              </Form.Field>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default CreditCard;
