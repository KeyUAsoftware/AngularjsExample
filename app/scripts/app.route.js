
function RouteConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/list');

  // Define the routes
  $stateProvider

    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      title: 'Sign in',
      controller: 'ListCtrl as lctrl',
    })

    .state('info', {
      url: '/info/:id',
      templateUrl: 'views/info.html',
      controller: 'InfoCtrl as infctrl',
    });

}

export default RouteConfig;