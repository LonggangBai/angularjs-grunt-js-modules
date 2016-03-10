/**
 * Created by longgangbai on 2016/3/9.
 */


var Page3Controller = function($scope,Page3Service) {
    $scope.desc=delete1('aa');
    function delete1(msg) {
        console.log('delete1 ' + msg);
        //return "Page3Controller delete1   " + msg;
        return Page3Service.delete1(msg);
    };
};

controllersModule.controller('Page3Controller', Page3Controller);

