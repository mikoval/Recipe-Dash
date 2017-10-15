var ingredients = {}
function addIngredients(input){
	for(var i = 0; i < input.length; i++){
		var name = input[i].name;
		var newName = convertName(name);
		console.log(name + " -> " + newName);
		if(ingredients[newName] == undefined){
			ingredients[newName] = {quantity: splitQuantity(input[i].quantity), unit:input[i].unit};
		}
		else{
			ingredients[newName].quantity += splitQuantity(input[i].quantity);
		}
	}
	console.log(ingredients);
}
function convertName(name){
	for(var i = 0; i < data.length; i++){
		var dataName = data[i].shortDescription.values[0].value;
		if(dataName.toLowerCase().includes(name.toLowerCase())){
			return dataName;
		}
	}
	return "";
}

function splitQuantity(input){
	var quantity = 0;
	var splitArray = input.split(" ");
	// console.log(splitArray);
	for (var i = 0; i < splitArray.length; i++) {
		if (splitArray[i].includes("/")) {
			var splitNum = splitArray[i].split("");
			quantity += (parseInt(splitNum[0])) / (parseInt(splitNum[2]));
		} else {
			quantity += parseInt(splitArray[i]);
		}
	}
	console.log(quantity);
	return quantity;
}