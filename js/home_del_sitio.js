let container =document.querySelector (".carrusel1")
let contador = 0

let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
    for(let i=0; i<5; i++){
        let url = `./detalle_peli.html?id=${data.results[i].id}`
        container.innerHTML += `
        <a href="${url}">
        <article class="pelicula" >
                
                <img class="imagen_pelis" src= https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}>
                <h2 class="titulos_pelis link">${data.results[i].title}</h2>
                <p class = "link">${data.results[i].release_date}</p>
                
        </article>
        </a>
        `
        //<article class="pelicula" >
               // <a href="${url}"><img class="imagen_pelis" src= https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}></a>
                //<h2 class="titulos_pelis"><a class="link" href="${url}">${data.results[i].title}</a></h2>
                //<a class="link" href="${url}">${data.results[i].release_date}</a>
        //</article>
        //`
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
        <article class="serie">
                <a href="./detalle_series.html"><img class="imagen_serie" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                <h2 class="titulo_serie"><a class="link" href="./detalle_series.html">${data.results[i].name}</a></h2>
                <a class="link" href="./detalle_series.html">${data.results[i].first_air_date}</a>
        </article>
        `
    }
    contador2 += 1
})

.catch(function(error){
    console.log(error)
})

let container3 =document.querySelector (".carrusel3")
let contador3 = 0
fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
    for(let i=0; i<5 ; i++){
        container3.innerHTML += `
        <article class="pelicula">
                <a href="./detalle_peli.html"><img class="imagen_peli" src= https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}></a>
                <h2 class="titulos_pelis"><a class="link" href="./detalle_peli.html">${data.results[i].title}</a></h2>
                <a class="link" href="./detalle_peli.html">${data.results[i].release_date}</a>
        </article>
        `
    }
    contador3 += 1
})

.catch(function(error){
    console.log(error)
})