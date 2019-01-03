




<div class="main">
 <div class='container'>
    <div id='title'>Title</div>
    <div class='visHolder'></div>
  </div>
</div>


const w = 500;
const h = 500;
const padding = 60;

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json', function(err, data) {
// const data = JSON.parse(response);
const dataset = data;
// console.log(dataset[0].Time);
  
const xScale = d3.scaleLinear()
      .range([0, w]);
const yScale = d3.scaleTime()
      .range ([0, h]);
xScale.domain([d3.min(data, function(d) {
  return d.Year - 1;
}),
  d3.max(data, function(d) {
    return d.Year + 1;
})]);
yScale.domain(d3.extend(data, function(d) {
  return d.Time;
}));

const svg = d3.select(".visHolder")
      .append("svg")
      .attr("width", w)
      .attr("height", h);
svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     // Add your code below this line
     .attr("cx", (d) => xScale(d.Year))
     .attr("cy", (d) => yScale(d.Seconds))
     .attr("r", 2)
     .attr("fill", "red")

});
