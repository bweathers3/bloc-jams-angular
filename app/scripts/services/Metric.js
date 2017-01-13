(function() {
    function Metric($rootScope) {
        $rootScope.songPlays = [];

        return {
        
            // Function that records a metric object by pushing it to the $rootScope array
            registerSongPlay: function(songObj) {
        
                // Add time to event register
                songObj['playedAt'] = new Date();
                console.log(songObj.playedAt);
                $rootScope.songPlays.push(songObj);
            },
            
            listSongsPlayed: function() {
                var songs = [];
                 
                angular.forEach($rootScope.songPlays, function(song) {
                  songs.push($rootScope.songPlays);
                });
            return songs;
            }
        };
    }

    angular
        .module('blocJams')
        .factory('Metric', ['$rootScope', Metric]);
})();

