(function($){
  // Object declaration
  var InvoiceItemModel = Backbone.Model.extend({
    // Set default values
    defaults: {
      price: 0,
      quantity: 0
    },
    // Calculation
    calculateAmount: function(){
      return this.get('price') * this.get('quantity');
    }
  });

  $(document).ready(function(){
    // Start application
    
  });
})(jQuery);