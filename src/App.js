import React from "react";
import { Container } from "semantic-ui-react";

import Checkout from "./Components/Checkout";
import { Provider } from "./Context/GlobalState";
import DemoStore from "./Components/Header/DemoStore";

function App() {
  return (
    <Provider>
      <Container>
        <DemoStore />
        <Checkout />
      </Container>
    </Provider>
  );
}

export default App;
