
// View 1
class ViewTwoController {
  constructor($mdDialog) {
    console.log('View 2 Activated...');
    this.url = 'http://dev.alphasaver.com';
    this.toppings = [
      { name: 'Pepperoni', wanted: true },
      { name: 'Sausage', wanted: false },
      { name: 'Black Olives', wanted: true },
      { name: 'Green Peppers', wanted: false }
    ];
    this.settings = [
      { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'network_wifi', enabled: true },
      { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'settings_bluetooth', enabled: false }
    ];
    this.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .textContent('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    };
  }
}
ViewTwoController.$inject = ['$mdDialog'];

// tabbar component
let view2Component = {
  template:
    `<md-content layout="row" layout-padding layout-align="center">
      <div style="margin:10px;" md-whiteframe="1" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout layout-align="center center">
        <span>md-whiteframe="1"</span>
      </div>
      <div style="margin:10px;" md-whiteframe="2" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout layout-align="center center">
        <span>md-whiteframe="2"</span>
      </div>
      <div style="margin:10px;" md-whiteframe="3" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout layout-align="center center">
        <span>md-whiteframe="3"</span>
      </div>
    </md-content>

    <md-subheader class="md-no-sticky">Single Action Checkboxes</md-subheader>
    <md-list-item ng-repeat="topping in ctrl.toppings">
       <p> {{ topping.name }} </p>
       <md-checkbox class="md-secondary" ng-model="topping.wanted"></md-checkbox>
    </md-list-item>
    <md-divider></md-divider>

    <md-subheader class="md-no-sticky">Clickable Items with Secondary Controls</md-subheader>
    <md-list-item ng-click="ctrl.navigateTo(setting.extraScreen, $event)" ng-repeat="setting in ctrl.settings">
      <ng-md-icon icon="{{setting.icon}}"></ng-md-icon>
      <p> {{ setting.name }} </p>
      <md-switch class="md-secondary" ng-model="setting.enabled"></md-switch>
    </md-list-item>
    <md-list-item ng-click="ctrl.navigateTo('data usage', $event)">
      <ng-md-icon icon="data_usage"></ng-md-icon>
      <p>Data Usage</p>
      </md-list-item>
    <md-divider></md-divider>`,
  controller: ViewTwoController,
  controllerAs: 'ctrl'
};

let view2 = angular.module('view2', [])
  .controller('ViewTwoController', ViewTwoController)
  .component('view2Component', view2Component)


export default view2;