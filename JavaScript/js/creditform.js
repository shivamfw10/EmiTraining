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

const clear=()=>{
    document.getElementById("accountNumber").value=null;
}

const creditMoney=(event)=>{
    event.preventDefault();
    var accountNum = document.getElementById("accountNumber").value;
    var amount = document.getElementById("amount").value;
    let dataArray=JSON.parse(localStorage.getItem("emiuser"));
   
    if(amount==""){
        alert("Enter amount");
    }
    else if(isNaN(amount)){
        alert("Please enter numeric value");
        document.getElementById("amount").value=null;
    }
    else{
       for(let data of dataArray){
           if(data.accountNumber==accountNum){
              data.balence = Number(data.balence)+Number(amount);
              break;
           }
       }
       localStorage.setItem('emiuser',JSON.stringify(dataArray));
       setTimeout(()=>{
        window.location="index.html"
    },5000);
    }
}