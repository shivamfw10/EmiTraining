
const checkBalence=(event)=>{
    event.preventDefault();

    var dataDiv = document.getElementById("viewData");
    dataDiv.hidden=false;

    var accNumber = document.getElementById("acNumber");
    var accType = document.getElementById("acType");
    var accName = document.getElementById("acName");
    var accBalence = document.getElementById("acBalence");
    var btnSubmit = document.getElementById("btnSubmit");

    var name = document.getElementById("name").value;
    const emiuser = JSON.parse(localStorage.getItem("emiuser"));
    
    for(let i=0;i<emiuser.length;i++){
        let ac_number = emiuser[i].accountNumber;
        if(ac_number==name){
            accNumber.innerHTML=`${emiuser[i].accountNumber}`;
            accType.innerHTML = `${emiuser[i].accountType}`;
            accName.innerHTML = `${emiuser[i].firstName} ${emiuser[i].lastName}`;
            accBalence.innerHTML = `${emiuser[i].balence}`;
            btnSubmit.disabled = true;
            break;
        }
    }
}
const creditMoney=(event)=>{
    event.preventDefault();
    var accountNum = document.getElementById("name").value;
    var amount = document.getElementById("amount").value;

    const userdata = JSON.parse(localStorage.getItem("emiuser"));
    let flag = false;
    let availableBalance;
    for (let data of userdata) {
      if (accountNum == data.accountNumber) {
        availableBalance = data.balence;
        flag = true;
        break;
      }
    }
    console.log(availableBalance);
    if(amount==""){
        alert("Enter amount")
    }
    else{
       let dataArray=JSON.parse(localStorage.getItem("emiuser"));
       for(let data of dataArray){
           if(data.accountNumber==accountNum){
              data.balence = Number(data.balence)+Number(amount);
              break
           }
       }
       localStorage.setItem('emiuser',JSON.stringify(dataArray));
       setTimeout(()=>{
           window.location="index.html"
       },5000)
    }
}
const clear=()=>{
    document.getElementById("name").value=null;
}