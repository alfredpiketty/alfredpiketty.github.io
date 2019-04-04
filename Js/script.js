var pswpElement = $('.pswp')[0];

var items_3d = [
		{
			src: 'Image/3d/3d_1.jpg',
			w: 1536,
			h: 864
		},
		{
			src: 'Image/3d/3d_2.png',
			w: 1536,
			h: 864
		},

];

var items_illu = [
	{
    src: 'Image/illu/illu1.png',
        w: 1536 ,
        h: 864
	},
	{
	src: 'Image/illu/illu2.png',
	 		w: 1536 ,
			h: 864
	},
	{
		src: 'Image/illu/illu3.png',
		w: 1536 ,
		h: 864
	},
];


var options = {
  index: 0
};

	// Initializes and opens PhotoSwipe
var openPhotoSwipe = function(list) {
	var _list;

	if (list == 'illu') {
		_list = items_illu;
	} else if (list == '3d') {
		_list = items_3d;
	}

	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, _list, options);
	gallery.init();
};

$('#3d').click(function() {
	openPhotoSwipe('3d')
});

$('#thumb').click(function() {
	openPhotoSwipe('illu');
});

console.log('its working');


//scroll effect

$('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 700);
    // e.preventDefault();
});
