


$(function() {

  var $orders = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  var orderTemplate = $('#order-template').html();

  function addOrder(order) {
    $orders.append(Mustache.render(orderTemplate, order));
  };

  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friends',
    success: function(data) {
      $.each(data, function(i, order) {
        if (order.id) {
          addOrder(order);
        }
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

  // listen to remove items that aren't there yet
  // delegate bc
  $orders.delegate('.remove', 'click', function() {

    var $li = $(this).closest('li');

    $.ajax({
      type: 'DELETE',
      url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('data-id'),
      success: function() {
        $li.fadeOut(300, function() {
          $(this).remove();
        });
      }
    });
  });

});
