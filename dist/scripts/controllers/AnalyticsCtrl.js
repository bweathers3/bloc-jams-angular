(function () {
    function AnalyticsCtrl(Metric, SongPlayer) {
        this.ablums = Metric.listSongsPlayed();
        console.log(this.albums);
        
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Metric', 'SongPlayer', AnalyticsCtrl]);
    
})();