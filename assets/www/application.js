x$(window).load(function(e){
	            bindFormSubmitAction();
                });

function bindFormSubmitAction() {
    x$("#submit").on('click', function(e){
	                 formSubmitAction(e);
	             });
}

function formSubmitAction(e) {
    e.preventDefault();
    navigator.notification.vibrate(100);// For vibration
    yourName = x$('#your_name')[0].value;
    partnerName = x$('#partner_name')[0].value;
    if(checkInternectConnection()){
        if(yourName != "" && partnerName != "") { 
	    x$('#submit').setStyle('display', 'none');	
	    navigator.notification.activityStart(); 
	    var params = 'source=android&security=&your_name='+yourName+'&partner_name='+partnerName;
	    sendRequestToFlamesGameAPI(params);
        } 
    }else {
        alert("Please connect to internet and try!");
    }
}

function checkInternectConnection(){
    var networkState = navigator.network.connection.type; 
    return (networkState != Connection.UNKNOWN && networkState != Connection.NONE);
}

function sendRequestToFlamesGameAPI(params){
    x$("#result").xhr('http://flamesgame.appspot.com/show', {
		          async:true,
		          method:'post',
		          data: params,
		          callback: function() {
		              returnData = this.responseText;
		              var result = eval("("+returnData+")").flames.result;
		              var status = eval("("+returnData+")").flames.status;
		              x$('#result h3').html(result);
		              resetResultClass();
		              x$('#result').addClass(status);
		          }	
	              });
}

function resetResultClass(){
    navigator.notification.activityStop(); 	
    x$('#result').removeClass();
    x$('#result').addClass('center');
    x$('#result').setStyle('display', 'block');
    x$('#result').tween({opacity:'1', duration:2000});
    x$('#result').tween({opacity:'0', duration:3000}, function(){
	                    x$('#result').setStyle('display', 'none');
	                    x$('#result').setStyle('opacity', '1');
	                    x$('#submit').setStyle('display', 'inline');
	                });
}


