// Bar chart

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Hello I'm Title"
        },
        axisY: {
            title: "Growth Rate (in %)",
            suffix: "%"
        },
        axisX: {
            title: "Countries"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "India", y: 7.1 },	
                { label: "China", y: 6.70 },	
                { label: "Indonesia", y: 5.00 },
                { label: "Australia", y: 2.50 },	
                { label: "Mexico", y: 2.30 },
                { label: "UK", y: 1.80 },
                { label: "United States", y: 1.60 },
                { label: "Japan", y: 1.60 }
                
            ]
        }]
    });
    chart.render();
    
    }



// pie dash chart

window.onload = function() {

var chart = new CanvasJS.Chart("piechart", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Desktop Browser Market Share in 2016"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.08, label: "Chrome" },
			{ y: 27.34, label: "Internet Explorer" },
			{ y: 10.62, label: "Firefox" },
			{ y: 5.02, label: "Microsoft Edge" },
			{ y: 4.07, label: "Safari" },
			{ y: 1.22, label: "Opera" },
			{ y: 0.44, label: "Others" }
		]
	}]
});
chart.render();

}