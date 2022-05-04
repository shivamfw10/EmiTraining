import { User } from "./models/user"

const user = new User({name:'new record',age:0});
user.save();


//update data
// const user = new User({id:1});

// user.set({name:'NEW NAME',age:25});
// user.save();

// user.fetch();

// setTimeout(()=>{
//     console.log(user);
// },5000);

// import axios from 'axios';

// // axios.post('http://localhost:3000/user',{
// //     name:"myName",
// //     age:20
// // });

// axios.get('http//localhost:3000/user/1');








// import { User } from "./models/user";

// const user = new User({name:'myName',age:20});

// user.set({name:'newName'});
// console.log(user.get('name'));
// console.log(user.get('age'));
// user.on("change",()=>{
//     console.log("Chnage #1");
// })
// user.on("chnage",()=>{
//     console.log("Change #2");
// });
// user.on("save",()=>{
//     console.log("save trigger");
// })
// user.trigger("save");
// //console.log(user);