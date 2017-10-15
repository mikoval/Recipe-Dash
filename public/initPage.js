
$(document).ready(function () {
    $("#search-btn").on("click", function(){
        location = "/cart?url="+ $("#search").val();
    });

    $("#searchMore-btn").on("click", function(){
        var url = "/url?url="+ $("#searchMore").val();
        $.ajax({
            url: url,
            success: function(response){
                response = JSON.parse(response);
                addIngredients(response);
            }
        })
    })
    console.log(window.location.pathname.split("?"));

});

