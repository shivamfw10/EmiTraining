let url = "https://reqres.in/api/users/";

async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    if(response){
        console.log(response);
    }
    show(data);
}
getData(url);

function show(data) {
const html = data.data.map(user=>{
    return `<div class="col">
                <div class="card h-80 border-0">
                    <div class="card-body text-center">
                        <h5 class="card-title">${user.first_name}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                    <img src=${user.avatar} class="card-img-top" alt="...">
                </div>
            </div>`;
    }).join("");
    document.querySelector("#datacard").insertAdjacentHTML("afterbegin",html);
}