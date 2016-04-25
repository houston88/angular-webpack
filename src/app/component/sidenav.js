// sidenav component
class SidenavController {
  constructor($mdSidenav, $log) {
    this.mdSidenav = $mdSidenav;
    this.log = $log;
    this.log.info('Sidenav controller...');
  }
  // toggle sidenav
  toggleNav() {
    let self = this;
    this.mdSidenav('leftSideNav').toggle().then(() => {
      self.log.debug("toggle is done");
    });
  }
  // on component init
  $onInit() {
    this.log.debug('On sidenav component init...');
  }
  // post link
  $postLink() {
    this.log.debug('On sidenav postLink...');
  }
  // alternative to watch changes
  $onChanges(changesObj) {
    this.log.debug(changesObj);
  }
}
SidenavController.$inject = ['$mdSidenav','$log'];

// navbar component
// options for md-sidenav:
// md-is-locked-open="$mdMedia('gt-md')" md-disable-backdrop="true" md-is-open="sidenav.isOpen"
let sidenavComponent = {
  template:
    `<md-sidenav md-component-id="leftSideNav" class="md-sidenav-left" md-whiteframe="4">
      <md-toolbar md-whiteframe="3" class="md-accent">
        <div class="md-toolbar-tools">
          <h1 class="md-toolbar-tools">Menu</h1>
          <span flex></span>
          <md-button class="md-icon-button" aria-label="More" ng-click="sidenav.toggleNav()">
            <ng-md-icon icon="close"></ng-md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <md-content>
        <md-list flex>

          <md-list-item ng-click="null">
            <ng-md-icon icon="settings"></ng-md-icon>
            <p>Settings</p>
          </md-list-item>
          <md-divider></md-divider>

          <md-list-item ng-click="null">
            <ng-md-icon icon="logout"></ng-md-icon>
            <p>Logout</p>
          </md-list-item>
          <md-divider></md-divider>

        </md-list>
      </md-content>
    </md-sidenav>`,
  controller: 'SidenavController',
  controllerAs: 'sidenav'
};

let sidenav = angular.module('sidenav', [])
  .controller('SidenavController', SidenavController)
  .component('sidenav', sidenavComponent);

export default sidenav;