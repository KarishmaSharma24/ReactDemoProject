import { createContext } from "react";

//step1
const BreadcromContext = createContext();

// 2nd step
const BreadcromProvider = ({children}) => {

      const pageName = "useContext Eg.";

      return <BreadcromContext.Provider value={pageName}>
      <span>{children}</span>
      </BreadcromContext.Provider>;
}

export { BreadcromProvider, BreadcromContext };