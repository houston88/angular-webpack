// component imports
import navbar from '../component/navbar';
import tabbar from '../component/tabbar';
import search from '../component/search';
import view1  from './view1';
import view2  from './view2';

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
      <!-- tab bar -->
      <tabbar ng-cloak></tabbar>
      <!-- main content -->
      <md-content layout-padding class="main-view" layout="column">
        <div ui-view="content"></div>
      </md-content>
    </div>`,
  controller: 'HomeCtrl',
  controllerAs: 'home'
};

angular.module('home', ['navbar', 'tabbar', 'search', 'view1', 'view2'])
  .controller('HomeCtrl', HomeCtrl)
  .component('home', homeComponent);

export default 'home';