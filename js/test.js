$(document).ready(function(){
        $(".deliver").click(
            function(){
                var crust = $("#crust option:selected").val();
                alert(crust);

            }
        );
    })