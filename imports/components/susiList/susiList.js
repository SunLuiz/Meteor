import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';

import template from './susiList.html';
 
class susiListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      tasks() {
        return Tasks.find({});
      }
    })
  }
}/*
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}*/
 
export default angular.module('susiList', [
  angularMeteor
])
  .component('susiList', {
    templateUrl: 'imports/components/susiList/susiList.html',
    controller: ['$scope', TodosListCtrl]
  });