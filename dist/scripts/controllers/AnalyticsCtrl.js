(function () {
    function AnalyticsCtrl(Metric, SongPlayer) {
        this.albumMetric = Metric.listSongsPlayed();
        console.log(this.albumMetric);
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Metric', 'SongPlayer', AnalyticsCtrl]);
    
})();