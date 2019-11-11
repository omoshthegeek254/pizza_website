

$(document).ready(function () {
 
  var crust1 = parseInt($('#crust option:selected').val());
  var topping1 = parseInt($('#topping option:selected').val());
  var size1 = parseInt($('#size option:selected').val());
  var quantity1 = itemCount;
  var delivery1 = parseInt($('#deliver').val());

 

  $('.deliver').click(function () {
    
alert(delivery1);
  
    
  
  //order constructor
    function Order(crust, topping, size, quantity, delivery) {
      this.crust = crust;
      this.topping = topping;
      this.size = size;
      this.quantity = quantity;
    }
  
    var custOrder = new Order(crust1,topping1, size1, quantity1, delivery1);
    var priceTotal= crust1+topping1+size1* quantity1;
    
  $('.checkout').click(
    function(){
      // var pay = parseInt(crust1)+parseInt(topping1)+parseInt(size1)+parseInt(delivery1);
      alert(" please pay a total amont of  Ksh :  "+pay);
    }
  )

    //
  
  
  
  
    
  
  
    





    $('#itemCount').text(itemCount).css('display', 'block');



  })
  $('.cart').click(function () {
    itemCount--;
    $('#itemCount').text(itemCount).css('display', 'block');
    if (itemCount < 1) {
      $('#itemCount').css('display', 'none');
      itemCount = 0;
    }
  }
  )

})