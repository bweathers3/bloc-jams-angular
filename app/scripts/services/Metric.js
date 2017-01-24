(function() {
    function Metric($rootScope) {
        $rootScope.songTitles = [];
        $rootScope.songDates = [];

        return {
        
            registerSongPlay: function(songObj, index) {
                
                songObj['playedAt'] = new Date();
                songObj.playedAt = moment(songObj.playedAt).format("dddd, MMMM Do YYYY, h:mm:ss a");    
              
                $rootScope.songDates.push(songObj);
                $rootScope.songTitles.push(songObj.title);
            },
            
            listSongsPlayed: function() {
                var songs = [];
                var localData = {};
                angular.forEach($rootScope.songTitles, function(song) {
                    if (songs.indexOf(song) == -1) {
                        songs.push(song);
                        localData[song] = 1;  
                    }else{
                        localData[song] += 1;
                    }; 
                });
                return localData;
            }             
            
        }; 
    }

    angular
        .module('blocJams')
        .service('Metric', ['$rootScope', Metric]);
})();
