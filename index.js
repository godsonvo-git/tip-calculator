let bill = document.getElementById("bamt")
let billamt = bill.value
document.getElementById("calc").onclick = function(){
    // bill amount
    let bill = document.getElementById("bamt")
    let billamt = bill.value
    console.log(billamt)

    //tip
    let tip = document.getElementById("tip")
    let tipamt =tip.value
    console.log(tipamt)

    //calculation
    
    let totaltip = billamt*(tipamt/100)
    let totalamt = Number(billamt) + Number(totaltip)
    document.getElementById("tamt").textContent = `Total Amt: ${totalamt}`
}