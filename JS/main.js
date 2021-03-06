//  spinner
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}



// search book
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    toggleSpinner('block');
    searchField.value= '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs)); 

    const totalDataFound = document.getElementById('total-data');
    totalDataFound.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('data');
    div.innerHTML = `
        <div>
         Total Data Found: ${url.length}
        </div>
    `;
    totalDataFound.appendChild(div);
} 



// Display search result
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="Books Images">
                <div class="card-body">
                    <h5 class="card-title">${doc.title}</h5>
                    <p class="card-text">
                    Author: ${doc.author_name}<br>
                    Publish Year: ${doc.first_publish_year}<br>
                    Publisher: ${doc.publisher}
                    </p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
    toggleSpinner('none');
}








