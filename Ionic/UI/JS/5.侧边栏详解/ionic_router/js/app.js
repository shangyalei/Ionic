// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('myApp', ['ionic','myApp.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract:true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.tab1', {
    url: '/tab1',
    views:{
        'tab-tab1':{
            templateUrl: "templates/tab-tab1.html",
            controller:'tab1Controller'

        }

    }

  })
  .state('tab.tab2', {
      url: '/tab2',
      views:{
          'tab-tab2':{
              templateUrl: "templates/tab-tab2.html",
              controller:'tab2Controller'
          }

      }

  })
  .state('tab.tab3', {
      url: '/tab3',
      views:{
          'tab-tab3':{
              templateUrl: "templates/tab-tab3.html",
              controller:'tab2Controller'
          }

      }

  })
  .state('tab.content1', {
      url: '/content1/:id',
      views:{
          'tab-tab1':{
              templateUrl: "templates/tab-content1.html",
              controller:'content1Controller'
          }

      }

  })

  .state('news', {
         url: '/news',
        templateUrl: "templates/news.html"

      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/tab1');

});
