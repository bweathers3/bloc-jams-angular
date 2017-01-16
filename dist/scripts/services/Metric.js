(function() {
    function Metric($rootScope) {
        
        var albumMetric = {
            "albums": [
                {
                    "name": "The Colors",
                    "albumCount": 0,
                    "songs": [
                        {"title": "Blue", "songCount": 0 },
                        {"title": "Green", "songCount": 0 },
                        {"title": "Red", "songCount": 0 },
                        {"title": "Pink", "songCount": 0 },
                        {"title": "Magenta", "songCount": 0 }
                    ]
                },
                {
                    "name": "The Telephone",
                    "albumCount": 0,
                    "songs": [
                        {"title": "Hello, Operator?", "songCount": 0 },
                        {"title": "Ring, ring, ring", "songCount": 0 },
                        {"title": "Fits in your pocket", "songCount": 0 },
                        {"title": "Can you hear me now?", "songCount": 0 },
                        {"title": "Wrong phone number", "songCount": 0 }
                    ]
                }
            ],
        };
        
        return {
        
            // Function that records a metric object by pushing it to the $rootScope array
            registerSongPlay: function(songObj, index) {
                
                // Add time to event register
                albumMetric.albums[0].albumCount += 1;
                albumMetric.albums[0].songs[index].songCount += 1;     
            },
            
            listSongsPlayed: function() {
                //console.log(albumMetric);
                return albumMetric;
            }
        };
    }

    angular
        .module('blocJams')
        .factory('Metric', ['$rootScope', Metric]);
})();

