import React from "react";
import { Icon, Container, Header } from "semantic-ui-react";

const DemoStore = () => {
  const navStyle = { marginTop: "1rem" };
  return (
    <Container textAlign="center" style={navStyle}>
      <Header as="h3">
        <Icon circular color="teal" name="gift" />
        Demo Store
      </Header>
    </Container>
  );
};

export default DemoStore;
