import { getJoke } from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.png'


document.getElementById('laughImg').src = laughing
document.getElementById('jokeBtn').addEventListener('click',getJoke)


getJoke()


