(function() {
    function Metric($rootScope) {
        //$rootScope.songPlays = [];
        $rootScope.songTitles = [];
            
        return {
        
            // Function that records a metric object by pushing it to the $rootScope array
            registerSongPlay: function(songObj, index) {
                
                // Add time to event register
                //songObj['playedAt'] = new Date();
                //$rootScope.songPlays.push(songObj);
                $rootScope.songTitles.push(songObj.title);
                
            },
            
             
            listSongsPlayed: function() {
                var songs = [];
                var data = {};
                angular.forEach($rootScope.songTitles, function(song) {
                    if (songs.indexOf(song) == -1) {
                        songs.push(song);
                        data[song] = 1;  
                    }else{
                        data[song] += 1;
                    }; 
                });
                return data;
            }    
        }; 
    }

    angular
        .module('blocJams')
        .service('Metric', ['$rootScope', Metric]);
})();

