var chooseRandom 	= $('.button');
	artList			= $('#artist');

chooseRandom.click(function(e) {
	 e.preventDefault();
	 artList.children().remove();
	
	console.log("CLICKED");

	$.getJSON('assets/js/art.json',function(data) 
		{
  			var item = data[Math.floor(Math.random()*data.length)];
  			
  			//Big thanks to Tom Blanchard on this section of code. Made it neater as an array. Thanks Tom
  			
  			artList.append(
			  [
			    '<li>',
			      '<a href="' + item.url + '">',
			        '<img src="assets/images/headphones-icon.png" class="headphones pulse" target="_blank" />',
			        '<div>',
			          '<h3>' + item.album + '</h3>',
			          '<h2>' + 'By ' + item.artist + '</h2>',
			          '<p>' + item.message + '</p>',
			        '</div>',
			      '</a>',
			    '</li>'
			  ].join('')
			);
  			console.log("You have been recommended " + item.artist);
		}
	);

})






