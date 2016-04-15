// configure routing
let routes = (app) => {
    app.config(($routeProvider) => {
      $routeProvider
        .when('/', {template: '<test-component></test-component>'})
        .when('/view1', {template: '<view1-component></view1-component>'})
        .otherwise('/')
    });
};

export default routes;