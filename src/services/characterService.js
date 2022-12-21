import axios from "axios";

export const characterService = {};

characterService.getAllCharacters = async (page = 1) => {
   const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

   return await axios.get(apiUrl);
};

characterService.getSingleCharacter = async (id) => {
   const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

   return await axios.get(apiUrl);
};
