$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });

   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });

   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });

   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();

       if (scrollTop > 0) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', 'rgba(238, 238, 238, 0.979)');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#999');
           headerElem.css('background', 'transparent');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }

       headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
   });

   $(document).trigger('scroll');
});


const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('June 02, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)