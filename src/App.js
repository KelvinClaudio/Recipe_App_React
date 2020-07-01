import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
   const ID = "96c1fdce";
   const KEY = "ae54e37bb318758259796c9a7199d9f2";
   const [search, setSearch] = useState("");
   const [recipes, setRecipes] = useState([]);
   useEffect(() => {
      if (search) {
         fetchData();
      }
   }, [search]);

   const fetchData = async () => {
      const response = await fetch(
         `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=20`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
   };

   const getSearch = value => {
      setSearch(value);
   };

   return (
      <div className="container text-center mt-5">
         <h1 style={{ letterSpacing: "2px", textTransform: "uppercase" }}>
            Recipe App
         </h1>
         <Input getSearch={getSearch} />
         <Result recipes={recipes} />

         <br />
      </div>
   );
}

export default App;
