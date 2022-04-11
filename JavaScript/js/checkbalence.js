
const checkBalence=(event)=>{
    event.preventDefault();
    let dataDiv = document.getElementById("viewData");
    dataDiv.hidden=false;
    let welcomeName = document.getElementById("welcomeName");
    let accNumber = document.getElementById("acNumber");
    let accType = document.getElementById("acType");
    let accName = document.getElementById("acName");
    let accBalence = document.getElementById("acBalence");

    const accountNum = document.getElementById("accountNumber").value;
    
    const emiuser = JSON.parse(localStorage.getItem("emiuser"));
    let flag=false;
    for(let i=0;i<emiuser.length;i++){
        let ac_number = emiuser[i].accountNumber;
        if(ac_number===accountNum){
            welcomeName.innerHTML=`Hii ${emiuser[i].firstName}`;
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
