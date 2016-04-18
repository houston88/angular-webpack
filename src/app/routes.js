// configure routing
let routes = (app) => {
    app.config(($routeProvider) => {
      $routeProvider
        .when('/view1', {template: '<view1-component></view1-component>'})
        .otherwise('/view1')
    });
};

export default routes;