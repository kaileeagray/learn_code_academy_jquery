$(function() {
  var $orders = $('#orders');

  var orders = [{"id":1, "name":"Will", "drink":"Americano w/ Creme"}, {"id":2, "name":"Laura", "drink":"Vanilla Latte"}];
  $.each(orders, function(i, order) {
    $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
  });

});
