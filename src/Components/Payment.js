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

  return (
    <>
      <Header as="h3">Payment method</Header>
      <section style={paymentStyle}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button
                fluid
                onClick={() => setMethod("credit")}
                color={method === "credit" ? "blue" : undefined}
              >
                Credit Card
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                fluid
                onClick={() => setMethod("gift")}
                color={method === "gift" ? "blue" : undefined}
              >
                Gift Card
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                fluid
                onClick={() => setMethod("paypal")}
                color={method === "paypal" ? "blue" : undefined}
              >
                PayPal
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {method === "credit" && <CreditCard />}
        {method === "gift" && <GiftCard />}
        {method === "paypal" && <PayPal />}
      </section>
    </>
  );
};

export default Payment;
