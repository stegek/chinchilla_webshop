export default function orderReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, orders: [...state.orders, action.payload] };

    case "REMOVE":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };

    case "UPDATE":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };

    case "RESET":
      return { ...state, orders: [] };

    default:
      return state;
  }
}
