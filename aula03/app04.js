let pokeName = ["pikachu","Bulbasauro","charmander","squirtle","alakazam","Meowth","mew","haunter"]
let pokeFotos = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png"

]
for(let i = 0; i < pokeName.length; i++){
    document.write("<div class='umpoke'>")
    document.write(`<h3>${pokeName[i]}</h3>`)
    document.write(`<img src="${pokeFotos[i]}" alt="${pokeName[i]}">`)
    document.write("</div>")
}
