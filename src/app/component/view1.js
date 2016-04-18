// View 1
class ViewOneController {
  constructor() {
    console.log('View 1 Activated...');
    this.url = 'http://dev.alphasaver.com';
  }
}

let view1 = angular.module('view1', [])
  .controller('ViewOneController', ViewOneController)
  .component('view1Component', {
    template: require('./view1.html'),
    controller: ViewOneController,
    controllerAs: 'view1Ctrl'
});

export default view1;