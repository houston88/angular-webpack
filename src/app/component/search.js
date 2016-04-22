// search
class SearchController {
  constructor() {
    console.log('Search controller...');
  }
}

// search component
let SearchComponent = {
  template:
    `<md-content layout-padding>
      <md-input-container md-no-float flex class="md-block md-accent"  style="margin:0;">
        <input ng-model="main.search" placeholder="Search">
      </md-input-container>
    </md-content>`,
  controller: 'searchController',
  controllerAs: 'searchCtrl'
};

let search = angular.module('search', ['ngMdIcons'])
  .controller('searchController', SearchController)
  .component('search', SearchComponent);

export default search;