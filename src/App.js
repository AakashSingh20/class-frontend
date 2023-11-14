import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";
import { MainContext } from "./context/Main_context";
import Body from "./components/Body/Body";

function App() {
  const { modalVisible } = useContext(MainContext);

  return (
    <>
      <Header />
      <Body />
      <Modal isVisible={modalVisible} />
    </>
  );
}

export default App;
