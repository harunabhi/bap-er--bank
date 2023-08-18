// add event handler with the withdraw button
// setp 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
//   step 2: get the withdraw amount from the withdraw input field
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawString = withdrawField.value;
// convert string to number
const newWithdrawAmount = parseFloat(newWithdrawString);

// step 3:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step 4 claculate total amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// step 5: set& calculate total withdraw amount
withdrawTotalElement.innerText = currentWithdrawTotal;
// get the previous balance total
const balanceTotalelement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalelement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// 
if(newWithdrawAmount > previousBalanceTotal){
    alert('invalid money')
    return;
}
// step -6 calculate the new balance
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalelement.innerText = newBalanceTotal;
// 



// step 7 clear the input field
// withdrawField.value = '';



})