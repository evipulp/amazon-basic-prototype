export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => amount + item.price, 0);

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "ADD_TO_BASKET":
      //logic for adding item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic for removing item form basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      newBasket.splice(index, 1);

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
