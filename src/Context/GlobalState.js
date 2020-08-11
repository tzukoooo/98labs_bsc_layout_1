import React, { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const Context = createContext();

export function useGlobalContext() {
  return useContext(Context);
}

export const Provider = ({ children }) => {
  const initialState = {
    items: [
      { name: "Apple - iPad with Retina display", price: "499.00" },
      { name: "16GB A Series Walkman Video MP3", price: "130.00" },
    ],
    shipping: {
      method: "FedEx",
      price: 13.99,
    },
    cardInfo: {
      cardNumber: { error: undefined, value: "" },
      cardMonth: { error: undefined, value: "" },
      cardYear: { error: undefined, value: "" },
      cardHolder: { error: undefined, value: "" },
      cardVerify: { error: undefined, value: "" },
    },
  };
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const updateCardNumber = (num) => {
    dispatch({
      type: "UPDATE_CARD_NUMBER",
      payload: { num },
    });
  };

  const updateCardMonth = (month) => {
    dispatch({
      type: "UPDATE_CARD_MONTH",
      payload: { month },
    });
  };

  const updateCardYear = (year) => {
    dispatch({
      type: "UPDATE_CARD_YEAR",
      payload: { year },
    });
  };

  const updateCardHolder = (name) => {
    dispatch({
      type: "UPDATE_CARD_HOLDER",
      payload: { name },
    });
  };

  const updateCardVerifyNumber = (verifyNum) => {
    dispatch({
      type: "UPDATE_CARD_VERIFY",
      payload: { verifyNum },
    });
  };

  const setCardNumberError = (error) => {
    dispatch({
      type: "ERROR_CARD_NUMBER",
      payload: { error },
    });
  };

  const setCardMonthError = (error) => {
    dispatch({
      type: "ERROR_CARD_MONTH",
      payload: { error },
    });
  };

  const setCardYearError = (error) => {
    dispatch({
      type: "ERROR_CARD_YEAR",
      payload: { error },
    });
  };

  const setCardHolderError = (error) => {
    dispatch({
      type: "ERROR_CARD_HOLDER",
      payload: { error },
    });
  };

  const setCardVerifyNumberError = (error) => {
    dispatch({
      type: "ERROR_CARD_VERIFY",
      payload: { error },
    });
  };

  const updateCardFn = {
    updateCardNumber,
    updateCardMonth,
    updateCardYear,
    updateCardHolder,
    updateCardVerifyNumber,
  };

  const errorCardFn = {
    setCardNumberError,
    setCardMonthError,
    setCardYearError,
    setCardHolderError,
    setCardVerifyNumberError,
  };

  return (
    <Context.Provider
      value={{
        items: state.items,
        cardInfo: state.cardInfo,
        shipping: state.shipping,
        updateCardFn,
        errorCardFn,
      }}
    >
      {children}
    </Context.Provider>
  );
};
