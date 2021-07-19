

let contenedor = document.getElementById('contenedor')
let numList = Math.floor(Math.random()*150);

async function getPokemon(){

    let pokeList = await fetch(`https://pokeapi.co/api/v2/pokemon/${numList}/`)
    let data = await pokeList.json()

    let dogList = await fetch(`https://dog.ceo/api/breeds/image/random`)
    let dataDog = await dogList.json()

    contenedor.innerHTML = `

    <img src="${data.sprites.front_default}">
    <h1>VS</h1>
    <img src="${dataDog.message}">
`
}
getPokemon()
























  


