app.directive('animClass',function($route){
    return {
        link: function( scope, elm, attrs ){
            var enterClass = $route.current.animate;

            elm.addClass(enterClass);
            scope.$on('$destroy',function(){

                elm.removeClass(enterClass);
                elm.addClass($route.current.animate);
            })
        }
    }
});

app.directive('navigation', function() {

    var navigation = {};
    navigation.restrict = 'E';
    navigation.templateUrl = "views/nav.html";

    navigation.compile = function(element) {

        var positionNav = (function() {

            element.css({
                'width' : $(window).width(),
                'height' : $(window).height()
            })
            .find('a').each(function(){

                var _self = $(this);

                switch (true) {
                    case _self.hasClass('nav-left'):
                        _self.css({
                            'left': '0', 
                            'top': $(window).height() / 2 - _self.outerHeight()
                        });
                        break;
                    case _self.hasClass('nav-right'):
                        _self.css({
                            'right': '0', 
                            'top': $(window).height() / 2 - _self.outerHeight()
                        });
                        break;
                    case _self.hasClass('nav-up'):
                        _self.css({
                            'top': '0', 
                            'left': $(window).width() / 2 - _self.outerWidth()
                        });
                        break;
                    case _self.hasClass('nav-down'):
                        _self.css({
                            'bottom': '0', 
                            'left': $(window).width() / 2 - _self.outerWidth()
                        });
                        break;  
                }
            });    

        })();

        $(window).resize(function(){
            positionNav;
        });

    }
    
    return navigation;

});