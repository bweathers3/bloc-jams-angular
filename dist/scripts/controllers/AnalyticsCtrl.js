(function () {
    function AnalyticsCtrl(Metric, SongPlayer) {
        this.songs = Metric.listSongsPlayed();
        console.log(this.songs);
        
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Metric', 'SongPlayer', AnalyticsCtrl]);
    
})();