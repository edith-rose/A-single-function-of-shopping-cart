var app = angular.module("my-app", []);
app.controller("my-controller", ["$scope", function($scope){
  $scope.commodityList = [
    {
      name: "2017夏季新款绑带高跟鞋",
       price: 80, 
       count: 1,
       img: '1.jpg'
     },
    {
      name: "2017效率手册日程本", 
      price: 22, 
      count: 1,
      img: '2.jpg'
    },
    {
      name: "安安金纯橄榄油去屑柔顺洗发露", 
      price: 10, 
      count: 1,
      img: '3.jpg'
    }
  ];

  $scope.add = function(commodity) {
    commodity.count++;
  };

  $scope.reduce = function(commodity) {
    if(commodity.count != 0){
      commodity.count--;
    }else {
      return false;
    }
  };

  $scope.totalPrice = function(commodity){
    var result = 0;
    angular.forEach($scope.commodityList, function(commodity){
      var price = commodity.price * commodity.count;
      result += price ;
    });
    return result;
  };

  $scope.del = function(index){
    $scope.commodityList.splice(index,1);
  };
}]);