(function () {
    function AnalyticsCtrl(Metric, SongPlayer) {
        this.songs = Metric.listSongsPlayed();
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Metric', 'SongPlayer', AnalyticsCtrl]);
    
})();