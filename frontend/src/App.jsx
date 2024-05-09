import "./App.css";
import CrudMain from "./components/CrudMain/CrudMain";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("CRUD Prods");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const changeTitle = (text) => {
    setTitle(text);
  };
  return (
    <>
      <h1>CRUD Prods</h1>
      <CrudMain title={changeTitle} />
    </>
  );
}

export default App;
