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
		src: 'Image/illu/illu3.4.png',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu3.5.png',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu3.png',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu4.png',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu5.png',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu6.jpg',
		w: 1536 ,
		h: 864
	},
	{
		src: 'Image/illu/illu8.jpg',
		w: 1000 ,
		h: 1000
	},
	{
		src: 'Image/illu/illu9.jpg',
		w: 1000 ,
		h: 1000
	},
	{
		src: 'Image/illu/illu10.jpg',
		w: 1000 ,
		h: 1000
	},
	{
		src: 'Image/illu/illu11.png',
		w: 1224 ,
		h: 1632
	},
	{
		src: 'Image/illu/illu13.png',
		w: 1324 ,
		h: 1757
	},
	{
		src: 'Image/illu/illu14.jpg',
		w: 1513 ,
		h: 1039
	},
	{
		src: 'Image/illu/illu15.jpg',
		w: 1240 ,
		h: 1754
	},
	{
		src: 'Image/illu/illu16.png',
		w: 1664 ,
		h: 2338
	},
	{
		src: 'Image/illu/illu17.jpg',
		w: 1664 ,
		h: 2338
	},
];
var items_go_n = [
		{
			src: 'Image/go_n/go_n1.png',
			w: 1536,
			h: 864
		},
		{
			src: 'Image/go_n/go_n2.png',
			w: 1000,
			h: 1000
		},
		{
			src: 'Image/go_n/go_n3.jpg',
			w: 438,
			h: 310
		},
		{
			src: 'Image/go_n/go_n4.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n5.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n6.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n7.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n8.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n9.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n10.jpg',
			w: 1754,
			h: 1240
		},
		{
			src: 'Image/go_n/go_n11.jpg',
			w: 1754,
			h: 1240
		},

];
var items_layout = [
		{
			src: 'Image/layout/lay1.png',
			w: 1536,
			h: 864
		},
		{
			src: 'Image/layout/lay2.png',
			w: 1536,
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
	} else if (list == 'go_n') {
		_list = items_go_n;
	} else if (list == 'layout') {
		_list = items_layout;
	}

	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, _list, options);
	gallery.init();
};

$('#3d').click(function() {
	openPhotoSwipe('3d')
});

$('#illu').click(function() {
	openPhotoSwipe('illu');
});

$('#go_n').click(function() {
	openPhotoSwipe('go_n');
});

$('#lay').click(function() {
	openPhotoSwipe('layout');
});


console.log('its working');


//scroll effect

$('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 700);
    // e.preventDefault();
});
