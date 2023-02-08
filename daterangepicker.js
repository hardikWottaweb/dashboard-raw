var today = new Date();
var defaultDateLimit = 90;
var defaultPastDate = new Date(new Date().setDate(today.getDate() - defaultDateLimit));

$('input[name="daterange"]').daterangepicker(
  {
    "showDropdowns": true,
    "autoApply": true,
    "dateLimit": {
        "days": 90
    },
    "ranges": {
        "Last 30 Days": [
            today,
            new Date().setDate(today.getDate() - 30)
        ],
        "Last 60 Days": [
            today,
            new Date().setDate(today.getDate() - 60)
        ],
        "Last 90 Days": [
            today,
            new Date().setDate(today.getDate() - 90)
        ]
    },
    "locale": {
        "format": "MM/DD/YYYY",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
        ],
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "firstDay": 1
    },
    "startDate": defaultPastDate,
    "endDate": today
  }, 
  function(start, end, label) {
      "A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD');
  }
);