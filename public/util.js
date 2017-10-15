var ingredients = {}
function addIngredients(input){

	for(var i = 0; i < input.length; i++){
		var name = input[i].name;
		var newName = convertName(name).name;
		var id = convertName(name).id;




		if(ingredients[newName] == undefined){
			ingredients[newName] = {quantity: splitQuantity(input[i].quantity), unit:input[i].unit, id: id};
		}
		else{
			ingredients[newName].quantity += splitQuantity(input[i].quantity);
		}
	}
	

	updateDisplay();

}
function convertName(name){
	var minLength = 99999999999;
	var minIndex = undefined;
	var maxMatches = 0;

	for(var i = 0; i < data.length; i++){
		var dataName = data[i].shortDescription.values[0].value;
		if(dataName.toLowerCase().includes(name.toLowerCase())){
			if (dataName.length < minLength) {
				minLength = dataName.length;
				minIndex = i;
			}
	
		}

	}
	if (minIndex != undefined) {
		return {name: data[minIndex].shortDescription.values[0].value, id:  data[minIndex].itemId.itemCode};
	} else {
		var array = name.split(" ");
		for (var i = 0; i < data.length; i++){
			var dataName = data[i].shortDescription.values[0].value;
			var count = 0;

			for (var j = 0; j < array.length; j++){
				var subStr = array[j];

				if(dataName.toLowerCase().includes(subStr.toLowerCase())){
					count++;
	
				}
			}
			if (count == maxMatches) {
				if (dataName.length < minLength) {
					maxMatches = count;
					minLength = dataName.length;
					minIndex = i;
				}

			} 
			else if (count > maxMatches) {
				maxMatches = count;
				minLength = dataName.length;
				minIndex = i;

			}

		}

		return {name: data[minIndex].shortDescription.values[0].value, id:  data[minIndex].itemId.itemCode};
	}
}

function splitQuantity(input){
	var quantity = 0;
	if(input == ""){
		input = "0";
	}
	var splitArray = input.split(" ");

	for (var i = 0; i < splitArray.length; i++) {
		if (splitArray[i].includes("/")) {
			var splitNum = splitArray[i].split("");
			quantity += (parseInt(splitNum[0])) / (parseInt(splitNum[2]));
		} else {
			quantity += parseInt(splitArray[i]);
		}
	}
	return quantity;
}

function updateDisplay(){
	var keys = Object.keys(ingredients);
	var str = "<table>";
	str += "<thead><th colspan='2'>Measurement</th><th>Ingredients</th><th>Quantity</th><th>Price</th></thead>"
	for(var i =0 ; i < keys.length ; i++){
		var quantity = ingredients[keys[i]].quantity;
		var measurement = ingredients[keys[i]].quantity;
		if(quantity == 0){
			quantity = 1;
		}
		quantity =  quantity.toFixed(2)
		var unit = ingredients[keys[i]].unit;
		var names = keys[i];
		var id = ingredients[keys[i]].id;
		str += "<tr>"
		str += "<td><input  class = 'item-quantity' itemname='"+names+"' value='"+measurement+"'></td>"
		str += "<td>" + unit +"</td>"
		str += "<td>" + names +"</td>"
		str += "<td id='quantity-"+id + "' >" + Math.ceil(quantity) +"</td>"
		str += "<td id='price-"+id + "'></td>"
		
		str += "</tr>"
	}
	str += "<tfoot><td colspan='5'><div id = 'total-price'></div></td></tfoot>"
	str += "</table>"
	getPrices();
	$("#items").html(str);
	$(".item-quantity").on("change", function(){
		var id = $(this).attr("itemname");
	
		var val = $(this).val();
		ingredients[id].quantity = parseFloat(val) || 0;
		updateDisplay();
	})
}
function getPrices(){
	totalPrice = 0;
	var keys = Object.keys(ingredients);
	for(var i =0 ; i < keys.length ; i++){
		var id = ingredients[keys[i]].id;
		$.ajax({
			url: "/item?itemID="+ id,
			success: function(result){
				var json = JSON.parse(result);
				var quantity = $("#quantity-"+json.id).text();
				var price =  (json.price * quantity).toFixed(2);
				$("#price-"+json.id).html("$" + price)
				totalPrice += parseFloat(price);
				console.log(json.id);
				$("#total-price").html("Total Price: $" + totalPrice.toFixed(2));
			}
		})
	}
}