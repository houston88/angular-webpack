// sidenav component
class SidenavController {
  constructor($log) {
    this.log = $log;
    this.log.info('Sidenav controller...');
    this.isOpen = false;
  }
  // toggle sidenav
  toggleNav() {
    this.isOpen = !this.isOpen;
    // update parent component
    this.onClose();
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

// navbar component
// options for md-sidenav:
// md-is-locked-open="$mdMedia('gt-md')" md-disable-backdrop="true"
let sidenavComponent = {
  template:
    `<md-sidenav md-component-id="leftSideNav" class="md-sidenav-left" md-is-open="sidenav.isOpen"
       md-whiteframe="4">
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
  controllerAs: 'sidenav',
  bindings: {
    isOpen: '<',
    onClose: '&'
  }
};

let sidenav = angular.module('sidenav', [])
  .controller('SidenavController', SidenavController)
  .component('sidenav', sidenavComponent);

export default sidenav;