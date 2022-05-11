import { GetData } from "../helper/getData.js";
import { showCharacters } from "../module/showit.js";

const url = 'https://rickandmortyapi.com/api/character'

let datos = await GetData(url)
let contenedor = document.getElementById('main')
showCharacters(datos.results, contenedor)