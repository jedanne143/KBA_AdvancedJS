//// API website for jokes: https://jokeapi.dev/#examples /////
//// API website for memes: https://imgflip.com/api ////
import { jokeCollection, jokeLine } from "./fetchjoke.mjs";
import { memes , meme} from "./fetchmeme.mjs"

const jokeForwardButton = document.getElementById("jokeForwardButton")
const jokeBackwardButton = document.getElementById("jokeBackwardButton")
let memePic = document.getElementById("meme")
const memeBackwardButton = document.getElementById("memeBackwardButton")
const memeForwardButton = document.getElementById("memeForwardButton")

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
// =================meme===========================
async function main() {
    await meme();  
    memePic.src = "https://i.imgflip.com/39t1o.jpg"
    
}
main()
let m =0;
memeForwardButton.addEventListener("click", ()=> {
    m += 1;
    memePic.src = `${memes[50 + m].url}`
    if ( m === 49) {
        memeForwardButton.style.cursor = "not-allowed"
        return
    }
}
)
memeBackwardButton.addEventListener("click", ()=> {
    m -= 1;
    memePic.src = `${memes[50 + m].url}`
    if ( m === 50) {
        memeBackwardButton.style.cursor = "not-allowed"
        return
    }
}
)


export {j}




