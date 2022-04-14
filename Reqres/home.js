var users;
let url ="https://reqres.in/api/users/";
let box = document.getElementById("datacard");
 
const fetchData=async()=>{
    let data = await fetch(url);
    let res = await data.json();
    users = res.data;

    users.map((e)=>{
        let outerdiv = document.createElement("div");
        outerdiv.setAttribute("class", "col");

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card h-80 border-0");
        
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body text-center");

        let name = document.createElement("h5");
        name.setAttribute("class","card-title");
        name.innerHTML=e.first_name;

        let email = document.createElement("p");
        email.setAttribute("class","card-text");
        email.innerHTML=e.email;

        let userImg = document.createElement("img");
        userImg.setAttribute("class","card-img-top");
        userImg.src=e.avatar;
        
        let link = document.createElement("a");
        link.href="view.html";

        link.addEventListener("click", () => {
            localStorage.setItem("userId", JSON.stringify(e.id));
          });
        
          cardBody.append(name,email);
          link.append(cardBody,userImg);
          cardDiv.append(link);
          outerdiv.append(cardDiv);
          box.append(outerdiv);
    });
};

fetchData();
