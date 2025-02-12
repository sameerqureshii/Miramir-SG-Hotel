$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});


// Spinner
var spinner = function () {
	setTimeout(function () {
		if ($('#spinner').length > 0) {
			$('#spinner').removeClass('show');
		}
	}, 2);
};
spinner();
 
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    


// counter Satisfied clients
var maxScVal = 97;
var isc = parseInt($('.scVal').text());
var tim;
function run() {
	tim = setInterval(function() {
		if (isc >= maxScVal) {
			clearInterval(tim);
			return;
		}
		$('.scVal').text(++isc);
	}, 10);
}
run();
//Counters

// counter finished Projects
var maxfPVal = 214;
var ifP = parseInt($('.fpVal').text());
var timfP;
function runfP() {
	timfP = setInterval(function() {

		if (ifP >= maxfPVal) {
			clearInterval(timfP);
			return;
		}
		$('.fpVal').text(++ifP);

	}, 10);
}
runfP();
//finished Projects

//counter Team Members
var maxtMVal = 125;
var itm = parseInt($('.tMVal').text());
var timtM;
function runtM() {
	timtM = setInterval(function() {
		if (itm >= maxtMVal) {
			clearInterval(timtM);
			return;
		}
		$('.tMVal').text(++itm);
	}, 10);
}
runtM();


jQuery(document).ready(function(){
	jQuery('.titleWrapper').click(function(){
		var toggle = jQuery(this).next('div#descwrapper');
		jQuery(toggle).slideToggle("slow");
	});
    jQuery('.inactive').click(function(){
		jQuery(this).toggleClass('inactive active');
	});
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 4) {
		$('.navbar').addClass('sticky-top shadow-sm');
	} else {
		$('.navbar').removeClass('sticky-top shadow-sm');
	}
});