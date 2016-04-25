import navbar from '../component/navbar';
import tabbar from '../component/tabbar';
import search from '../component/search';
import view1  from './view1';

// top level controller
class HomeCtrl {
  constructor() {
    this.randomVar = 'Hello there...';
  }
}

// main app layout
let homeComponent = {
  template:
    `<div layout="column" layout-fill>
      <!-- contains leftnav -->
      <navbar></navbar>
      <!-- main content -->
      <tabbar ng-cloak></tabbar>
      <md-content class="md-padding" layout="column">
        <div ui-view="content"></div>
      </md-content>
    </div>`,
  controller: 'HomeCtrl',
  controllerAs: 'home'
};

angular.module('home', ['navbar', 'tabbar', 'search', 'view1'])
  .controller('HomeCtrl', HomeCtrl)
  .component('home', homeComponent);

export default 'home';