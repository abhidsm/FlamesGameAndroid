x$(window).load(function(e){
	bindFormSubmitAction();
    });

function bindFormSubmitAction() {
    x$("#submit").on('click', function(e){
	    formSubmitAction();
	});
}

function formSubmitAction() {
    yourName = x$('#your_name')[0].value;
    partnerName = x$('#partner_name')[0].value;
    if(yourName != "" && partnerName != "") { 
	x$('#submit').fade('out');
	var params = 'security=&your_name='+yourName+'&partner_name='+partnerName;
	x$("#result").xhr('http://flamesgame.appspot.com/show', {
		async:true,
		    method:'post',
		    data: params,
		    callback: function() {
		    returnData = this.responseText;
		    var result = eval(returnData).flames.result;
		    var status = eval(returnData).flames.status;
		    x$('#result h3').html(result);
		    resetResultClass();
		    x$('#result').addClass(status);
		}	
	    });
    }
}

function resetResultClass(){
    x$('#result').removeClass();
    x$('#result').addClass('center');
    x$('#result').setStyle('display', 'block');
    x$('#result').tween({opacity:'1', duration:2000});
    x$('#result').tween({opacity:'0', duration:2000}, function(){
	    x$('#result').setStyle('display', 'none');
	    x$('#result').setStyle('opacity', '1');
	    x$('#submit').fade('in');
	});
}

 