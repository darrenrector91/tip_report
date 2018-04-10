app.service('TableService', ['$http', '$location', function ($http, $location, $ngTable) {
    let self = this;
    let data = [{
        name: "Moroni",
        age: 50
    } /*,*/ ];

    self.tableParams = function () {

    }

    self.tableParams = new NgTableParams({}, {
        dataset: data
    });

}]);