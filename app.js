const searchBtn = document.getElementById('search-btn');
function getWiki(e) {
    e.preventDefault();
    searchBtn.classList.add('animated','flipInX');
    setTimeout(() => {
        searchBtn.classList.remove('animated','flipInX');
    },1000);
    
    let word = document.querySelector('#search').value;
    let url = `https://en.wikipedia.org/w/api.php?format=jsonp&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${word}&callback=JSON_CALLBACK`;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function() {
        if(this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
    }
    xhr.send();

}

searchBtn.addEventListener('click', getWiki);