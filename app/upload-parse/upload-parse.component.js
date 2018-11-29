'use strict';

function UploadParseController($scope, Papa) {
  var vm = this;
  vm.parsedJson = {conferences: []};
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


angular.module('myApp.upload-parse', [
  'ngFileUpload',
  'papa-promise',
])

  .component('uploadParse', {
    templateUrl: 'upload-parse/upload-parse.html',
    controller: UploadParseController,
    controllerAs: 'vm'
  });
