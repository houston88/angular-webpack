// Refer to boilerplate project:
// https://github.com/preboot/angular-webpack

// library dependencies
import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';

// library styles
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';

// main app styles
import '../style/app.scss';

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
  constructor() {
    this.randomVar = 'Hello there...';
  }
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