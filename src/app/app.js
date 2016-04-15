// library dependencies
import angular from 'angular';
import newRouter from '@angular/router';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';

// library styles
import 'angular-material/angular-material.css';

// app styles
import '../style/app.css';

// app dependencies
import routes from './routes';
import view1 from './component/view1';

let appDirective = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let testComponent = {
  template: '<p>Hello from component!</p>',
  controller: 'AppCtrl',
  controllerAs: 'test'
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'view1'])
  .directive('appMain', appDirective)
  .component('testComponent', testComponent)
  .controller('AppCtrl', AppCtrl)

// traditional routes
routes(app);

export default 'app';