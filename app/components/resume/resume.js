(function(){
    
    angular.module('myResume')
        .component('resume', {
            templateUrl: 'app/components/resume/resume.html',
            controller: ResumeController
        })
        
         function ResumeController(){
         	var rc = this;
        }
}())