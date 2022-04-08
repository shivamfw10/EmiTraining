
const checkBalence=(event)=>{
    event.preventDefault();
    var dataDiv = document.getElementById("viewData");
    dataDiv.hidden=false;
    var accNumber = document.getElementById("acNumber");
    var accType = document.getElementById("acType");
    var accName = document.getElementById("acName");
    var accBalence = document.getElementById("acBalence");
    const name = document.getElementById("accountNumber").value;

    const emiuser = JSON.parse(localStorage.getItem("emiuser"));
    console.log(emiuser.length);
    for(let i=0;i<emiuser.length;i++){
        let ac_number = emiuser[i].accountNumber;
        if(ac_number===name){
            accNumber.innerHTML=`${emiuser[i].accountNumber}`;
            accType.innerHTML = `${emiuser[i].accountType}`;
            accName.innerHTML = `${emiuser[i].firstName} ${emiuser[i].lastName}`;
            accBalence.innerHTML = `${emiuser[i].balence}`;
            break;
        }
    }
    // clear();
}

const clear=()=>{
    document.getElementById("name").value=null;
}