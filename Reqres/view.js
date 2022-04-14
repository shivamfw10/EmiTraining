
let boxContainer = document.getElementById("profile");
let userID = JSON.parse(localStorage.getItem("userId"));

let url = `https://reqres.in/api/users/${userID}`;
console.log(userID);
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
        let imgDiv = document.createElement("div");
            imgDiv.setAttribute("class","col-md-6 offset-md-3");
        
            let userImage = document.createElement("img");
            userImage.setAttribute("class","img-fluid");
            userImage.src=data.data.avatar;
            
            
            let userDataDiv = document.createElement("div");
            userDataDiv.setAttribute("class","col-md-6 offset-md-3");
        
            let name = document.createElement("h3");
            name.innerHTML=data.data.first_name+" "+data.data.last_name;
            
            let email = document.createElement("h3");
            email.innerHTML=data.data.email;
        
            imgDiv.append(userImage);
            userDataDiv.append(name,email);
        
            boxContainer.append(imgDiv,userDataDiv);
    })
    .catch(error=>{
        console.log(error);
    })
}
fetchData();

