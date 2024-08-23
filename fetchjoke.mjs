import {j} from './app.mjs'
let jokeLine = document.getElementById("joke")
let jokeCollection = [];
async function joke() {
    try{
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single&amount=10");
    const jokes = await response.json();
    await jokes.jokes.forEach(element => {
    jokeCollection.push(element.joke)
    });
    return
    }
    catch{
        console.log("error fetching jokes data")
    }
}
joke()

async function jokeContent(){
    await joke ()
    jokeLine.textContent = `${jokeCollection[j]}`
}
jokeContent()
export {jokeCollection, jokeLine}