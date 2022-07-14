 // ===============================
    // Shoes Stopwatch
    // ===============================
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
      const deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv', deadline);
          
          // ===============================
          // Clothing Stopwatch
          // ===============================
            function getTimeRemainingg(enddtime) {
        const totall = Date.parse(enddtime) - Date.parse(new Date());
        const secondss = Math.floor((totall / 1000) % 60);
        const minutess = Math.floor((totall / 1000 / 60) % 60);
        const hourss = Math.floor((totall / (1000 * 60 * 60)) % 24);
        const dayss = Math.floor(totall / (1000 * 60 * 60 * 24));
        
        return {
          totall,
          dayss,
          hourss,
          minutess,
          secondss
        };
      }
      
      function initializeClockk(id, enddtime) {
        const clockk = document.getElementById(id);
        const dayssSpan = clockk.querySelector('.dayss');
        const hourssSpan = clockk.querySelector('.hourss');
        const minutessSpan = clockk.querySelector('.minutess');
        const secondssSpan = clockk.querySelector('.secondss');
      
        function updateClockk() {
          const tt = getTimeRemainingg(enddtime);
      
          dayssSpan.innerHTML = tt.dayss;
          hourssSpan.innerHTML = ('0' + tt.hourss).slice(-2);
          minutessSpan.innerHTML = ('0' + tt.minutess).slice(-2);
          secondssSpan.innerHTML = ('0' + tt.secondss).slice(-2);
      
          if (tt.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClockk();
        const timeintervall = setInterval(updateClockk, 1000);
      }
      
      const deadlinee = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
      initializeClockk('clockdivv', deadlinee);
          // ===============================
          // Accessories Stopwatch
          // ===============================
          function getTimeRemaininggg(endddtime) {
        const totalll = Date.parse(endddtime) - Date.parse(new Date());
        const secondsss = Math.floor((totalll / 1000) % 60);
        const minutesss = Math.floor((totalll / 1000 / 60) % 60);
        const hoursss = Math.floor((totalll / (1000 * 60 * 60)) % 24);
        const daysss = Math.floor(totalll / (1000 * 60 * 60 * 24));
        
        return {
          totalll,
          daysss,
          hoursss,
          minutesss,
          secondsss
        };
      }
      
      function initializeClockkk(id, endddtime) {
        const clockkk = document.getElementById(id);
        const daysssSpann = clockkk.querySelector('.daysss');
        const hoursssSpann = clockkk.querySelector('.hoursss');
        const minutesssSpann = clockkk.querySelector('.minutesss');
        const secondsssSpann = clockkk.querySelector('.secondsss');
      
        function updateClockkk() {
          const ttt = getTimeRemaininggg(endddtime);
      
          daysssSpann.innerHTML = ttt.daysss;
          hoursssSpann.innerHTML = ('0' + ttt.hoursss).slice(-2);
          minutesssSpann.innerHTML = ('0' + ttt.minutesss).slice(-2);
          secondsssSpann.innerHTML = ('0' + ttt.secondsss).slice(-2);
      
          if (ttt.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClockkk();
        const timeintervalll = setInterval(updateClockkk, 1000);
      }
      
      const deadlineee = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      initializeClockkk('clockdivvv', deadlineee);
      
      
          
          // ===============================
          // This shows the New Arrivals
          // ===============================
       function Display() {
          document.querySelector('.arival-display').style.display="block";
          document.querySelector('.forbestsellers').style.display="none";
          document.querySelector('.hotsales-display').style.display="none";
        
       }
           // ===============================
          // This shows the Best Sellers
          // ===============================
           function showme() {
          document.querySelector('.forbestsellers').style.display="block";
          document.querySelector('.arival-display').style.display="none";
              document.querySelector('.hotsales-display').style.display="none";
        
       }
      
           // ===============================
          // This shows the Hot Sales
          // ===============================
        function Sales() {
          document.querySelector('.hotsales-display').style.display="block";
          document.querySelector('.arival-display').style.display="none";
           document.querySelector('.forbestsellers').style.display="none";
        
       }
      
           // ===============================
          // Displays Clothing with Stopwatch
          // ===============================
        
         function Cloth() {
            document.querySelector('.box4').style.display="none";
          document.querySelector('.box4-replacement1').style.display="block";
            document.querySelector('.box4-replacement2').style.display="none";
           
          }
      
           // ===============================
          // Displays Shoes with Stopwatch
          // ===============================
          function Shoe() {
            document.querySelector('.box4-replacement1').style.display="none";
          document.querySelector('.box4').style.display="block";
           document.querySelector('.box4-replacement2').style.display="none";
           
           }
      
           // ===============================
          // Displays Accerories with Stopwatch
          // ===============================
          function Glasses() {
            document.querySelector('.box4').style.display="none";
          document.querySelector('.box4-replacement2').style.display="block";
            document.querySelector('.box4-replacement1').style.display="none";
          }