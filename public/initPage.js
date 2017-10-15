
$(document).ready(function () {
    $("#search-btn").on("click", function(){
        location = "/cart?url="+ $("#search").val();
    });

    $("#searchMore-btn").on("click", function(){
    	console.log("click");
        var url = "/url?url="+ $("#searchMore").val();
        $("#searchMore").val("");
        $.ajax({
            url: url,
            success: function(response){
                response = JSON.parse(response);
                addIngredients(response);
            }
        })
    })
    var url = getParameterByName('url');
    if (url != null) {
        if(url.length > 0);
        $("#searchMore").val(url);
        $("#searchMore-btn").trigger("click");
    }

});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

