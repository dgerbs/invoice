(function($){
  // Object declaration
  // Invoice model
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
  // Invoice instance
  var invoiceItemModel = new InvoiceItemModel({
    price: 2,
    quantity: 3
  });
  // render View
  var PreviewInvoiceItemView = Backbone.View.extend({
    template: _.template('\
      Price: <%= price %>.\
      Quantity: <%= quantity %>.\
      Amount: <%= amount %>.\
      '),
    render: function () {
      var html = this.template({
        price: this.model.get('price'),
        quantity: this.model.get('quantity'),
        amount: this.model.calculateAmount()
      });
      $(this.el).html(html);
    }
  });
  //
  var previewInvoiceItemView = new PreviewInvoiceItemView({
    model: invoiceItemModel,
    el: 'body'
  });

  $(document).ready(function(){
    // Start application
    
  });
})(jQuery);