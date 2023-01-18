
window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
)
window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
)
window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
)



// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
Math.random = function() {
_seed = _seed * 16807 % 2147483647;
return (_seed - 1) / 2147483646;
};


 
 var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        
  