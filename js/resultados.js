let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)
let valor= queryStringObj.get("buscador") //valor query que voy a usar
fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}?query=${valor}`)