

$(document).ready(function () {
 
  var crust1 = $('#crust option:selected').val();
  var topping1 = $('#topping option:selected').val();
  var size1 = $('#size option:selected').val();
  var quantity1 = $('#quantity').val();
  // var delivery1 = $('#delivery option:selected').val()

 

  $('.deliver').click(function () {
    alert(crust1);
    alert(topping11);
    alert(size1);
    alert(quantity1);
//var address= prompt("Please Enter Delivery location followed by your phone number ");

    
  
  //order constructor
    function Order(crust, topping, size, quantity, delivery) {
      this.crust = crust;
      this.topping = topping;
      this.size = size;
      this.quantity = quantity;
    }
  
    var custOrder = new Order(crust1,topping1, size1, quantity1, delivery1);
    var priceTotal= crust1+topping1+size1* quantity1;
    
  // $('.checkout').click(
  //   function(){
  //     // var pay = parseInt(crust1)+parseInt(topping1)+parseInt(size1)+parseInt(delivery1);
  //     alert(" please pay a total amont of  Ksh :  "+pay);
  //   }
  // )

    //
  
  
  
  
    
  
  
    





    // $('#itemCount').text(itemCount).css('display', 'block');



  })
  // $('.cart').click(function () {
  //   itemCount--;
  //   $('#itemCount').text(itemCount).css('display', 'block');
  //   if (itemCount < 1) {
  //     $('#itemCount').css('display', 'none');
  //     itemCount = 0;
  //   }
  // }
  // )

})