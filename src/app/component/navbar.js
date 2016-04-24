import sidenav from './sidenav';

// navbar
class NavbarController {
  constructor($mdSidenav, $log) {
    this.mdSidenav = $mdSidenav;
    this.log = $log;
    this.log.info('Navbar controller...');
  }
  toggleLeftNav() {
    this.mdSidenav('leftSideNav').toggle();
  }
  // on component init
  $onInit() {
    this.log.debug('On navbar init...');
  }
}

// navbar component
let navbarComponent = {
  template:
    `<md-toolbar md-whiteframe="3" class="md-primary md-hue-1">
      <div class="md-toolbar-tools">

        <md-button class="md-icon-button" aria-label="Settings" ng-click="navbar.toggleLeftNav()">
          <ng-md-icon icon="menu"></ng-md-icon>
        </md-button>
        <span>App Name</span>

        <span flex></span>

        <md-input-container md-no-float flex-5 class="md-block md-accent"  style="margin:0;padding-top:25px;padding-bottom:0px;">
          <input ng-model="main.search" placeholder="Search">
        </md-input-container>
        <md-button class="md-fab md-mini md-accent" aria-label="Search">
          <ng-md-icon icon="search"></ng-md-icon>
        </md-button>

        <!--<md-button>Button</md-button>-->
      </div>
    </md-toolbar>
    <!-- lets also include sidenav with navbar -->
    <sidenav></sidenav>`,
  controller: 'NavbarController',
  controllerAs: 'navbar'
};

let navbar = angular.module('navbar', ['sidenav'])
  .controller('NavbarController', NavbarController)
  .component('navbar', navbarComponent);

export default navbar;