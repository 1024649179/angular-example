app.factory('feedFactory', function($http) {
    return {
        getFeed: $http.get('http://localhost:3000/api/feed')
    };
});
