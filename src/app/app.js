// Refer to boilerplate project:
// https://github.com/preboot/angular-webpack

// library dependencies
import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';

// TODO: Move to sass
// library styles
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';

// TODO: Move to sass
// app styles
import '../style/app.css';

// app dependencies
import routes from './routes';
import navbar from './component/navbar';
import tabbar from './component/tabbar';
import search from './component/search';
import view1 from './component/view1';

// main app structure
let appComponent = {
  template: require('./app.html'),
  controller: 'AppCtrl',
  controllerAs: 'app'
};

// top level controller
class AppCtrl {
  constructor($scope) {
    this.randomVar = 'Hello there...';
    this.appSettings = {
      leftNavOpen: false
    };
    this.scope = $scope;

    // handle toggle event
    $scope.$on('toggleNav',(event) => {
      console.log('Got broadcast event...');
      this.appSettings.leftNavOpen = !this.appSettings.leftNavOpen;
    });

  }

  /*
  scope.$on('toggleNav', (event) => {
    console.log('Got broadcast event...');
    this.appSettings.leftNavOpen = !this.appSettings.leftNavOpen;
  });
  */

  toggleNav() {
    this.appSettings.leftNavOpen = !this.appSettings.leftNavOpen;
  };
}

// main app module
const app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'navbar', 'tabbar', 'search', 'view1'])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('blue')
  })
  .controller('AppCtrl', AppCtrl)
  .component('appMain', appComponent);

// traditional routes
routes(app);

export default 'app';