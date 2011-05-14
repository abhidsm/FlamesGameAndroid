x$(window).load(function(e){
	bindFormValidation();
	bindFormSubmitAction();
    });

function bindFormValidation() {
}

function bindFormSubmitAction() {
    x$("#submit").on('click', function(e){
	    formSubmitAction();
	});
}

function formSubmitAction() {
    yourName = x$('#your_name')[0].value;
    partnerName = x$('#partner_name')[0].value;
    x$("#result").xhr('http://flamesgame.appspot.com/show', {
	    async:true,
	    method:'post',
		data: 'security=&your_name='+yourName+'&partner_name='+partnerName,
		callback: function() {
		/*var result = eval("("+this.responseText+")").flames.result;
		var status = eval("("+this.responseText+")").flames.status;
		x$('#result h3').html(result);
		resetResultClass();
		x$('#result').addClass(status);*/
		alert('asd');
	    }	
	});
}

function resetResultClass(){
    x$('#result').removeClass();
    x$('#result').addClass('center');

    //  setTimeout(function(){ x$('#load').hide();  x$('#submit').show();     $('#result').fadeIn('slow').delay(2000).fadeOut('slow'); }, 2000);

}

 