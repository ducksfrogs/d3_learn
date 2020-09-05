
const canvas = d3.select('.canva');

var dataArray = [4,15,34];
//add svg element


// const svg = canvas.append('svg')
//         .attr('width','500')
//         .attr('height',500);

 const svg = canvas.select("svg")

 const rect = svg.selectAll("rect");


rect.attr("width", 20)
        .data(dataArray)
        .attr("fill", "orange")
        .attr("height", function(d){
                    return d *2}
                  )

        .attr("x", function(d, i) {
                console.log(i);
                return i * 21;
        })
console.log(rect)
