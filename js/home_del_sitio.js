let container =document.querySelector (".carrusel1")
let contador = 0

let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
    for(let i=0; i<5 ; i++){
        container.innerHTML += `
        <article class="pelicula">
                <a href="./detalle_peli.html"><img class="imagen_pelis" src= ${data.results[i].backdrop_path}></a>
                <h2 class="titulos_pelis"><a class="link" href="./detalle_peli.html">${data.results[i].title}</a></h2>
                <a class="link" href="./detalle_peli.html">${data.results[i].release_date}</a>
        </article>
        `
    }
    contador += 1
})

.catch(function(error){
    console.log(error)
})

let container2 =document.querySelector (".carrusel2")
let contador2 = 0

fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
    for(let i=0; i<5 ; i++){
        container2.innerHTML += `
        <article class="theoffice">
                <a href="./detalle_series.html"><img class="fototheoffice" src="./imgs/the_office.webp" alt=""></a>
                <h2 class="titulotheoffice"><a class="link" href="./detalle_series.html">The office</a></h2>
                <a class="link" href="./detalle_series.html">24 de marzo de 2005</a>
        </article>
        <article>
        <img src= ${data.results[i].image} />
        <h2> ${data.results[i].name} </h2>
        <h3> ${data.results[i].status} </h3>
        </article>
        `
    }
    contador2 += 1
})

.catch(function(error){
    console.log(error)
})


