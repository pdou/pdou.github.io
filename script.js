// const spec1 = {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   description:
//     "Relative frequency histogram. The data is binned with first transform. The number of values per bin and the total number are calculated in the second and third transform to calculate the relative frequency in the last transformation step.",
//   data: {
//     url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/cars.json",
//   },
//   transform: [
//     {
//       bin: true,
//       field: "Horsepower",
//       as: "bin_Horsepwoer",
//     },
//     {
//       aggregate: [{ op: "count", as: "Count" }],
//       groupby: ["bin_Horsepwoer", "bin_Horsepwoer_end"],
//     },
//     {
//       joinaggregate: [{ op: "sum", field: "Count", as: "TotalCount" }],
//     },
//     {
//       calculate: "datum.Count/datum.TotalCount",
//       as: "PercentOfTotal",
//     },
//   ],
//   mark: { type: "bar", tooltip: true },
//   encoding: {
//     x: {
//       title: "Horsepower",
//       field: "bin_Horsepwoer",
//       bin: { binned: true },
//     },
//     x2: { field: "bin_Horsepwoer_end" },
//     y: {
//       title: "Relative Frequency",
//       field: "PercentOfTotal",
//       type: "quantitative",
//       axis: {
//         format: ".1~%",
//       },
//     },
//   },
// };

//var data = $.csv.toObjects("WesternNBspeedInd.csv")
//<script src="jquery-3.7.1.min.js"></script>
const data1 = fetch("./WesternNBspeedInd.csv")
//fetch('sample-url.csv')
  .then((response) => response.text())//response.json()) or response.text()
  .then((data) => console.log(data));
console.log(typeof data1)
console.log(data1)

const spec1 = {
  
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "./WesternNBspeedInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
  title: {"text":"Speed distribution Western northbound"},
  mark: "bar",
  encoding: {
    x: {field: "speed", type: "quantitative"},
    y: {aggregate: "count"}
    //y: {aggregate: "count"}
  },
  
  //config: {
  //  boxplot: {extent: 50, size: 100}
  //}//,
  //width: 200,
  //height: 100
};
vegaEmbed("#vis1", spec1);

// const spec2 = {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   data: {
//     values: [
//       { category: "A", group: "x", value: 0.1 },
//       { category: "A", group: "y", value: 0.6 },
//       { category: "A", group: "z", value: 0.9 },
//       { category: "B", group: "x", value: 0.7 },
//       { category: "B", group: "y", value: 0.2 },
//       { category: "B", group: "z", value: 1.1 },
//       { category: "C", group: "x", value: 0.6 },
//       { category: "C", group: "y", value: 0.1 },
//       { category: "C", group: "z", value: 0.2 },
//     ],
//   },
//   mark: "bar",
//   encoding: {
//     x: { field: "category" },
//     y: { field: "value", type: "quantitative" },
//     xOffset: { field: "group" },
//     color: { field: "group" },
//   },
// };
const spec2 = {
  
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "./WesternNBspeedtimeInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
    "title": {"text":"Maximum speeds, Western northbound (September 5th - 6th)"},
  "mark": "line",
  "encoding": {
    "y": {"aggregate":"max","field": "speed", "type": "quantitative"},
    "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}}
  },
  
  "config": {
    "boxplot": {"extent": 100, "size": 100}
  },
  "width": 400,
  "height": 300
};
vegaEmbed("#vis2", spec2);

const spec3 = //{
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   data: {
//     url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
//   },
//   mark: "bar",

//   encoding: {
//     x: {
//       timeUnit: "month",
//       field: "date",
//       type: "ordinal",
//       title: "Month of the year",
//     },
//     y: {
//       aggregate: "count",
//       type: "quantitative",
//     },
//     color: {
//       field: "weather",
//       type: "nominal",
//       scale: {
//         domain: ["sun", "fog", "drizzle", "rain", "snow"],
//         range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
//       },
//       title: "Weather type",
//     },
//   },
// }
{
  "params": [
    { "name": "strokewidth", "value": 1,
      "bind": {"input": "range", "min": 0, "max": 5, "step": .1}},
    {"name": "pts", "select": "point"}
    
      
  ],
  "title": {"text":"Mean speeds, Western northbound (September 5th - 6th)"},
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "./WesternNBspeedtimeInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
  "mark": { "type":"point","strokeWidth": {"expr": "strokewidth"}},//bar / cornerRadius": {"expr": "cornerRadius"}},
  "encoding": {
    "y": {"aggregate":"mean","field": "speed", "type": "quantitative"},
    "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}}
  },
  
  "config": {
    "boxplot": {"extent": 50, "size": 100}
  },
  "width": 400,
  "height": 200
};
vegaEmbed("#vis3", spec3);

 const spec4 = //{
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   data: {
//     url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
//   },
//   mark: { type: "bar", cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3 },
//   encoding: {
//     x: { timeUnit: "month", field: "date", type: "ordinal" },
//     y: { aggregate: "count" },
//     color: { field: "weather" },
//   },
// };
{
  "vconcat":[
{
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text":"Mean speeds, Western northbound (September 5th - 6th)","subtitle": "select a focus area"},
"mark": "line",
data: {
  url: "./WesternNBspeedtimeInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"selection": {
    "brush": {"type": "interval", "encodings": ["x"]}
  },
"encoding": {
  "y": {"aggregate":"mean","field": "speed", "type": "quantitative"},
  
  "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}}
},

"config": {
  "boxplot": {"extent": 50, "size": 100}
},
"width": 400,
"height": 150
},
{
"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
   "title": {"text":"Maximum speeds, Western northbound (September 5th - 6th)","subtitle": "focus selected above"},
   data: {
    url: "./WesternNBspeedtimeInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
"mark": "line",
"encoding": {
  "y": {"aggregate":"max","field": "speed", "type": "quantitative"},
  
  "x": {"field": "time", "type": "temporal","scale": {"domain":{"selection": "brush"}}}
},

"config": {
  "boxplot": {"extent": 50, "size": 100}
},
"width": 400,
"height": 150
}       
    ]}
vegaEmbed("#vis4", spec4);

const spec5 =
//  {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   description: "Google's stock price over time.",
//   data: {
//     url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
//   },
//   transform: [{ filter: "datum.symbol==='GOOG'" }],
//   mark: "line",
//   encoding: {
//     x: { field: "date", type: "temporal" },
//     y: { field: "price", type: "quantitative" },
//   },
// }

{
  
  "params": [
  { "name": "markSize", "value": 25,
    "bind": {"input": "range", "min": 25, "max": 100, "step": 1}},
  {"name": "pts", "select": "point"}
  
    
],
  "vconcat":[
      {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {"text":"Speeds, Western northbound (September 5th - 6th)","subtitle": "re-size below"},
"mark": {"type": "point", "shape": "triangle-up","size": 25, "filled": true},
data: {
  url: "./WesternNBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"encoding": {
  "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}},
  "y": {"field": "start_latitude", "type": "quantitative","scale": {"domain": [41.70, 42.0]}},
  "color": {"field": "speed", "type": "quantitative","scale": {"scheme": "viridis"},"legend": {"orient": "left"}}
},


"width": 450,
"height": 250},
      {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {"text":"Speeds, Western northbound (September 5th - 6th)","subtitle": "re-size below"},
"mark": {"type": "point", "shape": "triangle-up","size": {"expr": "markSize"}, "filled": true},
data: {
  url: "./WesternNBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"encoding": {
  "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}},
  "y": {"field": "start_latitude", "type": "quantitative","scale": {"domain": [41.70, 42.0]}},
  "color": {"field": "speed", "type": "quantitative","scale": {"scheme": "viridis"},"legend": {"orient": "left"}}
},


"width": 450,
"height": 250}
  ]};
vegaEmbed("#vis5", spec5);

const spec6 = 
// {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   description: "Stock prices of 5 Tech Companies over Time.",
//   data: {
//     url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
//   },
//   mark: {
//     type: "line",
//     point: true,
//   },
//   encoding: {
//     x: { timeUnit: "year", field: "date" },
//     y: { aggregate: "mean", field: "price", type: "quantitative" },
//     color: { field: "symbol", type: "nominal" },
//   },
// }
{
  
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "vconcat": [{
        "title": {"text":"Speeds (Lat v Time), Western southbound (September 5th - 6th)","subtitle": "make selection to see timed speed average"},
    "selection": {
    "brush": {
      "type": "interval"}
  },
  "mark": {"type": "point", "shape": "triangle-down", "filled": true},
  data: {
    url: "./WesternSBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
  "encoding": {
    "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}},
    "y": {"field": "start_latitude", "type": "quantitative","scale": {"domain": [41.70, 42.0]}},
    "color": {"field": "speed", "type": "quantitative","scale": {"scheme": "viridis"},"legend": {"orient": "left"}}
  },
  
    "size": {
      "condition": {
        "selection": "paintbrush", "value": 300
      },
      "value": 50
    },
  "width": 450,
  "height": 250
},
 {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
     "title": {"text":"Average Speeds (per given Time), Western southbound (September 5th - 6th)"},
  "mark": "bar",
  data: {
    url: "./WesternSBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
  "encoding": {
    "y": {"aggregate":"mean", "field": "speed", "type": "quantitative"},
    
    "x": {"field": "time", "type": "temporal","scale": {"domain":{"selection": "brush"}}}
  },
  
  "config": {
    "boxplot": {"extent": 50, "size": 100}
  },
  "width": 400,
  "height": 150
  }  
    ]
        }
;
vegaEmbed("#vis6", spec6);

const spec7 = 

{
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "params": [
  { "name": "opacityMin", "value": .5,
    "bind": {"input": "range", "min": 0, "max": 1, "step": .05}},
      { "name": "opacityMax", "value": .5,
    "bind": {"input": "range", "min": 0, "max": 1, "step": .05}},
      { "name": "opacityMean", "value": .5,
    "bind": {"input": "range", "min": 0, "max": 1, "step": .05}},
  
    
],
  "title": {"text":"Hourly Speed Layers (Min, Max, Mean), Irving Park eastbound (September 5th - 6th)"},
  "layer":[
{
"mark": { "type":"rule","opacity": {"expr": "opacityMin"}},
data: {
  url: "./IrvingParkEBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"encoding": {
  "y": {"aggregate":"min","field": "speed", "type": "quantitative"},
  
  "x": {"field": "time", "type": "temporal","scale": {"domain": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}}
},

"config": {
  "boxplot": {"extent": 50, "size": 100}
},
"width": 400,
"height": 150
},
{
"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
"mark": { "type":"point","color": "red","opacity": {"expr": "opacityMax"}},
data: {
  url: "./IrvingParkEBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"encoding": {
  "y": {"aggregate":"max","field": "speed", "type": "quantitative"},
  
  "x": {"field": "time", "type": "temporal","scale": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}
},

"config": {
  "boxplot": {"extent": 50, "size": 100}
},
"width": 400,
"height": 150,
"color": {"field": "symbol", "type": "nominal"}
} ,
      
{
"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
"mark": {"type": "line", "color": "green","opacity": {"expr": "opacityMean"}},
data: {
  url: "./IrvingParkEBspeedtimelatInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
  
} ,
"encoding": {
  "y": {"aggregate":"mean","field": "speed", "type": "quantitative"},
  
  "x": {"field": "time", "type": "temporal","scale": ['2023-09-05T19:50:24.000', '2023-09-06T15:50:29.000']}
},

"config": {
  "boxplot": {"extent": 50, "size": 100}
},
"width": 400,
"height": 150,
"color": {"field": "symbol", "type": "nominal"}
}        
      
    ]}
;
vegaEmbed("#vis7", spec7);

const spec8 = 

{
  "title": {"text":"Max speeds, all direction city-wide (September 5th - 6th)"},
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "mark": {"type": "point", "filled": true},
  data: {
    url: "./100KspeedtimelatlongInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,
  "encoding": {
    "y": {"field": "start_latitude", "type": "quantitative","scale": {"domain": [41.65, 42.05]}},
    "x": {"field": "start_longitude", "type": "quantitative","scale": {"domain": [-87.86, -87.54]}},
    "color": {"field": "speed","legend": {"orient": "left"},"aggregate": "max", "type": "quantitative","scale": {"scheme": "viridis"}}
  },
  
  "width": 450,
  "height": 250
};
vegaEmbed("#vis8", spec8);

const spec10 = 

{
  "title": {"text":"Max speeds, city-wide, separated by direction (September 5th - 6th)"},
  
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  data: {
    url: "./100KspeedtimelatlongdirectionInd.csv"//http://github.com/pdou/pdou.github.io/blob/main/WesternNBspeedInd.csv
    
  } ,

  "facet": {"column": {"field": "direction"}},

  "spec": {
  "mark": {"type": "rect","width":7,"height":7},
  
  
  "encoding": {
    "y": {"field": "start_latitude", "type": "quantitative","scale": {"domain": [41.65, 42.05]}},
    "x": {"field": "start_longitude", "type": "quantitative","scale": {"domain": [-87.86, -87.54]}},
    "color": {"field": "speed","legend": {"orient": "left"},"aggregate": "max", "type": "quantitative","scale": {"scheme": "viridis"}
             
             }
  },
  
  "width": 450,
  "height": 250
  }
};
vegaEmbed("#vis10", spec10);