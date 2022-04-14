
// async function pageLoad(){
//     let users = await fetch(`https://reqres.in/api/users/`);
//     let datas = await users.json();
//     let datadiv="";
//     datas.data.map((user)=>{
        
//          datadiv = `<div class="card h-100">
//           <div class="card-body">
//             <h5 class="card-title"><span id="userName">${user.first_name}</span></h5>
//             <p class="card-text"><span id="userEmail">${user.email}</span></p>
//           </div>
//           <img src=${user.avatar} class="card-img-top" alt="...">
//         </div>`
//         document.getElementById("dataDiv")=datadiv;
//     })
// }
// pageLoad();

//using promise

// let url = "https://reqres.in/api/users/";
// fetch(url).then((data)=>{
//     return data.json();
// }).then((userData)=>{
//     const user=userData.data.map((users)=>{
//         return`
//         <div class="col">
//             <div class="card h-100">
//                 <div class="card-body">
//                     <h5 class="card-title"><span id="userName">${users.first_name}</span></h5>
//                     <p class="card-text"><span id="userEmail">${users.email}</span></p>
//                 </div>
//                 <img src=${users.avatar} class="card-img-top" alt="...">
//             </div>
//         </div>
//         `;
    
//     }).join("")
//     document.querySelector("#dataDiv").insertAdjacentHTML("afterbegin",user);
    
// }).catch((err)=>{
//     console.log(err);
// })