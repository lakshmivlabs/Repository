app.config(function($routeProvider, $locationProvider,RES_APP_CONFIG) {
    $routeProvider
            .when('/agenda', {
                controller: 'AgendaController',
                templateUrl: RES_APP_CONFIG.agendaUrl,
                
            })

            .when('/communication', {
                controller: 'CommunicationController',
                templateUrl: RES_APP_CONFIG.commUrl,
               
            })

           
         
           
            

            .otherwise({ redirectTo: '/agenda' });
    
        
});

