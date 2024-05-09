import "./Search.css";
import { useEffect, useState } from "react";

const Search = ({ getSearch }) => {
  let initialSearch = {
    text: "",
    id: "",
  };
  const [search, setSearch] = useState(initialSearch);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearch({
      ...search,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    //getSearch();
  };

  useEffect(() => {
    if (search.text.length > 2) {
      //getSearch(search);
      console.log("enviando a buscar " + search.text);
    }
  }, [search.text]);

  useEffect(() => {
    setSearch({
      id: search.id,
      text: "",
    });
    console.log("Borra text y busca por id: " + search.id);
  }, [search.id]);

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            value={search.text}
            onChange={handleChange}
            placeholder="Search by title/description"
          />
          <input type="number" name="id" value={search.id} onChange={handleChange} placeholder="Search by ID" />

          <input type="submit" value="🔍" />
        </form>
      </div>
    </>
  );
};

export default Search;
