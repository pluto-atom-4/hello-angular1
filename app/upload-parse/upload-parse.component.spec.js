'use strict';

describe('Component: myApp.uploadParseModule', function () {
  beforeEach(module('myApp.uploadParseModule'));

  var element;
  var $scope;
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $scope = _$rootScope_;
    element = angular.element('<upload-parse my-binding="{{outside}}"></upload-parse>');
    element = _$compile_(element)($scope);
    $scope.outside = '1.5';
    $scope.$apply();
  }));

  it('should render the text', function () {
    var h1 = element.find('h1');
    expect(h1).toBeDefined();
    expect(h1.text()).toBe('Unit Testing AngularJS 1.5');
  });

  it('should render the div', function () {
    var div = element.find('div');
    expect(div.text()).toBe('test');
  });

  it('should render the div', function () {
    var div = element.find('button');
    expect(div.text()).toBe('select csv');
  });
});