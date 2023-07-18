const alertext=$("#txt") ;
let total_exp=0;
function exp_amt_element(expense,amount) {
    if ((expense=="" ||amount=="")){
        alertext.show(); 
        return;
    }
    else{
        alertext.hide();
        return `<tr class=new-row>
        <th>${expense}</th>
        <th>$ ${amount}</th>
        <th>
        <span class="edit">&#9998;</span>
          <span class="remove">&#128465</span>
        </th>
        </tr>`
    }
    
  }
 

function addExpense() {

    const texp= $("#t-expenses"); 
    const exp = $("#expense");
    const amt = $("#amount");  
    let sum=$("#total-exp");
     
    // console.log(texp.val());
    // console.log(exp.val());
    // console.log(amt.val());    
   
        const exp_row= $(exp_amt_element(exp.val(),amt.val()));
        let exp_val=parseInt(amt.val());
        console.log(exp_val);
        total_exp=total_exp+parseInt(exp_val);
        console.log(total_exp);
        texp.append(exp_row);
        amt.val("");
        exp.val("");
        $("#total-exp").html('$ '+total_exp);


}

$(document).ready(function () {   
    const addButton = $("#btnAdd");    
    addButton.click(addExpense);
    console.log("hi");
  })