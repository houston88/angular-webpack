// navbar
class NavbarController {
  constructor($scope) {
    console.log('Navbar controller...');
    this.scope = $scope;
  }
  toggleLeftNav() {
    // can we event up
    console.log('Emit event up chain...');
    this.scope.$emit('toggleNav');
  };
}

// navbar component
let navbarComponent = {
  template:
    `<md-toolbar md-whiteframe="3" class="md-primary md-hue-1">
      <div class="md-toolbar-tools">

        <md-button class="md-icon-button" aria-label="Settings" ng-click="navbar.toggleLeftNav()">
          <ng-md-icon icon="menu"></ng-md-icon>
        </md-button>
        <span>Alpha Saver</span>

        <span flex></span>

        <md-input-container md-no-float flex-15 class="md-block md-accent"  style="margin:0;padding-top:20px;padding-bottom:0px;">
          <input ng-model="main.search" placeholder="Search">
        </md-input-container>
        <md-button class="md-fab md-mini md-accent" aria-label="Search">
          <ng-md-icon icon="search"></ng-md-icon>
        </md-button>

        <!--<md-button>Button</md-button>-->
      </div>
    </md-toolbar>`,
  controller: 'NavbarController',
  controllerAs: 'navbar'
};

let navbar = angular.module('navbar', ['ngMdIcons'])
  .controller('NavbarController', NavbarController)
  .component('navbar', navbarComponent);

export default navbar;