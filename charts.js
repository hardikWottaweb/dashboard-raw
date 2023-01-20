// BAR CHART DASHBOARD


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
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 12,
          goals: [
            {
              name: 'Expected',
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 81,
          goals: [
            {
              name: 'Expected',
              value: 66,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 67,
          goals: [
            {
              name: 'Expected',
              value: 70,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['var(--primary-color)'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['var(--primary-color)', '#775DD0']
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();



// DOUGHNUT CHART DASHBOARD

// window.onload = function () {

//   var chart = new CanvasJS.Chart("PiechartContainer", {
//     animationEnabled: true,
//     title:{
//       text: "Email Categories",
//       horizontalAlign: "left"
//     },
//     data: [{
//       type: "doughnut",
//       startAngle: 60,
//       //innerRadius: 60,
//       indexLabelFontSize: 17,
//       indexLabel: "{label} - #percent%",
//       toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//       dataPoints: [
//         { y: 67, label: "Inbox" },
//         { y: 28, label: "Archives" },
//         { y: 10, label: "Labels" },
//         { y: 7, label: "Drafts"},
//         { y: 15, label: "Trash"},
//         { y: 6, label: "Spam"}
//       ]
//     }]
//   });
//   chart.render();
  
//   }

