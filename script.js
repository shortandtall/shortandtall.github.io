// JavaScript Document
var products = ['P000','P001','P002','P003'];//,'P004','P005','P006','P007','P008','P009'];
var pName = ['Pumps', 'Filtration','Bathroom','Shower'];
var pText = ['Silent, 3metre head',
'10um for crystal clear water',
'Modern and sleek',
'Voice control and IQ'];
var numberP = [0,0,0,0];//,0,0,0,0,0,0];
var priceP = [99,25,30,4];//,5,15,25,35,45,55];

(function() {
"use strict";

var state = document.getElementById("id_state");
state = "ST";

document.addEventListener('DOMContentLoaded', function(){

	document.getElementById('cart_custom').addEventListener('submit', estimateTotal);

	var v_btn_estimate = document.getElementById('btn_estimate');

	v_btn_estimate.disabled = false;
  console.log("False");
  

	/*state.addEventListener('change', function(){*/

		if(state.value === ''){
			v_btn_estimate.disabled = true; //All values are set, no "" value....
			console.log("True");
		}
		else{
			v_btn_estimate.disabled = false;
			console.log("False");
		}

	/*});*/

});



function estimateTotal(event) {
	event.preventDefault();
	
	/*if( state.value === ''){
		alert('Please select the city or area for the work to be performed');
		state.focus();
	}*/

  for(var i=0; i< products.length; i++){
    numberP[i] = parseInt(document.getElementById(products[i]).value, 10 )|| 0;
    console.log(products[i]);
  }
  console.log(numberP[0]);
  console.log(numberP[1]);
  console.log(numberP[2]);
  console.log(numberP[3]);
	/*var sneakers = parseInt(document.getElementById(products[0]).value, 10 )|| 0;
	var jersey = parseInt(document.getElementById("a_jersey").value, 10 )|| 0;
	var supple = parseInt(document.getElementById("p_supple").value, 10 )|| 0;
	var water = parseInt(document.getElementById("m_water").value, 10 )|| 0;
	
	console.log(water);*/

	var state_index = state.value;

	var shipping = document.querySelector('input[name=ship]:checked').value || '';

	var special_gift = document.getElementById("gift").checked;
	var special_mailing = document.getElementById("mailing").checked;
	var special_recipes = document.getElementById("recipes").checked;

	var t_message = document.getElementById("message").value;
	
	var shippingCostPer,
		totalShippingCost, 
		taxFactor = 1,
		totalItemPrice = 0, 
		estimate;
	
	//var t_quantity = sneakers + jersey + supple + water;
	var t_quantity = numberP.reduce(function(a,b){return a + b;},0);
	//totalItemPrice = (sneakers * 90 ) + (jersey * 25) + (supple * 30) + (water * 4);
	for(var j=0; j< products.length; j++){totalItemPrice += numberP[j]*priceP[j];}
	console.log("qty: " + t_quantity)
  console.log("est: " + totalItemPrice)
	if (state.value === 'CA'){
		taxFactor = 1.075;
	}
	else if(state.value ==='WA'){
		taxFactor = 1.065;	
	}

	switch(shipping){
		case 'us':
			shippingCostPer = 2;
			break;
		case 'ups':
			shippingCostPer = 3;	
			break;
		default :
			shippingCostPer = 0;
			break;
	}

	totalShippingCost = shippingCostPer * t_quantity;
	
	estimate = '$' +((totalItemPrice * taxFactor ) + totalShippingCost).toFixed(2);
	
	document.getElementById('total_estimate').value=estimate;

	var result_html = document.getElementById('results');

	result_html.innerHTML = 'Total Item: ' + t_quantity + '<br>';
	result_html.innerHTML +='Total Shipping: $' + totalShippingCost.toFixed(2) + '<br>';
	result_html.innerHTML +='Tax:' + (( taxFactor - 1 )*100).toFixed(2) + '%';
	
	result_html.innerHTML +='(State:'  + state_index + ')';
	


	

}

})();

function updateMe() {
  if (numberP[0] > 0) {
                ("#test1").show();
                localStorage.C1 = true;
            } else {
                ("#test1").hide();
                localStorage.C1 = false;
            }
            console.log(numberP[0]+" jjjjj");
}

/*$(function () {
        $("#C1").click(function (e) {
            if ($(this).is(":checked")) {
                $("#C1Div").show();
                localStorage.C1 = true;
            } else {
                $("#C1Div").hide();
                localStorage.C1 = false;
            }
        });
      $("#C2").click(function () {
			if ($(this).is(":checked") ) {
				localStorage.C2 = true;
				modeLG="lines";
				$("#C2Div").show();
        		} else {
                $("#C2Div").hide();
                localStorage.C2 = false;
            }
        });
      $("#C3").click(function () {
			if ($(this).is(":checked") ) {
				localStorage.C3 = true;
				modeLG="markers";
				$("#C3Div").show();
			}  else {
                $("#C3Div").hide();
                localStorage.C3 = false;
            }
        });
      $("#C4").click(function () {
			if ($(this).is(":checked") ) {
				localStorage.C4 = true;
				modeLG="lines+markers";
				$("#C4Div").show();
			} else {
        $("#C4Div").hide();
                localStorage.C4 = false;
            }
        });
        $("#C5").click(function () {			
            if ($(this).is(":checked")) {
                $("#C5Div").show();
                localStorage.C5= true;
            } else {
                $("#C5Div").hide();
                localStorage.C5 = false;
            }
        });
        $("#C6").click(function () {			
            if ($(this).is(":checked")) {
                $("#C6Div").show();
                localStorage.C6= true;
            } else {
                $("#C26iv").hide();
                localStorage.C6 = false;
            }
        });
        $("#C7").click(function () {
            if ($(this).is(":checked")) {
                $("#C7Div").show();
                localStorage.C7 = true;
            } else {
                $("#C7Div").hide();
                localStorage.C7= false;
            }
        });
});*/




