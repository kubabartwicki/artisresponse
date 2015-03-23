var Site = {
	init: function() {
		// draw lines
		respond();
		$(window).resize(function() { respond(); });
		
		function draw(source, target){

			var brush = new Image();
			brush.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';

			var canvas = document.getElementById('canvas');
			var canvasHtml = $('#canvas');
			var ctx = canvas.getContext('2d');
			
			var offsetSource = source.offset();
			var x1 = canvasHtml.width()/2;
			var y1 = offsetSource.top + source.height() + 20; 
			
			var offsetTarget = target.offset();
			var x2 = canvasHtml.width()/2;
			var y2 = offsetTarget.top - 20;
			
			var width = $(canvas).parent().width();
			
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);	
			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 5;
  			ctx.lineJoin = ctx.lineCap = 'round';
			ctx.stroke();
		}

		function drawAngular(source, target){
			var canvas = document.getElementById('canvas');
			var canvasHtml = $('#canvas');
			var ctx = canvas.getContext('2d');
			
			var offsetSource = source.offset();
			var offsetTarget = target.offset();
			var x1,
				y1,
				x2,
				y2;

			if ( source.hasClass('timeline-third-element') && target.hasClass('timeline-fourth-element') ) {
				
				x1 = canvasHtml.width()/2 - 40;
				y1 = offsetSource.top + source.height()/2 - 60; 
				x2 = target.width()/2;
				y2 = offsetTarget.top - 20;

			} else if ( source.hasClass('timeline-third-element') && target.hasClass('timeline-fifth-element') ) {
				
				x1 = source.width()/2 + 40;
				y1 = offsetSource.top + source.height()/2 - 60; 
				x2 = canvasHtml.width() - target.width()/2;
				y2 = offsetTarget.top - 20;

			} else if ( source.hasClass('timeline-fourth-element') && target.hasClass('timeline-sixth-element') ) {
				
				x1 = source.width()/2;
				y1 = offsetSource.top + source.height() + 20; 
				x2 = target.width()/2 - 40;
				y2 = offsetTarget.top - 20;

			} else if ( source.hasClass('timeline-fifth-element') && target.hasClass('timeline-sixth-element') ) {
				
				x1 = canvasHtml.width() - source.width()/2;
				y1 = offsetSource.top + source.height() + 20; 
				x2 = target.width()/2 + 40;
				y2 = offsetTarget.top - 20;

			};

			
			var width = $(canvas).parent().width();
			
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);	
			ctx.lineWidth = 5;
  			ctx.lineJoin = ctx.lineCap = 'round';
			ctx.strokeStyle = '#000000';
			ctx.stroke();
		}


		
		function respond() {
			var canvasHtml = $('#canvas');
			var container = $(canvas).parent();
			
			if(window.devicePixelRatio == 2) {
			    canvasHtml.attr('width', 2*container.width() );
			    canvasHtml.attr('height', 2*container.height() );
			    
			    canvasHtml.css('width', container.width());
			    canvasHtml.css('height', container.height());
			    
			    var ctx = canvas.getContext('2d');
			    ctx.scale(2, 2);
			    
			} else {
				canvasHtml.attr('width', container.width() );
				canvasHtml.attr('height', container.height() );
			}
			
			draw($('.timeline-first-element'), $('.timeline-second-element'));
			draw($('.timeline-second-element'), $('.timeline-third-element'));
			drawAngular($('.timeline-third-element'), $('.timeline-fourth-element'));
			drawAngular($('.timeline-third-element'), $('.timeline-fifth-element'));
			drawAngular($('.timeline-fourth-element'), $('.timeline-sixth-element'));
			drawAngular($('.timeline-fifth-element'), $('.timeline-sixth-element'));
			draw($('.timeline-sixth-element'), $('.timeline-seventh-element'));
			draw($('.timeline-seventh-element'), $('.timeline-eighth-element'));

		};

		function centerContainer() {
			var canvasContainer = $('.canvas-container'),
				headerWidth = $('header').height();
			canvasContainer.css('left', headerWidth);
		}

		centerContainer();
		$(window).resize(function() { centerContainer(); });



	}
}

$(document).ready(function() {
	Site.init();
})