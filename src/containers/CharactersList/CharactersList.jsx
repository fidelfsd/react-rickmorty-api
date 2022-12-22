import React, { useEffect, useState } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import "./CaractersList.scss";
import Character from "../../components/Character/Character";

export function CharactersList() {
   // hooks
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      getAllCharacters();
   }, []);

   // functions
   const getAllCharacters = async () => {
      try {
         const res = await RickMortyService.getAllCharacters();
         setCharacters(res.data.results);
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
