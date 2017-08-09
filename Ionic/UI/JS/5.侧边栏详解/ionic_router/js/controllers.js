angular.module('myApp.controllers', [])

.controller('tab1Controller', function($scope) {

        $scope.title='tab1Controller';

 })
    .controller('tab2Controller', function($scope) {

        $scope.title='tab2Controller';

    })
    .controller('tab3Controller', function($scope) {

        $scope.title='tab3Controller';

    })

    .controller('content1Controller', function($scope,$stateParams) {

        $scope.title='content1Controller';


        console.log($stateParams);

    })



