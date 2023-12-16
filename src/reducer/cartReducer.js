import { initialState } from "../context/CartContext";
export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };
    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };
    default:
      return state;
  }
};