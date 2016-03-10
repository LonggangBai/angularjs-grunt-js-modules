/**
 * Created by longgangbai on 2016/3/8.
 */



    this.commonModule = angular.module('ticket.common', []);

    this.controllersModule = angular.module('ticket.controllers', []);

    this.servicesModule = angular.module('ticket.services', []);

    this.modelsModule = angular.module('ticket.models', []);

    var  dependencies= ["ngRoute",'ticket.common','ticket.controllers','ticket.services','ticket.models','ticket.routconfig'];
    var mainapp = angular.module("mainapp",dependencies);
    angular.module('ticket.routconfig', ['ngRoute']).config(function ($routeProvider) {
        var  routes=["ticket/pagetab", "commons/page1","commons/page2","ticket/page3"];
        var setRoutes = function(route) {
            var config, url;
            url = '/' + route;
            config = {
                templateUrl: 'app/views/' + route + '.html'
            };
            $routeProvider.when(url, config);
            return $routeProvider;
        };
        routes.forEach(function(route) {
            return setRoutes(route);
        });

        return $routeProvider.when('/', {
            redirectTo: '/index'
        }).otherwise({
            redirectTo: '/404'
        });
    }).run(function(){
         console.log('angularjs grunt modules run ....')
    });

