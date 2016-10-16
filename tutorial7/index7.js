$(function() {
  var $orders = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  function addOrder(order) {
    $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
  };

  var orders = [{"id":1, "name":"Will", "drink":"Americano w/ Creme"}, {"id":2, "name":"Laura", "drink":"Vanilla Latte"}];
  $.each(orders, function(i, order) {
      addOrder(order);
  });

  $.ajax({
    type: 'GET',
    url: '/api/orders',
    success: function(orders) {
      $.each(orders, function(i, order) {
        $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
      });
    },
    error: function() {
      alert('error loading orders');
    }
  });

  $('#add-order').on('click', function() {

    var order = {
      name: $name.val(),
      drink: $drink.val()
    };

    $.ajax({
      type: 'POST',
      url: '/api/orders'
      data: order,
      success: function(newOrder) {
          addOrder(newOrder);
        error: function() {
          alert('error saving order');
        }
      }
    });

  });

});
