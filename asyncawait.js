

let contenedor = document.getElementById('contenedor');
let numList = Math.floor(Math.random()*150);

async function getPokemon(){

    let pokeList = await fetch(`https://pokeapi.co/api/v2/pokemon/${numList}/`)
    let pokeData = await pokeList.json();

    let dogList = await fetch(`https://dog.ceo/api/breeds/image/random`)
    let dogData = await dogList.json();

    contenedor.innerHTML= `

        <img src="${pokeData.sprites.front_default}">
        <h3>VERSUS</h3>
        <img src="${dogData.message}">
    
    `;
}
getPokemon()



























  


