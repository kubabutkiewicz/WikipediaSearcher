const searchBtn = document.getElementById('search-btn');
function getWiki(e) {
    e.preventDefault();
    searchBtn.classList.add('animated','flipInX');
    setTimeout(() => {
        searchBtn.classList.remove('animated','flipInX');
    },1000);
    
    let word = document.querySelector('#search').value;
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${word}&callback=JSON_CALLBACK`;

    fetch(url, {
        mode: 'no-cors'
    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }) 
    

}

searchBtn.addEventListener('click', getWiki);