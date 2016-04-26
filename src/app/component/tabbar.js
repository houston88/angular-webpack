// styles
import '../../style/tabbar.scss';

// Tab bar
class TabbarController {
  constructor($state, $log) {
    $log.info('Tabbar controller...');
    // to determine what tab is active for direct navigation
    this.currentState = $state.current.name;
    $log.debug("Current state name: " + this.currentState);
  }
}
TabbarController.$inject = ['$state', '$log'];

// tabbar component
let tabbarComponent = {
  template:
    `<md-content class="app-tabbar">
      <md-tabs md-whiteframe="3" md-stretch-tabs="auto" md-center-tabs="true" class="md-primary md-hue-2">
        <md-tab label="View 1" ui-sref="home.view1" md-active="tabbar.currentState === 'home.view1'"></md-tab>
        <md-tab label="View 2" ui-sref="home.view2" md-active="tabbar.currentState === 'home.view2'"></md-tab>
      </md-tabs>
      <md-divider></md-divider>
    </md-content>`,
  controller: 'TabbarController',
  controllerAs: 'tabbar'
};

let tabbar = angular.module('tabbar', ['ui.router'])
  .controller('TabbarController', TabbarController)
  .component('tabbar', tabbarComponent);

export default tabbar;