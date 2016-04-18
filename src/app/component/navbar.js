// View 1
class NavbarController {
  constructor() {
    console.log('Navbar controller...');
  }
}

// navbar component
let navbarComponent = {
  template: `
  <md-toolbar md-scroll-shrink="true">
      <div class="md-toolbar-tools">
        <md-button class="md-icon-button" aria-label="Settings">
          <ng-md-icon icon="menu"></ng-md-icon>
        </md-button>
        <span>Alpha Saver</span>
        <span flex></span>
      <md-button>Button</md-button>
    </div>

    <!-- can we place in toolbar? -->
    <md-tabs md-stretch-tabs md-selected="selectedIndex">
      <md-tab label="Your Price Watches"></md-tab>
      <md-tab label="Browse Products"></md-tab>
    </md-tabs>

  </md-toolbar>`,
  controller: 'NavbarController',
  controllerAs: 'navbarCtrl'
};

let navbar = angular.module('navbar', ['ngMdIcons'])
  .controller('NavbarController', NavbarController)
  .component('navbar', navbarComponent);

export default navbar;