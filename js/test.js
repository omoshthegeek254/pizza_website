$(document).ready(function(){

    


    $('.deliver').click(function (){
        var crust = parseInt($('#crust option:selected').val());
      var topping = parseInt($('#topping option:selected').val());
      var size = parseInt($('#size option:selected').val());
      var quantity = parseInt($("#quantity").val());
      var delivery = 250;

    

      var price = (crust+topping+size) * quantity;
      var total = price +delivery;

      //if(delivery == "true"){
          prompt("Please enter your address below followed by phone number i.e Langata,Otiende,Kalobot RD , 0722000000" );
          alert("Order Received Successfully  :Your total cost is :"+ total +" .  Our delivery team will contact you soon");

      //}
      
      
      
        // $('#itemCount').text(itemCount).css('display', 'block');
        
      
  
    })
    $(".pick").click(

        
        function(){
            var crust1 = parseInt($('#crust option:selected').val());
      var topping1 = parseInt($('#topping option:selected').val());
      var size1 = parseInt($('#size option:selected').val());
      var quantity1 = parseInt($("#quantity").val());
      var delivery1 = 0;

      var price1 = (crust1+topping1+size1) * quantity1;
          alert("Order Received Successfully  :Your total cost is :"+ price1 +".  You will receive an SMS notification once your order is ready (10 minutes Tops)"); 
        }
    )
    })