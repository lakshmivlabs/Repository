//var module = angular.module('mktapp', []);



app.controller('CommunicationController', function ($scope) {
    console.log("communicationnnnn");
$scope.modules = {
        department: [{
            info1: '',
            info2: '',
            info3:'',
            }],
         wifidetails: [{
            info1: '',
            info2: '',
            info3:'',
            }],
         dialingdetails: [{
            info1: '',
            info2: '',
            info3:'',
            }]
    };
    
    
    
	/*shoppint cart*/
	 

    $scope.adddept = function() {
        $scope.modules.department.push({
            info1: '',
           info2: '',
            info3:''
        });
    },

    $scope.removedept = function(index) {
       
        if(index != 0)
        $scope.modules.department.splice(index, 1);
    },
     $scope.addwifi = function() {
        $scope.modules.wifidetails.push({
            info1: '',
           info2: '',
            info3:''
        });
    },

    $scope.removewifi = function(index) {
           if(index != 0)
        $scope.modules.wifidetails.splice(index, 1);
    },

 $scope.adddial = function() {
        $scope.modules.dialingdetails.push({
            info1: '',
           info2: '',
            info3:''
        });
    },

    $scope.removedial = function(index) {
           if(index != 0)
        $scope.modules.dialingdetails.splice(index, 1);
    },
    
    

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.modules.department, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    },
    $scope.saveItem = function(){
        console.log($scope);
        console.log($scope.modules);
    }
    
})

