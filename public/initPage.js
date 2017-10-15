
$(document).ready(function () {
    $("#search-btn").on("click", function(){
    	var url = "/url?url="+ $("#search").val();
    	$.ajax({
    		url: url,
    		success: function(response){
    			response = JSON.parse(response);
    			addIngredients(response);
    		}
    	})

    })
});

