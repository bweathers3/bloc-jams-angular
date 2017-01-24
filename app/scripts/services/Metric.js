(function() {
    function Metric($rootScope) {
        $rootScope.songTitles = [];
        $rootScope.songDates = [];
        
        return {
        
            registerSongPlay: function(songObj, index) {
                data = {};
                songObj['playedAt'] = new Date();
                songObj.playedAt = moment(songObj.playedAt).format("dddd, MMMM Do YYYY, h:mm:ss a");    
                 
                $rootScope.songTitles.push(songObj.title);
                $rootScope.songDates.push({'title' : songObj.title, 'date' : songObj.playedAt});
  
            },
            
            listSongsPlayed: function() {
               
                var songs = [];
                var localSongsTable = [];               
                angular.forEach($rootScope.songDates, function(song) {
                    if (songs.indexOf(song.title) == -1) {
                        songs.push(song.title);
                        
                        var songInfo = {'label' : song.title, 'value' : 1, 'date' : song.date};
                        localSongsTable.push(songInfo);
                        songInfo = {};    
                    }else{
                        for ( i =0; i < localSongsTable.length; i++ ) {  
                            if (localSongsTable[i].label === song.title) {
                                localSongsTable[i].value += 1;
                                localSongsTable[i].date = song.date;
                            }
                        }
                    }; 
                }); 
                return localSongsTable;
            }            
        }; 
    }

    angular
        .module('blocJams')
        .service('Metric', ['$rootScope', Metric]);
})();
