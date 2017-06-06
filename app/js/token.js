$(document).ready(function() {

  web3.eth.getAccounts(function(err, accounts) {
    $('#queryBalance input').val();
  });

  $('#tokenAddy button').click(function() {
	Token.balanceOf(0x1418AB7673625CB50Fd8A35Df91635a94fdF4bC9).then(function(balance){
		balance = balance - 580;
		$('#tokenAddy .results').html(balance.toString());
  	});
  	var address = ICO.address;
  	$('#tokenAddy .addy').html(address);
  	//$('#tokenAddy .qrLink').html();
  	document.getElementById('qrLink').src = "https://chart.googleapis.com/chart?cht=qr&chl="+ address +"&chs=180x180&choe=UTF-8&chld=L|2";
	// var qrcode = new QRCode("qrcode");

	// function makeCode (elText) {
	    
	//     if (!elText) {
	//         alert("Input a text");
	//         elText.focus();
	//         return;
	//     }
	    
	//     qrcode.makeCode(elText);
	// }

	// makeCode("http://www.aaronjaramillo.org");

  });

  $('#queryBalance button').click(function() {
    var address = $('#queryBalance input').val();
    Token.balanceOf(address).then(function(balance) {
      $('#queryBalance .result').html(balance.toString());
    });

  });

  $('#transfer button').click(function() {
    var address = $('#transfer .address').val();
    var num = $('#transfer .num').val();
    Token.transfer(address, num).then(function() {
      $('#transfer .result').html('Sent!');
    });;
  });

});