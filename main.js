const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=d5e1b198-7206-4d20-a91d-fe38200b4e73";
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=3&api_key=d5e1b198-7206-4d20-a91d-fe38200b4e73"

const spanError = document.getElementById('error')
async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "ERROR:" + res.status;
    } else {

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    }
}
async function loadFavoritesMichis() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log(data);
    if(res.status !== 200){
        spanError.innerHTML = "ERROR:" + res.status;
    }
}

loadRandomMichis();
loadFavoritesMichis();