import { createContext } from "react";
import { useState } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);

  return (
    <MainContext.Provider value={{ modalVisible, setmodalVisible }}>
      {children}
    </MainContext.Provider>
  );
};

export default Context;
