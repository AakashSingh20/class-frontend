import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [allData, setallData] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:4000/api/getClasses").then((res) => {
      setallData(res.data.allClasses);
    });
  };
  useEffect(() => {
    getData();
  }, []);


  const [navData, setnavData] = useState({});

  const [className, setclassName] = useState("");

  const getNavData = async (classId,subId,clsName) => {
    setclassName(clsName);
    const res = await fetch(`http://localhost:4000/api/getSingleClass`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classId,
        subId
      }),
    }).then((res) => res.json());
    setnavData(res);
  }


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
      value={{ 
          modalVisible, 
          setmodalVisible, 
          allData, 
          setallData,
          getNavData,
          navData,
          className,
          setclassName
      }}  
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
