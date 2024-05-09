import "./Form.css";
import { useState } from "react";

const Form = () => {
  let initialProd = {
    title: "",
    description: "",
    images: ["https://cdn.dummyjson.com/product-images/30/1.jpg"],
  };
  const [editProd, setEditProd] = useState(initialProd);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditProd(initialProd);
    console.log("enviand form");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProd({
      ...editProd,
      [name]: value,
    });
  };
  const cancelSubmit = () => {
    console.log("cancel submit");
  };

  return (
    <>
      <div className="form-new-prod">
        <h3>Add new product</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={editProd.title} onChange={handleChange} />

          <textarea name="description" value={editProd.description} onChange={handleChange} />

          <input type="submit" value="SAVE" />
          <input type="button" value="CANCEL" onClick={cancelSubmit} />
        </form>
      </div>
    </>
  );
};

export default Form;
