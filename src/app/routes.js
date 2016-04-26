// configure routing
routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  // routes without #
  $locationProvider.html5Mode(true);
  // default route url
  $urlRouterProvider.otherwise("/view1");
  // setup routing states
  $stateProvider
    .state('home', {
      // main home layout
      template: '<home></home>'
    })
    .state('home.view1', {
      url: '/view1',
      views: {
        'content@home': {
          template: '<view1-component></view1-component>'
        }
      }
    })
    .state('home.view2', {
      url: '/view2',
      views: {
        'content@home': {
          template: '<view2-component></view2-component>'
        }
      }
    });
}