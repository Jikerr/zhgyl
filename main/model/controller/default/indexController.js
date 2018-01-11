/**
 * Created by MACHENIKE on 2018/1/11.
 */
angular.module('app', []).controller('indexController', function($scope) {
    $('#mycalendar').monthly({
        mode: 'event',
    });

    $('#mycalendar2').monthly({
        mode: 'picker',
        target: '#mytarget',
        setWidth: '250px',
        startHidden: true,
        showTrigger: '#mytarget',
        stylePast: true,
        disablePast: true
    });
});