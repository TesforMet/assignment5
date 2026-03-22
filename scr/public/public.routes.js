.state('public.signup', {
  url: '/signup',
  templateUrl: 'src/public/signup/signup.html',
  controller: 'SignupController',
  controllerAs: 'signupCtrl'
})
.state('public.myinfo', {
  url: '/myinfo',
  templateUrl: 'src/public/myinfo/my-info.html',
  controller: 'MyInfoController',
  controllerAs: 'myInfoCtrl'
});
