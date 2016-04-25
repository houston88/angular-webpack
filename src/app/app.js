// library dependencies
import 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material-icons';

// library styles
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';

// main app styles
import '../style/app.scss';

// app dependencies
import routes from './routes';

// main app layout
import home from './layout/home';

// main app module
const app = angular.module('app', ['ui.router', 'ngMaterial', 'ngMdIcons', 'home'])
  .config(routes)
  .config(['$mdThemingProvider', ($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('blue')
  }]);

export default 'app';