const searchBtn = document.getElementById('search-btn');

function UI(data) {
    const list = document.querySelector('.list');
    output = [];
    for (let i = 0; i < data.query.pages.length; i++) {
        output += `
    <a href="${data.query.pages[i].canonicalurl}" target="_blank">
        <li class="list-item hvr-fade">
            <p>${data.query.pages[i].title}</p>
        </li>
    </a>
    `;
    }
    list.innerHTML = output;
}

function getWiki(e) {
    e.preventDefault();
    searchBtn.classList.add('animated', 'flipInX');
    setTimeout(() => {
        searchBtn.classList.remove('animated', 'flipInX');
    }, 1000);

    
    let word = document.querySelector('#search').value;
    let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&formatversion=2&origin=*&gsrsearch=${word}&exlimit=5&prop=info|extracts&inprop=url`;

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        UI(data);
    })


}

searchBtn.addEventListener('click', getWiki);
