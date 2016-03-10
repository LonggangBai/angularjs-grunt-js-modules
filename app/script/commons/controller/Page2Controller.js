

    var Page2Controller = function($scope,Page2Service) {
        $scope.desc=update('aa');
        function update(msg) {
            console.log('Page2Controller update ' + msg);
            return Page2Service.update(msg);
        };
    };

    controllersModule.controller('Page2Controller', Page2Controller);


