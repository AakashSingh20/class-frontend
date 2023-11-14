import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [allData, setallData] = useState([]);
  // const [allClass, setallClass] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:4000/api/getClasses").then((res) => {
      setallData(res.data.allClasses);
      console.log("api", res.data.allClasses);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // const segregate = () => {
  //   const getClasses = [
  //     ...new Set(
  //       allData.map((item) => {
  //         return item.className;
  //       })
  //     ),
  //   ];
  //   setallClass(getClasses);
  //   console.log("getclass", getClasses);
  // };

  // useEffect(() => {
  //   segregate();
  // }, [allData]);

  return (
    <MainContext.Provider
      value={{ modalVisible, setmodalVisible, allData, setallData }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
