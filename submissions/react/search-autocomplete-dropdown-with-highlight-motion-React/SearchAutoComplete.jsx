import React, { useState } from "react";

function SearchAutoComplete() {
    const [searchTerm, setSearchTerm] = useState("");
    const items = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS"
];
const filteritems=items.filter((items)=>
      items.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="ease-fade-in">
      
      <h2>Search Autocomplete</h2>
      
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

      {filteritems.map((item, index) => (
        <p key={index}> {item}</p>
      ))}


    </div>
  )
}

export default SearchAutoComplete
