// DASHBOARD FIRST BAR CHART

am5.ready(function() {
  
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");
    root._logo.dispose();

    var myTheme = am5.Theme.new(root);

    // Here the color can be changed. :0
    myTheme.rule("Label").setAll({
      fill: am5.color("#00b1f2"),
      fontWeight: 400
    });

    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      myTheme
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      })
    );
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({ text: "{realName}" });
    
    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {
          labelText: "{realName}"
        })
      })
    );
    
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );
    
    var yAxis2 = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        syncWithAxis: yAxis,
        renderer: am5xy.AxisRendererY.new(root, { opposite: true })
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis2,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{provider} {realName}: {valueY}"
        })
      })
    );
    
    series.columns.template.setAll({
      fillOpacity: 0.9,
      strokeOpacity: 0
    });
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    var lineSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series 2",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "quantity",
        sequencedInterpolation: true,
        stroke: chart.get("colors").getIndex(13),
        fill: chart.get("colors").getIndex(13),
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      })
    );
    
    lineSeries.strokes.template.set("strokeWidth", 2);
    
    lineSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 1,
        locationX: undefined,
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: lineSeries.get("fill")
        })
      });
    });
    
    // when data validated, adjust location of data item based on count
    lineSeries.events.on("datavalidated", function () {
      am5.array.each(lineSeries.dataItems, function (dataItem) {
        // if count divides by two, location is 0 (on the grid)
        if (
          dataItem.dataContext.count / 2 ==
          Math.round(dataItem.dataContext.count / 2)
        ) {
          dataItem.set("locationX", 0);
        }
        // otherwise location is 0.5 (middle)
        else {
          dataItem.set("locationX", 0.5);
        }
      });
    });
    
    var chartData = [];
    
    // Set data
    var data = {
      "Provider 1": {
        "item 1": 10,
        "item 2": 35,
        "item 3": 5,
        "item 4": 20,
        quantity: 430
      },
      "Provider 2": {
        "item 1": 15,
        "item 3": 21,
        quantity: 210
      },
      "Provider 3": {
        "item 2": 25,
        "item 3": 11,
        "item 4": 17,
        quantity: 265
      },
      "Provider 4": {
        "item 3": 12,
        "item 4": 15,
        quantity: 98
      }
    };
    
    // process data ant prepare it for the chart
    for (var providerName in data) {
      var providerData = data[providerName];
    
      // add data of one provider to temp array
      var tempArray = [];
      var count = 0;
      // add items
      for (var itemName in providerData) {
        if (itemName != "quantity") {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({
            category: providerName + "_" + itemName,
            realName: itemName,
            value: providerData[itemName],
            provider: providerName
          });
        }
      }
      // sort temp array
      tempArray.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        } else if (a.value < b.value) {
          return -1;
        } else {
          return 0;
        }
      });
    
      // add quantity and count to middle data item (line series uses it)
      var lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am5.array.each(tempArray, function (item) {
        chartData.push(item);
      });
    
      // create range (the additional label at the bottom)
    
      var range = xAxis.makeDataItem({});
      xAxis.createAxisRange(range);
    
      range.set("category", tempArray[0].category);
      range.set("endCategory", tempArray[tempArray.length - 1].category);
    
      var label = range.get("label");
    
      label.setAll({
        text: tempArray[0].provider,
        dy: 30,
        fontWeight: "bold",
        tooltipText: tempArray[0].provider
      });
    
      var tick = range.get("tick");
      tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 0 });
    
      var grid = range.get("grid");
      grid.setAll({ strokeOpacity: 1 });
    }
    
    // add range for the last grid
    var range = xAxis.makeDataItem({});
    xAxis.createAxisRange(range);
    range.set("category", chartData[chartData.length - 1].category);
    var tick = range.get("tick");
    tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 1 });
    
    var grid = range.get("grid");
    grid.setAll({ strokeOpacity: 1, location: 1 });
    
    xAxis.data.setAll(chartData);
    series.data.setAll(chartData);
    lineSeries.data.setAll(chartData);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()


// DASHBOARD doughtnuts PIE CHART



  am5.ready(function() {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  root._logo.dispose();
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  var myTheme = am5.Theme.new(root);

  // Here the color can be changed. :0
  myTheme.rule("Label").setAll({
    fill: am5.color("#00b1f2"),
    fontWeight: 400
  });
  root.setThemes([
    am5themes_Animated.new(root),
    myTheme
  ]);
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: am5.percent(50)
  }));
  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    alignLabels: true,
  }));
  series.labels.template.setAll({
    textType: "circular",
    centerX: 0,
    centerY: 0, 
  });
  series.get("colors").set("colors", [
  am5.color('#F66A6A'),
  am5.color('#F72626'),
  am5.color('#e42edc'),
  am5.color('#fa6827'),
  am5.color('#8f8ff4'),
  am5.color('#8ff4f2'),
  am5.color('#fbff00')
]);
  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series.data.setAll([
    { value: 10, category: "One" },
    { value: 9, category: "Two" },
    { value: 6, category: "Three" },
    { value: 5, category: "Four" },
    { value: 4, category: "Five" },
    { value: 3, category: "Six" },
    { value: 1, category: "Seven" },
  ]);
  var myTheme = am5.Theme.new(root);
  
  // Create legend
  // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    marginTop: 15,
    marginBottom: 15, 
     
  }));
  legend.data.setAll(series.dataItems);
  // Play initial series animation
  // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
  series.appear(1000, 100);
  }); // end am5.ready()
