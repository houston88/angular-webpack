import home from './home';

describe('home', () => {

  describe('HomeCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.randomVar).toBe('Hello there...');
    });
  });
});