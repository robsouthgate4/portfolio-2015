$(function(){

	/* We make the slide container fill window */
	(function(){

		function resizeWrapper() {
			$('.slide-container').css({
				'width' : $(window).width(),
				'height' : $(window).height()	
			});
		}
		
		resizeWrapper();

		$(window).resize(function(){
			resizeWrapper();
		});	

	})();

});