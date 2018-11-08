angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.personalTrainingEnquiry', {
    url: '/personal-training-enquiry',
    views: {
      'tab1': {
        templateUrl: 'templates/personalTrainingEnquiry.html',
        controller: 'personalTrainingEnquiryCtrl'
      }
    }
  })

  .state('profile', {
    url: '/profile',
    
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
  })

  .state('tabsController.privacyPolicy', {
    url: '/privacy-policy',
    views: {
      'tab3': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  .state('mainPage', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })


$urlRouterProvider.otherwise('/home')


});