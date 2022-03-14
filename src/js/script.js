const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    //remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    )
    cartaoPokemonParaAbrir.classList.add('aberto')

    //remover a classe ativo que marca o pokémon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')

    document.getElementById('pikachu').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'pikachu ')
    })

    document.getElementById('bulbasaur').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'bulbasaur ')
    })

    document.getElementById('charmander').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'charmander')
    })

    document.getElementById('gyarados').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'gyarados ')
    })

    document.getElementById('gengar').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'gengar ')
    })

    document.getElementById('dragonite').addEventListener('click', () => {
      document.querySelector('main').setAttribute('class', 'dragonite')
    })
  })
})
