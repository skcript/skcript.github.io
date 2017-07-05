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

$(".nav-toggle").click(function(o){o.stopPropagation(),$(this).toggleClass("open"),$(".ham-container").toggleClass("nav-open")}),$(".ham-container").click(function(o){o.stopPropagation()}),$("body,html,li").click(function(o){$(".nav-toggle").removeClass("open"),$(".ham-container").removeClass("nav-open")});

// ****************************************************************************

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}});

// ****************************************************************************

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var FX={config:{background:"#FCFCFC",color:"rgb(250,20,75)",highlight:"rgb(250,20,20)"},dots:[]};FX.canvas=document.getElementById("myLove"),FX.ctx=FX.canvas.getContext("2d"),Math.TO_RAD=Math.PI/180,Math.getDistance=function(t,e,n,o){var i=0,a=0;return i=t-n,a=e-o,i*=i,a*=a,Math.sqrt(i+a)},Math.getDegree=function(t,e,n,o){var i=n-t,a=o-e;return Math.atan2(a,i)/Math.TO_RAD};var Dot=function(t){this.color=t.color,this.x=0,this.y=0,this.dest_x=t.dest_x-75,this.dest_y=t.dest_y-75};Dot.prototype.update=function(){var t=this,e=t.dest_x-t.x,n=t.dest_y-t.y;t.x+=.05*e,t.y+=.05*n,FX.ctx.fillStyle=t.color,FX.ctx.fillRect(t.x-2,t.y-2,4,4)},FX.setFullscreen=function(){FX.width=FX.canvas.width=window.innerWidth,FX.height=FX.canvas.height=200},FX.handleMouseEvent=function(t,e){var n,o,i,a,r,s=FX.dots.length,F=0;for(t.offsetX?(n=t.offsetX,o=t.offsetY):t.layerX&&(n=t.layerX,o=t.layerY),n-=FX.width/2,o-=FX.height/2;F<s;F+=1)r=FX.dots[F],(i=Math.getDistance(n,o,r.x,r.y))<55?(a=Math.getDegree(r.x,r.y,n,o),r.x+=Math.cos(a*Math.TO_RAD)*((55-i)*e),r.y+=Math.sin(a*Math.TO_RAD)*((55-i)*e),r.color=FX.config.highlight):r.color=FX.config.color},FX.createHeart=function(){for(var t=[[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[14,4],[14,5],[14,6],[14,7],[14,8]],e=t.length,n=0;n<e;n+=1)FX.dots.push(new Dot({dest_x:10*t[n][0],dest_y:10*t[n][1],color:FX.config.color}))},FX.loop=function(){var t=FX.ctx,e=FX.dots.length,n=0;for(t.fillStyle=FX.config.background,t.fillRect(0,0,FX.width,FX.height),t.save(),t.translate(FX.width/2,FX.height/2);n<e;n+=1)FX.dots[n].update();t.restore(),requestAnimFrame(FX.loop)},window.addEventListener("resize",FX.setFullscreen),FX.canvas.addEventListener("mousemove",function(t){FX.handleMouseEvent(t,-.1)}),FX.canvas.addEventListener("mousedown",function(t){FX.handleMouseEvent(t,1)}),FX.setFullscreen(),FX.createHeart(),FX.loop();