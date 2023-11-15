let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")

let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let movie_id = queryStringDetalle.get("id")
// HAY QUE VER SI SE PUEDE SACAR

fetch (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
//fetch (`https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=${movie_id}`) 

.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)
    contenedor.innerHTML += `
    <div>
        <article class="cali">
            <h4 class="calificacion">Calificacion:</h4>
            <img src="./imgs/tres_estrellas.png" alt="estrellas calificacion">
        </article>
    <article>
        <h4 class="fav">Añadir a <a href="./favoritos.html"> Favoritos</a></h4>
    </article>
    </div>

    <article class="pelicula">    
        <img class="imatilda" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="Imagen Matilda">
    </article>

    <br>
    <br>
`

    for(let i=0; i<data.genres.length; i++){
      let generos = data.genres[i].name}
      
    contenedor2.innerHTML += `
        <article class="titulo">
                <h1 class="matilda">${data.title}<h1>
        </article>

        <div class="detalles">
            <ul class="generico">
                <li> <h4>Duración: ${data.runtime} min</h4></li>
                <li><h4>Estreno: ${data.release_date}</h4></li>
                <li> <h4> <a href="./detalle_genero.html">Genero: ${generos}</a></h4></li>                  
            </ul>
                
        </div>
    
        <article class="sinopsis">
            <h3 class="resumen">    Sinopsis: </h3>
        </article>
    
        <article class="texto">
            <p>${data.overview} </p>
        </article>

        <article class="rep">
        <h3 class="titulo3">Reparto:</h3>
        </article>
        <div class="detalles">
            <ul class="generico">
                <li> <h4>Alisha Weir (Matilda Wormwood) </h4></li>
                <li><h4> Emma Thompson (Agatha Trunchbull) </h4></li>
                <li> <h4>Lashana Lynch (Miss Honey) </h4></li>     
                <li><h4> Stephen Graham (Mr. Wormwood)</h4></li>
                <li><h4> Andrea Riseborough Mrs. Wormwood</h4></li>
            </ul>
                
        </div>
    `
})
   


// falta el rating, favoritos funcionalidad

.catch(function(error){
    console.log(error)
    })