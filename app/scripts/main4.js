
const canvas = d3.select('.canva');

var dataArray = [4,15,34, 123, 23, 0];
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
        .attr("fill", "orange")
        .attr("height", function(d){
                    return d *2}
                  )

        .attr("x", function(d, i) {
                return i * 25;
        })
        .attr("y", function(d){
              return 100 - (d*2);
        });
console.log(rect);
