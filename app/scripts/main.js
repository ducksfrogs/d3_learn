
const canvas = d3.select('.canva');

//add svg element
const svg = canvas.append('svg')
        .attr('width','500')
        .attr('height',250);

svg.append('circle')
        .attr('cx', 134)
        .attr('cy', "40%")

        .attr('r', 50)
        .attr('fill','blue');

svg.append("rect")
        .attr("width", 30)
        .attr("height", 120)
        .attr("fill", "green")
        .attr("x",40)
        .attr("y", 50)
