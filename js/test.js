$(document).ready(function(){

    $('.order').click(function (){
        itemCount ++;

      var crust = $('#crust option:selected').val();
      var topping = $('#topping option:selected').val();
      var size = $('#size option:selected').val();
    //   var qty = itemCount;
    //   var delivery=$('#delivery option:selected').val();

      alert(typeof crust+"-"+typeof topping+"-"+typeof size);
      
    


     

       
      
        $('#itemCount').text(itemCount).css('display', 'block');
        
      
  
    })
        $(".deliver").click(
            function(){
                var crust = $("#crust option:selected").val();
                alert(crust);

            }
        );
    })