import React, { useState, useEffect } from "react";
import { RickMortyService } from "../../services/RickMortyService";

import { useParams } from "react-router-dom";

export function CharacterDetail() {
   const [character, setCharacter] = useState({});
   const { id } = useParams();

   useEffect(() => {
      RickMortyService.getSingleCharacter(id).then((res) => {
         setCharacter(res.data);
      });
   }, []);

   return (
      <div>
         <h1 className="h1 mt-5 mb-5">CharacterDetail</h1>
         <h2>id={id}</h2>
         <img src={character.image} alt="" />
         <h2>{character.name}</h2>
         <p>{character.status}</p>
      </div>
   );
}
