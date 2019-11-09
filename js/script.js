var itemCount = 0;
var priceTotal = 0;


$(document).ready( function(){
    $('.order').click(function (){
        itemCount ++;

        var order = function (crust, topping, size,delivery) {
          this.crust = $("select:checked").val();
          this.topping = colors;
          this.size = size;
          this.delivery= delivery;
        }  


        

       
      
        $('#itemCount').text(itemCount).css('display', 'block');
        
      
  
    })
    $('.cart').click(function(){
        itemCount --;
        $('#itemCount').text(itemCount).css('display', 'block');
        if (itemCount < 1 ) {
          $('#itemCount').css('display', 'none');
          itemCount=0;
        }
      }
    )

})