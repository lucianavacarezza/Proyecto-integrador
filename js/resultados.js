let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3';


let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);
let valor= queryStringObj.get("buscador"); //valor query que voy a usar

let link_busquedas= `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valor}`;
let resultadospelis= document.querySelector(".resultados")
fetch(link_busquedas)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data)
    if (data.results.length == 0 ) {

    document.querySelector(".resultados").style.display="none"
    document.querySelector(".sinresultados").style.display="show" 
    document.querySelector(".sinresultados").innerText= `No se encontraron resultados para la busqueda ${valor}`

        
    } else{
        document.querySelector(".titulo").innerText= ` Resultados para: ${valor} `
        document.querySelector(".sinresultados")
    }
    
})
.catch(function(error){
    console.log(error)
})
