import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";

import CreditCard from "./Payment/CreditCard";
import GiftCard from "./Payment/GiftCard";
import PayPal from "./Payment/PayPal";

const Payment = (props) => {
  const { method, setMethod } = props;

  const paymentStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  const paymentTypes = ["Credit Card", "Gift Card", "PayPal"];

  return (
    <>
      <Header as="h3">Payment method</Header>
      <section style={paymentStyle}>
        <Grid columns={3}>
          <Grid.Row>
            {paymentTypes.map((payType) => (
              <Grid.Column>
                <Button
                  fluid
                  onClick={() => setMethod(payType)}
                  color={method === payType ? "blue" : undefined}
                >
                  {payType}
                </Button>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>

        {method === "Credit Card" && <CreditCard />}
        {method === "Gift Card" && <GiftCard />}
        {method === "PayPal" && <PayPal />}
      </section>
    </>
  );
};

export default Payment;
