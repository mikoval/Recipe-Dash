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
		return data[minIndex].shortDescription.values[0].value;
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

		return data[minIndex].shortDescription.values[0].value;
	}
	/*return "";*/


}