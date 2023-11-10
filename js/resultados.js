
document.addEventListener('DOMContentLoaded', function () {
    /
    // You should replace this with your actual logic or API call
    function getSearchResults(searchTerm) {
        // This is a placeholder. Replace it with your logic to fetch results.
        // For now, I'm just returning a sample result.
        return [
            { title: 'Matilda, de Roald Dahl: El musical', link: 'detalle_peli.html' },
            // Add more results as needed
        ];
    }

    // Function to display search results
    function displayResults(searchResults) {
        const resultsContainer = document.getElementById('searchResults');
        const noResultsMessage = document.getElementById('noResultsMessage');

        // Clear previous results
        resultsContainer.innerHTML = '';

        if (searchResults.length > 0) {
            searchResults.forEach(result => {
                const resultItem = document.createElement('article');
                resultItem.classList.add('informacion');
                
                const resultLink = document.createElement('a');
                resultLink.classList.add('titulopeli');
                resultLink.href = result.link;
                resultLink.textContent = result.title;

                resultItem.appendChild(resultLink);
                resultsContainer.appendChild(resultItem);
            });

            // Hide the no results message
            noResultsMessage.style.display = 'none';
        } else {
            // Show the no results message
            noResultsMessage.style.display = 'block';
        }
    }

    // Get the search term from the query parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('buscador');

    // Display the search term
    const searchTermElement = document.getElementById('searchTerm');
    searchTermElement.textContent = `"${searchTerm}"`;

    // Get and display search results
    const searchResults = getSearchResults(searchTerm);
    displayResults(searchResults);
});