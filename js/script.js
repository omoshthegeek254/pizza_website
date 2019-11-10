var itemCount = 0;
var priceTotal = 0;


$(document).ready( function(){
    $('.order').click(function (){
        itemCount ++;
        
      var crust = $('#crust option:selected').val();
      var topping = $('#topping option:selected').val();
      var size = $('#crust option:selected').val();
      var qty = itemCount;

        var order = function (crust, topping, size,qty,delivery) {
          this.crust =  crust;

          this.topping = topping;
          this.size = size;
          this.qty = qty
          this.delivery= delivery;
        }  

        
        
        var order = new Order(crust, topping, size,qty);


        

       
      
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