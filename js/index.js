var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		var Puship = window.plugins.puship;
		Puship.EnableLog = true;
		Puship.PushipAppId = 'bHJmPjTf5cKYL40'; 
		if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
			var GCMCode = '1099359818479'; 
			Puship.GCM.Register(GCMCode,
			{
				successCallback: function (pushipresult){
				},
				failCallback: function (pushipresult){
				}
			});
		} else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
			Puship.APNS.Register(
			{
				successCallback: function (pushipresult){
				},
				failCallback: function (pushipresult){
				}
			});
		} else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
			Puship.WP.Register(
			{
				successCallback: function (pushipresult){
				},
				failCallback: function (pushipresult){
				}
			});
		} else {
			Console.log("Not supported platform");
		}
		
    }
};
