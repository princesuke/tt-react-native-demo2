const uppercaseMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/setToken" && typeof action.payload === "string") {
    action.payload = action.payload.toUpperCase();
  }

  return next(action);
};

export default uppercaseMiddleware;
