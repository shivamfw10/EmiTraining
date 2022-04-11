const addUser=(event)=>{
    event.preventDefault();
    let accountType = document.getElementById("accountType").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    let balence = document.getElementById("depositAmount").value;
    
    let input = age.split("-").map(Number);
    let inputYear = input[0];

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    var accountNumber=null;
    var randomNum = Math.floor((Math.random()*9999999999));
    if(accountType=='sav'){
        accountNumber ="Sav"+randomNum;
        accountType="Saving";
    }
    if(accountType=="curr"){
        accountNumber ="Curr"+randomNum;
        accountType="Current Account"
    }
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
    };
    if(currentYear-inputYear<65){
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
        },5000)
    }
    else{
        alert("You are not eligble")
    }
}
const clear=()=>{
    document.getElementById("firstName").value = null;
    document.getElementById("lastName").value = null; 
    document.getElementById("age").value = null;
    document.getElementById("location").value = null;
    document.getElementById("state").value = null;
    document.getElementById("country").value = null;
    document.getElementById("email").value = null;
    document.getElementById("depositAmount").value=null;
}

