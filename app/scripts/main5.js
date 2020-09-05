
const canvas = d3.select('.canva');

// var dataArray = [4,15,34, 123, 23, 0];
var dataArray = [
  {width: 25, height: 4, fill: "orange"},
  {width: 25, height: 44, fill: "purple"},
  {width: 25, height: 123, fill: "yellow"},
  {width: 25, height: 66, fill: "magenta"},
  {width: 25, height: 123, fill: "gray"}
]
//add svg element


const svg = canvas.append('svg')
        .attr('width','500')
        .attr('height',500);
 //
 // const svg = canvas.select("svg")

 const rect = svg.selectAll("rect");


rect.data(dataArray)
        .enter().append("rect")
        .attr("width", "24")
        .attr("fill", function(d){
                  return d.fill;
        })
        .attr("height", function(d){
                    return d.height*2 }
                  )

        .attr("x", function(d, i) {
                return i * 25;
        })
        .attr("y", function(d){
              return 400 - (d.height*2);
        });
console.log(rect);
