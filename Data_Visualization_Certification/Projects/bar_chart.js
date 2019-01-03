// User Story #1: My chart should have a title with a corresponding id="title".
// User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".
// User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".
// User Story #4: Both axes should contain multiple tick labels, each with the corresponding class="tick".
// User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.
// User Story #6: Each bar should have the properties data-date and data-gdp containing date and GDP values.
// User Story #7: The bar elements' data-date properties should match the order of the provided data.
// User Story #8: The bar elements' data-gdp properties should match the order of the provided data.
// User Story #9: Each bar element's height should accurately represent the data's corresponding GDP.
// User Story #10: The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.
// User Story #11: The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.
// User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
// User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.




<script src="https://d3js.org/d3.v5.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<style>

.main {
    background: #ddd;
}
.container {
    width: auto;
    text-align: center;
    padding: 50px;
    width: 1000;
    background: #fff;
    margin: 0 auto;
    margin-left: 200px;
}
.visHolder {
    
}
#tooltip {

}

</style>

<div class="main">
    <div class='container'>
       <div id='title'>United States GDP</div>
       <div class='visHolder'></div>
    </div>
</div>

<script>
    // const jsonData = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
    // var createXhrRequest = function( httpMethod, url, callback ) {
    // var req = new XMLHttpRequest();
    //     req.open( httpMethod, url );
    //     req.onload = function() {
    //         callback( null, req.response );
    //     }; 
    //     req.onerror = function() {
    //         callback( req.response );
    //     };
    //     req.send();
    // }
    // createXhrRequest( "GET", jsonData, function( err, response ) {
    //     if( err ) { console.log( "Error!" ); }
    //     return returnedData(response);
    // });


    const w = 900;
    const h = 450;
    const padding = 0;

    // function returnedData (response) {
    d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function(err, data) {
        // const data = JSON.parse(response);
        const dataset = data.data;
        var yearsDate = data.data.map(function(item) {
            return new Date(item[0]);
        });
        var xMax = new Date(d3.max(yearsDate));
            xMax.setMonth(xMax.getMonth() + 3);
       
        var maxDate = new Date()
        var minDate = new Date(data.from_date);

        const xCount = d3.selectAll("rect")
                         .data(dataset, (d) => d[0])
                         .enter()
                         .size();
        const xScale = d3.scaleTime()
                    .domain([d3.min(yearsDate), xMax])
                    .range([0, w]);
        const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, 0]);
        const svg = d3.select('.visHolder')
                    .append('svg')
                    .attr('width',w + 100)
                    .attr('height',h + 60);
        const tooltip = d3.select('.visHolder')
                    .append('div')
                    .attr('id', 'tooltip');
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr('class', 'bar')
            .attr('data-date', function(d,i){
                return d[0];
            })
            .attr('data-gdp', function(d,i){
                return d[1];
            })
            .attr('transform', 'translate(40,10)')
            .attr('x', (d,i) => {
                return i * (w / dataset.length);
            })
            .attr('y', (d) => {
                return yScale(d[1])
            })
            .attr('width', w / dataset.length)
            .attr('height', (d) => h - yScale(d[1]) )
            .style('fill', 'blue')
            .on('mouseover', function(d, i) {
                tooltip.html(d[0] + '<br>' + '$' + d[1] + ' Billion')
                        .style('display', 'block')
                        .style('position', 'absolute')
                        .style('top', '200px')
                        .style('left', i * (w / dataset.length) + 'px')
                        .style('background-color', 'gray')
                        .attr('data-date', d[0]);
            })
            .on('mouseout', function(d, i) {
                tooltip.style('display','none');
            });

        const xAxis = d3.axisBottom()
                        .scale(xScale);
        const yAxis = d3.axisLeft(yScale);
        const svgContainer = d3.select('.container')
                                .append('svg');
        svg.append("g")
            // .attr("width", xAxis);
            .call(xAxis)
            .attr('id', 'x-axis')
            // .attr('transform', 'translate(0,' + (h-padding) + ')');
            .attr('transform', 'translate(40,' + (h + 10) + ')');

        svg.append("g")
            // .attr("transform", "translate(" + (padding) + ", 0)")
            .call(yAxis)
            .attr('id', 'y-axis')
            .attr('transform', 'translate(40,10)');

    });
    
</script>
    

    
