

$(document).ready(function () {
  var itemCount = 0;
  var priceTotal = 0;
  var pricelist = {
    price1: [500, 700, 950],
    price2: [600, 800, 1050]
  }

  $('.order').click(function () {
    //incrementing quantity
    itemCount++;

    var crust1 = $('#crust option:selected').val();
    var topping1 = $('#topping option:selected').val();
    var size1 = $('#size option:selected').val();
    var quantity1 = itemCount;
    var delivery1 = $('#delivery option:selected').val();
    
  
  //order constructor
    function Order(crust, topping, size, quantity, delivery) {
      this.crust = crust;
      this.topping = topping;
      this.size = size;
      this.quantity = quantity;
    }
  
    var custOrder = new Order(crust1, topping1, size1, quantity1, delivery1);
    
    //checking price depending on order

    if(custOrder.size == "small"&& topping1 == "chicken"||"beef"){
      priceTotal += pricelist.price1[0];

    }else if (custOrder.size == "small"&& topping1=="veggie"){
      priceTotal += pricelist.price2[0];

    }else if (custOrder.size == "medium"&& topping1== "chicken"||"beef"){
      priceTotal += pricelist.price1[1];

    }else if (custOrder.size == "medium"&& topping1=="veggie"){
      priceTotal += pricelist.price2[1];

    }else if (custOrder.size == "large"&& topping1== "chicken"||"beef"){
      priceTotal += pricelist.price1[2];

    }else if (custOrder.size == "large"&& topping1== "veggie"){
      priceTotal += pricelist.price2[2];

    }
  $('.checkout').click(
    function(){
      alert(priceTotal);
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