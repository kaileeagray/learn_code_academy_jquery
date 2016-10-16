$(function() {

  var $orders = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  var orderTemplate = "" +
  "<li>" +
  "<p><strong>Name:</strong> {{name}} </p>" +
  "<p><strong>Drink:</strong> {{drink}} </p>" +
  "<button data-id='{{id}}' class='remove'>x</button>"  +
  "</li>";

  function addOrder(order) {
    $orders.append(Mustache.render(orderTemplate, order));
  };

  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friends',
    success: function(data) {
      $.each(data, function(i, order) {
        addOrder(order);
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
      url: 'http://rest.learncode.academy/api/learncode/friends',
      data: order,
      success: function(newOrder) {
        addOrder(newOrder);
      }
    });
  });


  $orders.delegate('.remove', 'click', function() {
    var $li = $(this).closest('li');
    $li.remove();

    $.ajax({
      type: 'DELETE',
      url: 'http://rest.learncode.academy/api/learncode/friends' + $(this).attr('data-id'),
      success: function() {
      }
    });
  });
});
