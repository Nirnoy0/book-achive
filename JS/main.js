const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value= '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs[0]));
}


// Display search result

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result')
    books.docs[0].forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id=${books.cover_i}-M.jpg" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${book.docs[0].title}</h3>
                    <p class="card-text">${book.docs[0].author_name}</p>
                    <p class="card-text">${book.docs[0].first_publish_year}</p>
                    <p class="card-text">${book.docs[0].publisher}</p>    
                </div>
            <div>
        `;
        searchResult.appendChild(div);
    });
}








