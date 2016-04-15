import ngMdIcons from 'angular-material-icons';

// View 1
class ViewOneController {
  constructor() {
    console.log('View 1 Activated...');
  }
}

let view1 = angular.module('view1', ['ngMdIcons'])
  .controller('ViewOneController', ViewOneController)
  .component('view1Component', {
    template: require('./view1.html'),
    controller: ViewOneController
});

export default view1;