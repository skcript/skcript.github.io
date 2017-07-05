var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement, {
	"offset": 80,
  "tolerance": 0
});
headroom.init();

// ****************************************************************************

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'vertical'
});

$('.osbuttons').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// ****************************************************************************


$('.nav-toggle').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('open');
		$('.ham-container').toggleClass('nav-open');
});
$('.ham-container').click(function(e){
		e.stopPropagation();
});
$('body,html,li').click(function(e){
	 $('.nav-toggle').removeClass('open');
	 $('.ham-container').removeClass('nav-open');
});


// ****************************************************************************


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// ****************************************************************************


window.requestAnimFrame = (function () {
 return  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
   window.setTimeout(callback, 1000 / 60);
  };
})();


/*
 * basic stuff
 */
var FX = {
	config : {
		background	: '#FFFFFF',
		color		: 'rgb(250,20,75)',
		highlight	: 'rgb(250,20,20)'
	},
	dots : []
};

FX.canvas = document.getElementById('myLove');
FX.ctx = FX.canvas.getContext('2d');


/*
 * Extend Math Object
 */ 
Math.TO_RAD = Math.PI/180;

Math.getDistance = function( x1, y1, x2, y2 ) {
	
	var 	xs = 0,
		ys = 0;
	 
	xs = x1 - x2;
	ys = y1 - y2;		
	xs = xs * xs;
	ys = ys * ys;
	 
	return Math.sqrt( xs + ys );
};

Math.getDegree = function( x1, y1, x2, y2 ) {
		
	var	dx = x2 - x1,
		dy = y2 - y1;
	
	return Math.atan2(dy,dx) / Math.TO_RAD;
};



/*
 * Dot Object
 */
var Dot = function( opts ) {

	this.color = opts.color;

	this.x = 0;
	this.y = 0;
	this.dest_x = (opts.dest_x - 75);
	this.dest_y = (opts.dest_y - 75);
};

Dot.prototype.update = function() {

	var 	d = this,
		dist_x = d.dest_x - d.x,
		dist_y = d.dest_y - d.y;

	d.x += dist_x * 0.05;
	d.y += dist_y * 0.05;

	FX.ctx.fillStyle = d.color;
	FX.ctx.fillRect( d.x-2, d.y-2, 4, 4 );
};



/*
 * full screen canvas
 */
FX.setFullscreen = function() {
	FX.width = FX.canvas.width = window.innerWidth;
	FX.height = FX.canvas.height = 200;
};

/*
 * Mouse
 */
FX.handleMouseEvent = function(e, power) {

	var 	radius = 55,
		k = FX.dots.length,
		i=0,
		mx, my, 
		dist, degree,
		d;

	if(e.offsetX) {
		mx = e.offsetX;
		my = e.offsetY;
	} else if(e.layerX) {
		mx = e.layerX;
		my = e.layerY;
	}

	mx -= FX.width/2;
	my -= FX.height/2;

	for( ;i<k;i=i+1 ) {

		d = FX.dots[i];

		dist = Math.getDistance( mx, my, d.x, d.y);		

		if( dist < radius ) {

			degree = Math.getDegree( d.x, d.y, mx, my );

			d.x += (Math.cos( degree * Math.TO_RAD ) * ((radius-dist) * power));
			d.y += (Math.sin( degree * Math.TO_RAD ) * ((radius-dist) * power));

			d.color = FX.config.highlight;

		} else {
			d.color = FX.config.color;
		}
	}
};

/*
 * create the heart
 */
FX.createHeart = function() {
	var 	coords = [[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[14,4],[14,5],[14,6],[14,7],[14,8]],
		k = coords.length,
		raster = 10,
		i = 0;

	for( ;i<k;i=i+1 ) {
		FX.dots.push( new Dot({
			dest_x : coords[i][0] * raster,
			dest_y : coords[i][1] * raster,
			color: FX.config.color
		}) );
	}
};

/*
 * main loop
 */
FX.loop = function() {

	var 	ctx = FX.ctx,
		k = FX.dots.length,
		i = 0;

	ctx.fillStyle = FX.config.background;
	ctx.fillRect(0,0, FX.width, FX.height );


	ctx.save();
	ctx.translate( FX.width/2, FX.height/2 );

	for( ;i<k;i=i+1 ) {
		FX.dots[i].update();
	}

	ctx.restore();
	
	requestAnimFrame( FX.loop );
};

/*
 * Event bindings
 */
window.addEventListener('resize', FX.setFullscreen );
FX.canvas.addEventListener('mousemove', function(e) { FX.handleMouseEvent(e, -0.1); } );
FX.canvas.addEventListener('mousedown', function(e) { FX.handleMouseEvent(e, 1); } );


/*
 * Init
 */
FX.setFullscreen();
FX.createHeart();
FX.loop();