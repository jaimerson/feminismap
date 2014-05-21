var width = 600,
    height = 600;

var svg = d3.select('#map').append('svg')
  .attr('width', width)
  .attr('height', height);

d3.json('brasil.json', function(data){
  console.log(data);
  svg.append('svg:path');
});
