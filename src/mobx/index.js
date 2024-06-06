// stores/index.js
import React from "react";
import counterStore from "./counterStore";

export const storesContext = React.createContext({
  counterStore,
});

export const useStores = () => React.useContext(storesContext);
