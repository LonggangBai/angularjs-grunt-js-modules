/**
 * Created by longgangbai on 2016/3/9.
 */
    var PageTabService = function() {
    };
    PageTabService.prototype.select = function(msg) {
        return  " PageTabService.prototype.select" +msg;
    };
    servicesModule.service('PageTabService', PageTabService);
