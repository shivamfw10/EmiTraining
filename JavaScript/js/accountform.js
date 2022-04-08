const addUser=(event)=>{
    let accountType = document.getElementById("accountType").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    var accountNumber=null;
    let balence=0;
    var randomNum = Math.floor((Math.random() *9999999999+10000));
    event.preventDefault();
    if(accountType=='sav'){
        accountNumber ="Sav"+randomNum;
        accountType="Saving";
    }
    else if(accountType=="curr"){
        accountNumber ="Curr"+randomNum;
        accountType="Current Account"
    }

    console.log(accountType,firstName,lastName,age,location,state,country,email,accountNumber);
    let user = {
        firstName,
        lastName,
        age,
        location,
        state,
        country,
        email,
        accountType,
        accountNumber,
        balence
    }
    let arr;
    arr = localStorage.getItem('emiuser');
    if(arr==null){
        arr=[];
    }else{
        arr = JSON.parse(localStorage.getItem('emiuser'));
    }
    arr.push(user);
    localStorage.setItem('emiuser',JSON.stringify(arr));
    
    clear();
    setTimeout(()=>{
        alert(`Hi ${firstName} ${lastName} \n Welcome to EMI Banks. \n ${accountType} opened successfully \n Please note down your A/C No is ${accountNumber} for future refernce`);
        window.location="index.html"
    },10000)
}
const clear=()=>{
    document.getElementById("firstName").value = null;
    document.getElementById("lastName").value = null; 
    document.getElementById("age").value = null;
    document.getElementById("location").value = null;
    document.getElementById("state").value = null;
    document.getElementById("country").value = null;
    document.getElementById("email").value = null;
}