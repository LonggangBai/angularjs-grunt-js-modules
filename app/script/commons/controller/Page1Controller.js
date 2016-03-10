Page1Controller = function($scope,Page1Service) {
        $scope.desc=save('aa');
        function save(msg) {
                console.log('Page1Controller.prototype.save ' + msg);
                return Page1Service.save(msg);
        };
};

controllersModule.controller('Page1Controller', Page1Controller);