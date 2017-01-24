(function () {
    function AnalyticsCtrl($scope, $rootScope, Metric, SongPlayer) {
        this.songs = Metric.listSongsPlayed();
        this.songDates = $rootScope.songDates
        
        $scope.songsBarGraphOptions = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Songs'
                },
                yAxis: {
                    axisLabel: 'Number of Plays',
                    axisLabelDistance: 30
                }
            }
        }
        
        $scope.cumulativeData = [{
            key: "Cumulative Return",
            values: this.songs
        }];
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', [ '$scope', '$rootScope', 'Metric', 'SongPlayer', AnalyticsCtrl]);
})();