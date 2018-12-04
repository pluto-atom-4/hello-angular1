'use strict';

function UploadParseController($scope, Papa) {
  var vm = this;
  vm.parsedJson = {conferences: []};
  vm.myTitle = 'Unit Testing AngularJS';

  $scope.parseFile = function (file) {
    console.info(file);

    function handleParseResult(result) {
      console.log("Result:", result);
    }

    function handleParseError(result) {
      console.error("Something goes wrongly... ", result)
    }

    function parsingFinished() {
      console.log("parsedJson:", vm.parsedJson);
    }

    var papa = Papa.parse(file, {
      header: true,
      step: function (row) {
        console.log("Row:", row.data);
        vm.parsedJson.conferences.push(row.data);
      },
      error: function () {
        console.error("something goes wrong");
      }
    });
    papa.then(handleParseResult)
      .catch(handleParseError)
      .finally(parsingFinished);
  };
}


angular.module('myApp.uploadParseModule', [
  'ngFileUpload',
  'papa-promise',
])

  .component('uploadParse', {
    bindings: {
      myBinding: '@'
    },
    controller: UploadParseController,
    controllerAs: 'vm',
    template: '<h1>{{ vm.myTitle }} {{ vm.myBinding}}</h1> ' +
      '<div name="test">test</div> ' +
      '<li>test2</li> ' +
      '<button ngf-select ng-model="file" ngf-change="parseFile(file)">select csv</button>'
  });
