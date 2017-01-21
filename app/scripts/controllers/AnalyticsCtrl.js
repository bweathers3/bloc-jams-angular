(function () {
    function AnalyticsCtrl($scope, Metric, SongPlayer) {
        this.songs = Metric.listSongsPlayed();
        console.log(this.songs);
        console.log("return data from metric");
        
        $scope.songsOptions = {
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
                    axisLabel: 'Albums'
                },
                yAxis: {
                    axisLabel: 'Number of Plays',
                    axisLabelDistance: 30
                }
            }
        }
        /*
        // ***********************
            
        var values = [];
        var graphSongData = [];
        
        angular.forEach(this.songs, function(value,key) {
            values.push({'label' : key, 'value' : value});
        });
            
        $scope.graphSongData = values;
            console.log("$scope data load");
            console.log($scope.graphSongData);
              
        // ***********************
        */
            
        var values = [];
         
        angular.forEach(this.songs, function(value,key) {
            values.push({'label' : key, 'value' : value});
        });
        
        $scope.exampleData = [{
            key: "Cumulative Return",
            values: values
        }];
        
        
            console.log("$scope data load");
            console.log($scope.graphSongData);
              
        
        
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', [ '$scope', 'Metric', 'SongPlayer', AnalyticsCtrl]);
})();