import React, { useEffect, useState } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import "./CaractersList.scss";
import Character from "../../components/Character/Character";

export function CharactersList() {
   // hooks
   const [characters, setCharacters] = useState([]);
   const [page, setPage] = useState(1);
   const [pages, setPages] = useState(1);

   useEffect(() => {
      getAllCharacters(page);
   }, [page]);

   // functions
   const getAllCharacters = async (page) => {
      try {
         const res = await RickMortyService.getAllCharacters(page);
         setCharacters(res.data.results);
         setPages(res.data.info.pages);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   return (
      <div className="container">
         <h1 className="h1 mt-5 mb-5">CharactersList</h1>
         <div className="characters-list">
            {characters.length > 0 &&
               characters.map((char) => (
                  <Character key={char.id} character={char} />
               ))}
         </div>
      </div>
   );
}
