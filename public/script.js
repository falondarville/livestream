function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();

	$('.g-signin2').attr('style', 'display: none');
	$.ajax({
		url:'https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key=AIzaSyDmxmFz0AMMLMxzApA2x0no3r3VZlJdeAU&limit=5'
	}).done(function(data){
		$('#data').empty();
		var videoID =  data.items[1].id.videoId;
		var videoIDurl = 'https://www.youtube.com/embed/' + videoID;
		$('#data').append('<iframe width="560" height="315" src=' + videoIDurl + ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		$('#data').append('<iframe src="https://www.youtube.com/live_chat?v=' + videoID + '&embed_domain=' + window.location.hostname + '"></iframe>');

		// $.ajax({
		// 	url: 'https://www.googleapis.com/youtube/v3/videos/?id=' + videoID + '&part=liveStreamingDetails,status,contentDetails,snippet,id&key=AIzaSyDmxmFz0AMMLMxzApA2x0no3r3VZlJdeAU'
		// }).done(function(response){
		// 	var liveChatID = response.items[0].liveStreamingDetails.activeLiveChatId
		// 	console.log(liveChatID)
		// $('#data').append('<iframe allowfullscreen="" frameborder="0" height="270" src="https://www.youtube.com/live_chat?v=' + liveChatID + '&width="480"></iframe>');
		// })
	})
}

