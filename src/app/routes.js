// configure routing
let routes = (app) => {
    app.config(['$routeProvider','$locationProvider', ($routeProvider, $locationProvider) => {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/view1', {template: '<view1-component></view1-component>'})
        .otherwise('/view1')
    }]);
};

export default routes;