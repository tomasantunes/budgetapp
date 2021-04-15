function AppViewModel() {
  var a = this;
  a.rows = ko.observableArray();
  a.totalIncome = ko.observable();
  a.newRow = {
    category: ko.observable(),
    amount: ko.observable(),
  };
  
  a.totalExpense = ko.computed(function(){
      var total = 0;
      $.each(a.rows(), function(i, val) {
        total += Number(val.amount());
      });
      return total;
  });
  a.totalBalance = ko.computed(function(){
      return a.totalIncome() - a.totalExpense();
  });
  
  a.addRow = function() {
    rows.push(new a.RowModel(a.newRow));
    a.newRow.category("");
    a.newRow.amount("");
  }
              
  a.RowModel = function(r) {
      var rm = this;
      rm.category = ko.observable(r.category());
      rm.amount = ko.observable(r.amount());
  }
}

ko.applyBindings(AppViewModel, document.getElementById("app-container"));
