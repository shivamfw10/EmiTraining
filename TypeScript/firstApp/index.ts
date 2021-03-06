import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// axios.get(url).then(response=>{
//     console.log(response.data);
// });

// catching errors

interface Todo{
    id:number;
    title:string;
    completed:boolean;
}

axios.get(url).then(response=>{
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // console.log(`
    // The Todd note with ID : ${id}
    // Has a title of : ${title}
    // Is it finished? ${completed}`);
    logTodo(id,title,completed);
});

const logTodo = (id:number,title:String,completed:Boolean)=>{
    console.log(`
    The Todd note with ID : ${id}
    Has a title of : ${title}
    Is it finished? ${completed}`);
};

const today = new Date();
today.getMonth();
const person ={
    age:20
}

// const Color {

// };
// const red = new Color();