const country = document.querySelector('#country');
fetch('https://restcountries.com/v3.1/all')
.then(res => {
    return res.json();
})
.then(res => {
    flags(res);
})
.then(
    () => {
        const countryItem = document.querySelectorAll('.countryItem');
        const select = document.querySelector('#select');

        countryItem.forEach(element => {
            element.addEventListener('click', () => {
                                    select.innerHTML = `${element.children[0].innerHTML} <img src="https://flagcdn.com/${element.children[0].innerHTML}.svg" width="20px" class="mb-1">`;
                                    });
                                });
    }
);


function flags(arr) {
    arr.forEach(element => {
        country.innerHTML += `<div class="d-flex align-items-center countryItem"><a class="dropdown-item px-0 text-uppercase" href="#">${element.altSpellings[0].toLowerCase()}</a><img src="https://flagcdn.com/${element.altSpellings[0].toLowerCase()}.svg" width="20px" alt="flag"></div>`;
    });
}
