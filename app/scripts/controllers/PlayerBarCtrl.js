(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
    }
 
    /**
    * @desc custom event using the Buzz libary getTime method to return the current time of the song playing to the rootScope
    * @type {Object}
    
    currentBuzzObject.bind('timeupdate', function() {
        $scope.$apply(function() {
            SongPlayer.currentTime = currentBuzzObject.getTime();
        });
    });
            
    /*currentBuzzObject.bind('ended', function(event) {
        SongPlayer.next();
    });
    
    */
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();