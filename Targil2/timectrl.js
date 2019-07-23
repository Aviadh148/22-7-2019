

// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("timeCtrl", TimeCtrl)


// DI dependency injection - IOC
function TimeCtrl($scope) {
    //alert("hello from time controller")

    $scope.time = Date.now()

    $scope.refresh = function(){
        $scope.time = Date.now()
    }
    }