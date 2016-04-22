// Tab bar
class TabbarController {
  constructor() {
    console.log('Tabbar controller...');
  }
}

// tabbar component
let tabbarComponent = {
  template:
    `<md-content>
      <md-tabs md-stretch-tabs md-selected="selectedIndex">
        <md-tab label="Your Price Watches"></md-tab>
        <md-tab label="Browse Products"></md-tab>
      </md-tabs>
      <md-divider></md-divider>
    </md-content>`,
  controller: 'TabbarController',
  controllerAs: 'tabbar'
};

let tabbar = angular.module('tabbar', [])
  .controller('TabbarController', TabbarController)
  .component('tabbar', tabbarComponent);

export default tabbar;