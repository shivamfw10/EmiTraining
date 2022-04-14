let url = "https://reqres.in/api/users/";
function fetchData(){
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    })
    .then(data=>{
        //console.log(data.data);
        const html = data.data.map(user=>{
            return `<div class="col">
                        <div class="card h-80 border-0">
                        <a href="view.html" onClick="()=>{localStorage.setItem("ID", JSON.stringify(${user.id}));return false}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${user.first_name}</h5>
                                <p class="card-text">${user.email}</p>
                            </div>
                            <img src=${user.avatar} class="card-img-top" alt="...">
                        </a>
                        </div>
                    </div>`;
        })
        .join("");
        document.querySelector("#datacard").insertAdjacentHTML("afterbegin",html);
    })
    .catch(error=>{
        console.log(error);
    })
}
fetchData();