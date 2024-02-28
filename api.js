//This code creates a simple server that acts as an api for serving up calculations

/*
The API call will receive a set of information (location, birthday, time)
and output Calendar data composed of major planetary events and favorable/unfavorable times

MONTH object: The month the calculation will apply to
    - STRINGCONSTANT - indicates the month to apply info to
    - Days DayList[] -  a list of Days within the Calendar Month

DAY object: A single day within the month
    - DATE - the date in which the DAY data maps to
    - TimeWindow timeWindowLists[] - a list of favorable and unfavorable time windows
    - PlanetaryEvent PlanetaryEventList[] - a list of events for the day

TIMEWINDOW object: A window of time which is determined by vedic calculations
    - TIME startTime
    - TIME endTimebcwaters:~/repo/MinusMail (master) $
    - boolean isFavorable

PLANETARYEVENT object: contains information about a calculated notable alignment
    - GRAHA[] - a list of influences for the given event
    - boolean isConjunct
    - String summary


*/
import Month from "./Classes/Month.js"
import express from "express"
import request from 'request'

var app = express();
var monthObject = new Month();

app.get("/month", (req, res, next) => {
 console.log(monthObject.returnMonth(req.query.monthNumber));
 res.send(monthObject.returnMonth(req.query.monthNumber));
});







app.listen(3000, () => {
 console.log("Server running on port 3000");
 console.log(monthObject.returnMonth(2));
});



