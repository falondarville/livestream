function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();

	$('.g-signin2').attr('style', 'display: none');
	$('#data').removeClass('d-none');
}

