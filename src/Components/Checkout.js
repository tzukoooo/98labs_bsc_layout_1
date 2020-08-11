import React, { useState } from "react";
import { Grid, Header } from "semantic-ui-react";

import Payment from "./Payment";
import TermsAgreement from "./TermsAgreement";
import PlaceOrder from "./PlaceOrder";
import { useGlobalContext } from "../Context/GlobalState";

const MyCart = (props) => {
  const { items } = props;

  const myCartStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingLeft: "1rem",
  };

  return (
    <>
      <Header as="h3">Products</Header>
      <section style={myCartStyle}>
        <Grid columns={2}>
          {items.map((item) => (
            <Grid.Row key={item.name}>
              <Grid.Column>{item.name}</Grid.Column>
              <Grid.Column textAlign={"right"}>${item.price}</Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </section>
    </>
  );
};

const ShippingMethod = (props) => {
  const { shipping } = props;
  const { method, price } = shipping;

  const shippingStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingLeft: "1rem",
  };

  return (
    <>
      <Header as="h3">Shipping method</Header>
      <section style={shippingStyle}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>{method}</Grid.Column>
            <Grid.Column textAlign={"right"}>${price}</Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    </>
  );
};

const Checkout = () => {
  const [method, setMethod] = useState("Credit Card");
  const [check, setCheck] = useState(false);
  const [checkValid, setCheckValid] = useState(true);
  const { cardInfo, errorCardFn, items, shipping } = useGlobalContext();

  const checkoutStyle = { marginTop: "2rem", marginBottom: "2rem" };
  return (
    <section style={checkoutStyle}>
      <Header as="h2"> Checkout</Header>
      <MyCart items={items} />
      <ShippingMethod shipping={shipping} />
      <Payment method={method} setMethod={setMethod} />
      <TermsAgreement
        check={check}
        checkValid={checkValid}
        setCheck={setCheck}
        setCheckValid={setCheckValid}
      />
      <PlaceOrder
        cardInfo={cardInfo}
        errorCardFn={errorCardFn}
        check={check}
        setCheckValid={setCheckValid}
        method={method}
        total={
          items.reduce((acc, cur) => {
            return acc + Number(cur.price);
          }, 0) + shipping.price
        }
      />
    </section>
  );
};

export default Checkout;
