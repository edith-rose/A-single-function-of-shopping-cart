var app = angular.module("my-app", []);
app.controller("my-controller", ["$scope", function($scope){
  $scope.shops = [
    {
      shopname:"安妮可旗舰店",
      commodityList: [
        {
          name: "2017夏季新款绑带高跟鞋",
          price: 80, 
          count: 1,
          img: '1.jpg',
          selected: false
        },
        {
          name: "2017宽松圆领披肩",
          price: 99,
          count: 1,
          img: '5.jpg',
          selected: true
        }
      ]
    },
    {
      shopname:"贝曼达旗舰店优惠",
      commodityList:[
        {
          name: "2017效率手册日程本", 
          price: 22, 
          count: 1,
          img: '2.jpg',
          selected: true
        }
      ]
    },
    {
      shopname:"安安金纯旗舰店",
      commodityList: [
        {
          name: "安安金纯橄榄油去屑柔顺洗发露", 
          price: 10, 
          count: 1,
          img: '3.jpg',
          selected: true
        }
      ]
    },
    {
      shopname: "色彩旋律旗舰店",
      commodityList: [
        {
          name: "2017夏季包头凉鞋女鞋",
          price: 158,
          count: 1,
          img: '4.jpg',
          selected: true
        }
      ]
    }
  ];

  $scope.add = function(commodity) {
    commodity.count++;
  };

  $scope.reduce = function(commodity) {
    if (commodity.count > 1) {
      commodity.count--;
    }
  };

  $scope.totalPrice = function(){
    var result = 0;
    angular.forEach($scope.shops, function(shop){
      angular.forEach(shop.commodityList, function(commodity){
        if (commodity.selected) {
          result +=  commodity.count * commodity.price;
        }
      });
    });
    return result;
  };

  $scope.del = function(commodityList, index){
    commodityList.splice(index,1);
  };

  $scope.totalQuantity = function(){
    var number = 0;
    angular.forEach($scope.shops, function(shop){
      angular.forEach(shop.commodityList, function(commodity){
        if(commodity.selected){
          number +=  commodity.count;
        }
      });
    });
    return number;
  };

  $scope.shopAllCommodityIsSelect = function(commodityList) {
    var result = true;
    angular.forEach(commodityList, function(commodity) {
      if (!commodity.selected) {
        result = false;
      }
      return false;
    });
    return result;
  };

  $scope.shopAllCommoditySelect = function(commodityList, event) {
    var chkBtnStatus = angular.element(event.target).prop('checked');
    angular.forEach(commodityList, function(commodity) {
      commodity.selected = chkBtnStatus;
    });
  };

  $scope.allIsSelect = function() {
    var result = true;
    angular.forEach($scope.shops, function(shop) {
      if (!result) {
        return false;
      }
      angular.forEach(shop.commodityList, function(commodity){
        if (!commodity.selected) {
          result = false;
          return false;
        }
      });
    });
    return result;
  };

  $scope.allSelect = function(event){
    var chkBtnStatus = angular.element(event.target).prop('checked');
    angular.forEach($scope.shops, function(shop){
      angular.forEach(shop.commodityList, function(commodity){
        commodity.selected = chkBtnStatus;
      });
    });
  };
}]);