const checkBalence=(event)=>{
    event.preventDefault();
    let dataDiv = document.getElementById("viewData");
    dataDiv.hidden=false;
    let accNumber = document.getElementById("acNumber");
    let accType = document.getElementById("acType");
    let accName = document.getElementById("acName");
    let accBalence = document.getElementById("acBalence");

    const accountNum = document.getElementById("accountNumber").value;
    console.log(accountNum);
    const emiuser = JSON.parse(localStorage.getItem("emiuser"));
    let flag=false;
    for(let i=0;i<emiuser.length;i++){
        let ac_number = emiuser[i].accountNumber;
        if(ac_number===accountNum){
            accNumber.innerHTML=`${emiuser[i].accountNumber}`;
            accType.innerHTML = `${emiuser[i].accountType}`;
            accName.innerText = `${emiuser[i].firstName} ${emiuser[i].lastName}`;
            accBalence.innerHTML = `${emiuser[i].balence}`;
            flag=true;
            break;
        }
    }
    if(flag==false){
        alert("Enter Valid Account No.")
        dataDiv.hidden=true;
        clear();
    }
}

const debitMoney=(event)=>{
    event.preventDefault();
    var accountNum = document.getElementById("accountNumber").value;
    var amount = document.getElementById("amount").value;
    if(amount==""){
        alert("Enter amount");
    }
    if(isNaN(amount)){
        alert("Enter numeric value");
    }
    else{
       let dataArray=JSON.parse(localStorage.getItem("emiuser"));
       let flag=false;
       for(let i=0;i<dataArray.length;i++){
           if(dataArray[i].accountNumber==accountNum && dataArray[i].balence>1000){
                dataArray[i].balence = dataArray[i].balence-amount;
                flag=true;
                break;
           }
       }
       if(flag==true){
            localStorage.setItem('emiuser',JSON.stringify(dataArray));
            setTimeout(()=>{
                window.location="index.html"
            },5000)
       }
       else{
           alert("You can not withdraw money due to insufficient balece");
       }
    }
}
const clear=()=>{
    document.getElementById("name").value=null;
}