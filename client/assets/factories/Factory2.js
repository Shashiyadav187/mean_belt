app.factory('productFactory',['$http',function($http){
  function productFactory(){

    var _this = this;
    this.index = function(callback){
      $http.get('/products').then(function(returned_data){
        console.log(returned_data.data);
        products = returned_data.data;
        callback(products);
      });
    };

    this.create = function(newProduct, callback){
      console.log("product info in the factory", newProduct)
      $http.post('/product',newProduct).then(function(returned_data){
        console.log("within http", returned_data.data);
        callback(returned_data.data)
      })
    };

    this.remove = function(id){
      $http.delete(`/product/${id}`).then(function(){
        console.log("finished deleting")
      })
    }

  }
  return new productFactory();
}])
