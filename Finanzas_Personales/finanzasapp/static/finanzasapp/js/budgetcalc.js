	
	function CalcIncomeTotal() {
		var incomeTotal = 0;
		if  (document.monthBudgFrm.Take_Home_Pay.value != ""){
			incomeTotal = incomeTotal + parseInt(document.monthBudgFrm.Take_Home_Pay.value);
		}
		if (document.monthBudgFrm.Spouses_Take_Home_Pay.value != "") {
			incomeTotal = incomeTotal + parseInt(document.monthBudgFrm.Spouses_Take_Home_Pay.value);
		}
		if (document.monthBudgFrm.Other_Income.value != ""){
			incomeTotal = incomeTotal + parseInt(document.monthBudgFrm.Other_Income.value);
		}		
		if (!(isNaN(incomeTotal))) {
			document.monthBudgFrm.Income_Total.value = incomeTotal;
			document.monthBudgFrm.Income_Total2.value = document.monthBudgFrm.Income_Total.value;
		}
		else alert("Could not complete calculations.\nPlease check that you entered a number.");
	}
	function clearInc(form){
       form.Take_Home_Pay.value = ""
       form.Spouses_Take_Home_Pay.value = ""
       form.Other_Income.value = ""
       form.Income_Total.value = ""
       form.Income_Total2.value = ""
       form.Difference_Total.value = ""
     }
	
	function CalcMonthlyExp() {
		var expensesTotal = 0;
		if  (document.monthBudgFrm.rent_mortgage.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.rent_mortgage.value);
		}
		
		if (document.monthBudgFrm.homeowners_fees.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.homeowners_fees.value);
		}			
		if (document.monthBudgFrm.property_tax.value != "") {
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.property_tax.value);
		}
		if (document.monthBudgFrm.home_repairs_maintenance.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.home_repairs_maintenance.value);
		}	
		if  (document.monthBudgFrm.electric_gas.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.electric_gas.value);
		}
		if  (document.monthBudgFrm.water_sewer.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.water_sewer.value);
		}
		if (document.monthBudgFrm.phone_cell.value != "") {
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.phone_cell.value);
		}
		if (document.monthBudgFrm.cable_internet.value != "") {
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.cable_internet.value);
		}
		if  (document.monthBudgFrm.gasoline.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.gasoline.value);
		}
		
		if (document.monthBudgFrm.groceries_household.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.groceries_household.value);
		}
		if (document.monthBudgFrm.clothing.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.clothing.value);
		}
		if  (document.monthBudgFrm.meals_out.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.meals_out.value);
		}
		
		if (document.monthBudgFrm.barber_beauty_shop.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.barber_beauty_shop.value);
		}	
		
		if (document.monthBudgFrm.other_expenses.value != ""){
			expensesTotal = expensesTotal + parseInt(document.monthBudgFrm.other_expenses.value);
		}
		if (!(isNaN(expensesTotal))) {
			document.monthBudgFrm.Expenses_Total.value = expensesTotal;
			document.monthBudgFrm.Expenses_Total2.value = document.monthBudgFrm.Expenses_Total.value;
		}
		else alert("Could not complete calculations.\nPlease check that you entered a number.");		
	}
    function clearExpenses(form){
       form.rent_mortgage.value = ""
	   form.homeowners_fees.value = ""
       form.property_tax.value = ""
       form.home_repairs_maintenance.value = ""
       form.electric_gas.value = ""
	   form.water_sewer.value = ""
	   form.phone_cell.value = ""
	   form.cable_internet.value = ""
	   form.gasoline.value = ""
       form.groceries_household.value = ""
	   form.clothing.value = ""
	   form.meals_out.value = ""
	   form.barber_beauty_shop.value = ""
	   form.other_expenses.value = ""
	   form.Expenses_Total.value = ""
       form.Expenses_Total2.value = ""
       form.Difference_Total.value = ""
	     } 
	 function CalcDifferenceTotal() {
	    
	      document.monthBudgFrm.Expenses_Total2.value = document.monthBudgFrm.Expenses_Total.value
	      document.monthBudgFrm.Income_Total2.value = document.monthBudgFrm.Income_Total.value
	      document.monthBudgFrm.Difference_Total.value = document.monthBudgFrm.Income_Total.value - document.monthBudgFrm.Expenses_Total.value

		if (document.monthBudgFrm.Difference_Total.value < 0) {
			document.monthBudgFrm.Difference_Total.style.color = "#FF0000";
			document.monthBudgFrm.Difference_Total.value = document.monthBudgFrm.Difference_Total.value;
			}
		else
			document.monthBudgFrm.Difference_Total.style.color = "#000"; 
			document.monthBudgFrm.Difference_Total.value = document.monthBudgFrm.Difference_Total.value;
		
		
		  
	  }
	 
	
	function clearDiff(form){
       form.Expenses_Total2.value = ""
       form.Income_Total2.value = ""
       form.Difference_Total.value = ""
       
     }
	//-->