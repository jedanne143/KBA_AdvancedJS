//// API website for jokes: https://jokeapi.dev/#examples /////
//// API website for memes: https://imgflip.com/api ////
import { jokeCollection, jokeLine } from "./fetchjoke.mjs";
import { memes , meme} from "./fetchmeme.mjs"

let jokeForwardButton = document.getElementById("jokeForwardButton")
let jokeBackwardButton = document.getElementById("jokeBackwardButton")
let memePic = document.getElementById("meme")

let j = 0;
jokeForwardButton.addEventListener("click" , () => {
    jokeForwardButton.style.cursor = "default"
    if ( j === 9) {
        jokeForwardButton.style.cursor = "not-allowed"
        return
    }
    j = j + 1
    jokeLine.textContent = `${jokeCollection[j]}`

})
jokeBackwardButton.addEventListener("click" , () => {
    jokeBackwardButton.style.cursor = "default";
    if ( j === 0) {
        jokeBackwardButton.style.cursor = "not-allowed"
        return
    }
    j = j - 1
    jokeLine.textContent = `${jokeCollection[j]}`

})

async function main() {
    await meme();  
    memePic.src = `${memes[51].url}`
}
main()


export {j}
export {memePic}




