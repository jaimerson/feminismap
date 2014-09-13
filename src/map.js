var width = 600,
    height = 600;

var svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height);

var g = svg.append('g');

d3.json('brasil.json', function(error, data){
  if(error) return console.log(error);
  console.log(data);

  var subunits = topojson.feature(data, data.objects.uf),
      projection = d3.geo.mercator().scale(600)
        .translate([width * 1.3, height * 0.2]),
      path = d3.geo.path().projection(projection);


  svg.selectAll('.uf')
    .data(subunits.features)
    .enter().append('path')
    .attr('class', function(d) { return 'subunit ' + d.id})
    .attr('d', path);
});
