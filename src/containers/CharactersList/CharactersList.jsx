import React, { useEffect, useState } from "react";
import { characterService } from "../../services/characterService";
import { useNavigate } from "react-router-dom";

export function CharactersList() {
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      characterService.getAllCharacters().then((res) => {
         setCharacters(res.data.results);
      });
   }, []);

   const selectCharacter = (character) => {
      navigate(`/character/${character.id}`);
   };

   return (
      <div>
         <h1>CharactersList</h1>

         {characters.length > 0 &&
            characters.map((char) => (
               <div key={char.id} onClick={() => selectCharacter(char)}>
                  {char.name}
               </div>
            ))}
      </div>
   );
}
