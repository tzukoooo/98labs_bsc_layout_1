export default (state, action) => {
  switch (action.type) {
    case "UPDATE_CARD_NUMBER":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardNumber: {
            error: undefined,
            value: action.payload.num,
          },
        },
      };

    case "UPDATE_CARD_MONTH":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardMonth: {
            error: undefined,
            value: action.payload.month,
          },
        },
      };

    case "UPDATE_CARD_YEAR":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardYear: {
            error: undefined,
            value: action.payload.year,
          },
        },
      };

    case "UPDATE_CARD_HOLDER":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardHolder: {
            error: undefined,
            value: action.payload.name,
          },
        },
      };

    case "UPDATE_CARD_VERIFY":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardVerify: {
            error: undefined,
            value: action.payload.verifyNum,
          },
        },
      };

    case "ERROR_CARD_NUMBER":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardNumber: {
            ...state.cardInfo.cardNumber,
            error: action.payload.error,
          },
        },
      };

    case "ERROR_CARD_MONTH":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardMonth: {
            ...state.cardInfo.cardMonth,
            error: action.payload.error,
          },
        },
      };

    case "ERROR_CARD_YEAR":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardYear: {
            ...state.cardInfo.cardYear,
            error: action.payload.error,
          },
        },
      };

    case "ERROR_CARD_HOLDER":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardHolder: {
            ...state.cardInfo.cardHolder,
            error: action.payload.error,
          },
        },
      };

    case "ERROR_CARD_VERIFY":
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          cardVerify: {
            ...state.cardInfo.cardVerify,
            error: action.payload.error,
          },
        },
      };

    default:
      return state;
  }
};
