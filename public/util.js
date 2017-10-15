var ingredients = {}
function addIngredients(input){
	for(var i = 0; i < input.length; i++){
		var name = input[i].name;
		var newName = convertName(name);
		console.log(name + " -> " + newName);
		if(ingredients[name] == undefined){
			ingredients[name] = {quantity: input[i].quantity, unit:input[i].unit}
		}
		else{
			ingredients[name].quantity += input[i].quantity;
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