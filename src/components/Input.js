import React, { useState } from "react";

const Input = ({ getSearch }) => {
   const [search, setSearch] = useState("");

   const handleSubmit = e => {
      e.preventDefault();
      getSearch(search);
      setSearch("");
   };
   const handleChange = e => {
      setSearch(e.target.value);
   };
   return (
      <form onSubmit={handleSubmit} className="input-group mt-3">
         <input
            type="text"
            className="form-control"
            placeholder="Search Recipe"
            aria-label=""
            value={search}
            onChange={handleChange}
            aria-describedby="basic-addon1"
         />
         <div className="input-group-prepend">
            <input
               className="btn btn-outline-secondary"
               type="submit"
               value="Search"
            />
         </div>
      </form>
   );
};

export default Input;
