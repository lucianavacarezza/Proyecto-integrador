
let contador = 0

let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
    for(let i=0; i<5 ; i++){
        container.innerHTML += `
        <article>
        <img src= ${data.results[i].image} />
        <h2> ${data.results[i].name} </h2>
        <h3> ${data.results[i].status} </h3>
        </article>
        <article class="peliculamasacre">
                <a href="./detalle_peli.html"><img class="fotomasacre" src="./imgs/Masacre_en_Texas.webp" alt="masacre en texas"></a>
                <h2 class="titulomasacre"><a class="link" href="./detalle_peli.html">Masacre en Texas</a></h2>
                <a class="link" href="./detalle_peli.html">11 de abril de 2013</a>
        </article>
        `
    }
    contador += 1
})

.catch(function(error){
    console.log(error)
})
