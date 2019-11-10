var itemCount = 0;
var priceTotal = 0;
var pricelist = {
  price1:[500,700,950],
  price2:[600,800,1050]
}




var crust = $('#crust option:selected').val();
      var topping = $('#topping option:selected').val();
      var size = $('#size option:selected').val();
      var qty = itemCount;
      var delivery=$('#delivery option:selected').val();


$(document).ready( function(){
  $('#pap').click( function(){
    prompt("Enter Delivery address")
  });
    $('.order').click(function (){
        itemCount ++;

      

     

      // alert(crust)
      // alert(topping)
      // alert(size)
      // alert(qty)
      // alert(delivery)


        var order =  {
          c

          topping = topping;
          size = size;
         qty = qty
          delivery= delivery;
        }  
        
        alert (order());

        
        
        


        

       
      
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