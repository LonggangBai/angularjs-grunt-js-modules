/**
 * Created by longgangbai on 2016/3/9.
 */
var PageTabController=function($scope,PageTabService){
    $scope.msg="this is a test";

    var select= function(msg){
       // return "PageTabController select ";
       return  PageTabService.select(msg);
    }
    $scope.desc=select('aa');
}
controllersModule.controller('PageTabController',PageTabController);
