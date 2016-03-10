/**
 * Created by longgangbai on 2016/3/9.
 */

var Page1Service = function() {


};
Page1Service.prototype.save= function (msg) {
    return " Page1Service.prototype.save" + msg;
};
servicesModule.service('Page1Service', Page1Service);


