let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
//El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover".
// El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error.
// Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4).

let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idGen=qsObj.get("idGenero");
console.log(idGen) // es para verificar que me traiga el id del genero bien
let nombreGenero=qsObj.get("name"); 
console.log(nombreGenero) //muestra el nombre del genero presionado

let tit_genero= document.querySelector("#tituloGenero");
let seccionSeries= document.querySelector("#contenedorSeries");
let seccionPelis=document.querySelector("#contenedorPelis")
let noExiste= document.querySelector("#noExisteGenero")
let link_generos_series= `https://api.themoviedb.org/3/discover/tv?with_genres=${idGen}&api_key=${apiKey}`; //me falta filtrarlas,pasandole el id 
let link_generos_pelis= `https://api.themoviedb.org/3/discover/movie?with_genres=${idGen}&api_key=${apiKey}`;
let contador= 1 
let mensaje= "Hubo un error, el genero que selecciono no existe"

fetch(link_generos_series)// filtrar usando id, lo mismo en el otro fetch 

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
    if (data.results == null ) {  
        alert(mensaje)
        tit_genero.style.display="none"
        noExiste.innerHTML+= 
        `<h1> No existe/no se encontro un genero con el nombre solicitado </h1>`
        
        




    }else{

        tit_genero.innerText= `Resultados para el genero ${nombreGenero}`
        tit_genero.style.color='#c6c6c6'

        for(let i=0; i < 6 ; i++){
            let url2 = `./detalle_series.html?id=${data.results[i].id};`

            

                seccionSeries.innerHTML+=
                `    <article class="mismoGenero">
                            <a href=${url2}><img class="imagen_generos" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                            <h2 class="tituloPeliGenero"><a class="link" href=${url2}></a>${data.results[i].name}</a></h2> 
                            <a class="link" href=${url2}>${data.results[i].first_air_date}</a>
                    </article>`
                }

        

        }
        contador += 1


    
    

})
.catch(function(error){
    console.log(error)
})




fetch(link_generos_pelis)

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
    if (nombreGenero == null ) {
        
        
        alert(mensaje)

        noExiste.innerHTML+= 
        `No existe/no se encontro un genero con el nombre solicitado`        
        tit_genero.style.display="none"
        document.querySelector("#tituloSecundario").style.display= "none"
        document.querySelector("#contenedorSeries").style.display= "none"
        document.querySelector("#contenedorPelis").style.display="none"
        document.querySelector("#tituloSecundario2").style.display="none"
        
        




    }else{
            for(let i=0; i<6 ; i++){

                let url = `./detalle_peli.html?id=${data.results[i].id};`
                seccionPelis.innerHTML+=
            `    <article class="mismoGenero">
                        <a href=${url}><img class="imagen_generos" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                        <h2 class="tituloPeliGenero"> <a class= "link" href=${url}>${data.results[i].title}</a></h2> 
                        <a class="link" href=${url}>${data.results[i].release_date}</a>
                </article>`
            }
            contador += 1
        }


    
    
})
.catch(function(error){
    console.log(error)
})




