app.controller('HeaderController',function($scope,$location){
    console.log("headerrrrrrrrrrrr");
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.showagenda=function(){
        console.log("$$$$$$$$$$$$$$$$$$$");
		$location.path('/agenda');
	}
    
})  

app.controller('AgendaController', function ($scope) {
    console.log("agenda");
    //$scope.agenda.days = "";
   
    
    $scope.agenda = {agendaList :[]};
    
    function startChange() {
        
        console.log("changeeeeeeeeeeeeeeeeee");
                        var startTime = start.value();

                        if (startTime) {
                            startTime = new Date(startTime);

                            end.max(startTime);

                            startTime.setMinutes(startTime.getMinutes() + this.options.interval);

                            end.min(startTime);
                            end.value(startTime);
                        }
                    }
                    
                    
    /*testttttttttt*/
     $scope.noOfDaysChange = function () {
            var newval = $scope.agenda.noOfDays;
            if ($scope.agenda.agendaList === undefined) {
                var oldval = 0;
                $scope.agenda.agendaList = [];
                $scope.agenda.scheduleList = [];
            } else {
                var oldval = $scope.agenda.agendaList.length;
            }
            if (newval === undefined) {
                $scope.agenda.agendaList = [];
//                newval = parseInt(0);
                return false;
            } else if (newval !== null) {

                newval = (newval === '') ? 0 : parseInt(newval);

                oldval = ((oldval === null) || (oldval === undefined) || (oldval === '')) ? 0 : parseInt(oldval);

                if (oldval < newval) {
                    for (var i = oldval; i < newval; i++) {
                        var subject = {date:"",noOfSchedules:"",scheduleList:[]};
                        $scope.agenda.agendaList.push(subject);
                    }
                } else {
//                    $scope.agenda.agendaList.length;
                    for (var i = oldval; i >= newval; i--) {
                        $scope.agenda.agendaList.splice(i, 1);
                    }
                }
            }
        };
        $scope.noOfSchedulesChange = function (list,noOfSchedules) {

         var newval = $scope.agenda.agendaList[list].noOfSchedules;
       var newval = noOfSchedules;
         
         //console.log(newval);
            if ($scope.agenda.agendaList[list].scheduleList === undefined) {
                var oldval = 0;
                $scope.agenda.scheduleList = [];
            } else {
                var oldval = $scope.agenda.agendaList[list].scheduleList.length;
            }
            if (newval === undefined) {
                $scope.agenda.agendaList[list].scheduleList = [];
//                newval = parseInt(0);
                return false;
            } else if (newval !== null) {

                newval = (newval === '') ? 0 : parseInt(newval);

                oldval = ((oldval === null) || (oldval === undefined) || (oldval === '')) ? 0 : parseInt(oldval);
//console.log("oldval"+oldval+"newval"+newval);
                if (oldval < newval) {
                    for (var i = oldval; i < newval; i++) {
                        var subject = {place: "",description:"",stime:"",etime:""};
                        $scope.agenda.agendaList[list].scheduleList.push(subject);
                    }
                } else {
//                    $scope.agenda.agendaList.length;
                    for (var i = oldval; i >= newval; i--) {
                        $scope.agenda.agendaList[list].scheduleList.splice(i, 1);
                    }
                }
                

               
            }
            
            
        }
        $(':input[data-kendoTimePicker=true]').kendoTimePicker({ change: startChange
                    }).data("kendoTimePicker");
       // $("#timepicker").kendoTimePicker();
        //_timeview
        
        $scope.starttime =  function(agendaid,scheduleid)
        {
            console.log("@@@@@@@@@"+agendaid+"************"+scheduleid);
            
        }
        

})

