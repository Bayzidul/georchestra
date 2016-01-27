"use strict";
angular.module('admin_console', [
  'ngResource',
  'ngNewRouter',
  'angular-chosen',
  'pascalprecht.translate'
]).controller('AppController', [
  '$router', AppController
]).constant('LDAP_BASE_URI', '/ldapadmin/private/')
.config(['$translateProvider', function ($translateProvider) {
  $translateProvider
  .translations('en', {
    // TABS
    'tab.infos'     : 'Infos',
    'tab.groups'    : 'Groups',
    'tab.analytics' : 'Analytics',
    'tab.messages'  : 'Messages',
    'tab.logs'      : 'Logs',
    'tab.manage'    : 'Manage',
    // USER
    'msg.date'        : 'Date',
    'msg.subject'     : 'Subject',
    'msg.sender'      : 'Sender',
    'msg.messages'    : 'Messages',
    'msg.on'          : 'on',
    'msg.attachments' : 'Attachments',
  }).preferredLanguage('en').useSanitizeValueStrategy('escape');
}]);

require('./components/users/users');
require('./components/groups/groups');
require('./components/user/user');
require('./components/home/home');
require('./services/groups');
require('./services/users');

function AppController($router) {
  $router.config([
    { path: '/'                 , redirectTo: '/home' },
    { path: '/home'             , component: 'home' },
    { path: '/groups/:id/users' , component: 'users' },
    { path: '/users/:id/:tab'   , component: 'user' },
  ]);
}
