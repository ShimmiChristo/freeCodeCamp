// The D3 min() and max() methods are useful to help set the scale.

// Given a complex data set, one priority is to set the scale so the visualization fits the SVG container's width and height. 
// You want all the data plotted inside the SVG canvas so it's visible on the web page.

// The example below sets the x-axis scale for scatter plot data. The domain() method passes information to the scale about 
// the raw data values for the plot. The range() method gives it information about the actual space on the web page for the visualization.

// In the example, the domain goes from 0 to the maximum in the set. It uses the max() method with a callback function based 
// on the x values in the arrays. The range uses the SVG canvas' width (w), but it includes some padding, too. This puts space
// between the scatter plot dots and the edge of the SVG canvas.

<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];
    
    const w = 500;
    const h = 500;
    
    // Padding between the SVG canvas boundary and the plot
    const padding = 30;
    
    // Create an x and y scale
    
    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);
    
    // Add your code below this line
    
    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[1])])
                    .range([h - padding, padding]);
                     
                     
    // Add your code above this line
    
    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>