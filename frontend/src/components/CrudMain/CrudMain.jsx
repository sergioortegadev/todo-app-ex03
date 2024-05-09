import { useState, useEffect } from "react";
import List from "../List/List";
import Form from "../Form/Form";
import Search from "../Search/Search";

const CrudMain = ({ title }) => {
  const backUrl = "http://localhost:5000/v1/todo";

  const [prods, setProds] = useState([]);
  const [show, setShow] = useState("");

  const getProd = async (url, param) => {
    if (param === undefined) {
      const prods = await fetch(url).then((res) => res.json());
      return await prods.data;
    }
    console.log("no es undefined");
  };

  useEffect(() => {
    (async () => setProds(await getProd(backUrl)))();
  }, []);

  return (
    <>
      <Search />
      {show === "form" && <Form />}
      {prods && <List products={prods} />}
    </>
  );
};
export default CrudMain;
