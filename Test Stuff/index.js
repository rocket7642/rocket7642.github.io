$(document).ready(function() {
    $("#start").click(function(){
        $(this).hide();
            var id;
            for(var i = 0; i <8; i++){
                for(var j = 0; j <8; j++){
                    if((i+j)%2 == 0){
                    $("#squares").append($("<div>",{class:"white square"}));
                    }else{
                        var id = i+'_'+j;
                        $("#squares").append($("<div>",{class:"red square", id: id}));
                        if (i <= 2){
                            $("#"+id).append($("<div>",{class:"white piece"}));
                        }else if (i >= 5){
                            $("#"+id).append($("<div>",{class:"black piece"}));
                        }
                }
            }
        }
    });
});