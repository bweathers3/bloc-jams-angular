
(function() {
    /**
    * @function SongPlayer
    * @desc loads Album data 
    * @param {Object} Fixtures - Album data
    */
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};    
        var currentAlbum = Fixtures.getAlbum();
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                stopSong(SongPlayer.currentSong);
            }
            
            /**
            * @desc Buzz object audio file
            * @type {Object}
            */
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            /**
            * @desc custom event using the Buzz libary getTime method to return the current time of the song playing to the rootScope
            * @type {Object}
            */
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                SongPlayer.currentTime = currentBuzzObject.getTime();
                 });
            });

            SongPlayer.currentSong = song;
        };
        
        /**
        * @function playSong
        * @desc Sets the new playing song and sets song.playing status to true
        * @param {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        /**
        * @function stopSong
        * @desc Stops the playing song and sets song.playing status to null
        * @param {Object} song
        */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = false;
        };
        
        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        /**
        * @function getSongIndex
        * @desc returns song index
        * @param {Object} song
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        }
        
        /**
        * @desc Active album object
        * @type {Object}
        */
        SongPlayer.currentAlbum = Fixtures.getAlbum();
        
        /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
        SongPlayer.currentSong = null;
        
        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;
        
        /**
        * @desc set intial value of song volume to 40%
        * @type {Number}
        */
        SongPlayer.volume = 25;
        
        /**
        * @desc volume muted or not.
        * @type {boolean}
        */
        SongPlayer.volumeMuted = false;
 
        
        /**
        * @function SongPlayer.play
        * @desc Resets the song by calling setSong and playSong functions
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            } 
        };
        
        /**
        * @function SongPlayer.pause
        * @desc Pauses the current playing song and changes song.playing to false
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        /**
        * @function SongPlayer.previous
        * @desc returns current song index then backs the index up one index
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
         /**
        * @function SongPlayer.next
        * @desc returns current song index then steps the index forward one index
        */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex > currentAlbum.songs.length) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        /**
        * @function setVolume
        * @desc Set volume of playing song
        * @param {Number} newValue
        */
        SongPlayer.setVolume = function(newValue) {
            if (currentBuzzObject) {
                currentBuzzObject.setVolume(newValue);
            }
        };
 
        /**
        * @function muteVolume
        * @desc Mutes/umutes the volume on click
        * @param {Object}
        */
        SongPlayer.muteVolume = function() {
            if (currentBuzzObject) {
                if (currentBuzzObject.isMuted()) {
                    currentBuzzObject.unmute();
                    SongPlayer.volumeMuted = false;
                } else {
                    currentBuzzObject.mute();
                    SongPlayer.volumeMuted = true;
                }
            }
         };
         
        
        return SongPlayer;
    }
 
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();