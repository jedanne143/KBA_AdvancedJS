
let memes;
async function meme() {
    try{
    const response = await fetch("https://api.imgflip.com/get_memes");
    let data = await response.json()
    memes = data.data.memes
    }
    catch{
        console.log("error fetching meme data")
    }
}
meme()


export { memes , meme }