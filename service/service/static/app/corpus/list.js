app.controller("ListCorpusCtrl", function ($scope, Corpus, STATUSES, QUALITIES, $stateParams, $state) {
    $scope.STATUSES = STATUSES;
    $scope.QUALITIES = QUALITIES;
    console.log($stateParams);
    $scope.status = $stateParams.status ? $stateParams.status : 'ALL';
    $scope.quality = $stateParams.quality ? $stateParams.quality : 'ALL';
    var query = {};
    if ($scope.status != "ALL") {
        query["status"] = $scope.status;
    }
    if ($scope.quality != "ALL") {
        query["quality"] = $scope.quality;
    }
    Corpus.query(query).then(function (data) {
        $scope.corpora = data;
    });

    $scope.updateStatus = function (value) {
        $scope.status = value;
    };

    $scope.updateQuality = function (value) {
        $scope.quality = value;
    };

    $scope.delete = function (corpusId) {
        Corpus.delete({id: corpusId}).$promise.then(function () {
            $state.reload();
        })

    }
});