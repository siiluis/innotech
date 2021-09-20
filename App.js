var app = angular.module("App", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/inventario", {
    templateUrl: "inventario.htm",
    controller: "inventarioListCtrl",
  });

  $routeProvider.when("/asignar_form", {
    templateUrl: "asignar_form.htm",
    controller: "inventarioFormCtrl",
  });

  $routeProvider.when("/asignar_form/:id", {
    templateUrl: "asignar_form.htm",
    controller: "inventarioFormCtrl",
  });
});

app.controller("inventarioListCtrl", function ($scope, $http, $window) {
  $http.get("http://localhost:3000/asignaciones").then(function (response) {
    $scope.inventario = response.data;
  });

  $scope.eliminar = function (id) {
    swal({
      title: "Estas Seguro?",
      text: "Se eliminara la asignacion de la base de datos!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $http({
          method: "DELETE",
          url: "http://localhost:3000/asignaciones/" + id,
        }).then(function (response) {
          swal("Todo Bien!", "Asignacion Eliminada!", "success");
          $window.location.href = "/inventarios/#!inventario";
        });
      } else {
        swal("Eliminicacion cancelada!");
      }
    });
  };
});

app.controller(
  "inventarioFormCtrl",
  function ($scope, $http, $routeParams, $window) {
    $scope.btnText = "Guardar";
    if ($routeParams.id) {
      $scope.btnText = "Actualizar";
      $http
        .get("http://localhost:3000/asignaciones/" + $routeParams.id)
        .then(function ({ data }) {
          $scope.asignacion = data;
        });

      $scope.asignar = function () {
        $http({
          method: "PUT",
          url: "http://localhost:3000/asignaciones",
          data: $scope.asignacion,
        }).then(function (response) {
          swal("Todo Bien!", "Asignacion Actualizada!", "success");
          $window.location.href = "/inventarios/#!inventario";
        });
      };
    } else {
      $scope.asignar = function () {
        $http({
          method: "POST",
          url: "http://localhost:3000/asignaciones",
          data: $scope.asignacion,
        }).then(function (response) {
          swal("Todo Bien!", "Asignacion Guardada!", "success");
          $window.location.href = "/inventarios/#!inventario";
        });
      };
    }
  }
);
