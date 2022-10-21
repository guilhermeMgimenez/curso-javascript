function fnPegarUmPokemon(url){

 

    $.ajax({

        type: "Get",

        url: url,

       // data: "data",

        dataType: "json",

        success: function (dados) {

        let Pokemon = {

            "nome": dados.name,

            "id": dados.id,

            "foto": dados.sprites.front_default,

            "tipo": dados.types[0].type.name,

        }

        fnMontarCartao(Pokemon)

        }

    });

}




function fnMontarCartao(Pokemon) {



    let cartao

    cartao = `<li>`

    cartao += `<h3>${Pokemon.name}</h3>`

    cartao += `<p> <img src="${Pokemon.foto}"></p>`

    cartao += `<p> ${Pokemon.tipo}</p>`

    cartao += `<h4>${Pokemon.id}</h4>`

    cartao += `</li>`



    $('.lista-pokemons').append(cartao)

}



fnPegarPokemons()