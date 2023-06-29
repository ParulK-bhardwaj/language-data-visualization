// Load the data
d3.csv("prs.csv").then((data) => {
    const groupedData = d3.group(data, (d) => d.name, (d) => d.year);
    const aggregatedData = Array.from(groupedData, ([name, values]) => {
        const totalPRsByYear = Array.from(values, ([year, prs]) => ({
            year: +year,
            prs: d3.sum(prs, (d) => +d.count),
        }));
    
        return {
            name: name,
            values: totalPRsByYear,
        };
    });
    aggregatedData.sort((a, b) => d3.sum(b.values, (d) => d.prs) - d3.sum(a.values, (d) => d.prs));
    const topLanguages = aggregatedData.slice(0, 15);
  
    // chart dimensions
    const margin = { top: 70, right: 80, bottom: 30, left: 100 };
    const width = 600 + margin.right;
    const height = 500;
  
    // SVG element
    const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
  
    // scales
    const xScale = d3
        .scaleLinear()
        .domain([
            d3.min(topLanguages, (d) => d3.min(d.values, (d) => d.year)),
            d3.max(topLanguages, (d) => d3.max(d.values, (d) => d.year)),
        ])
        .range([0, width])
  
    const yScale = d3
        .scaleLinear()
        .domain([
            0,
            d3.max(topLanguages, (d) => d3.max(d.values, (d) => d.prs)),
        ])
        .range([height, 0])
    
    // line generator
    const line = d3
        .line()
        .x((d) => xScale(d.year))
        .y((d) => yScale(d.prs))
    
    // color scale for the lines
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    // Draw the lines
    const lines = svg
        .selectAll(".line")
        .data(topLanguages)
        .enter()
        .append("path")
        .attr("class", "line")
        .attr("d", (d) => line(d.values))
        .style("stroke", (d) => color(d.name))
        .style("fill", "none")
        .style("stroke-width", 4)
      
    // x-axis
    svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .style("stroke-width", 2)
        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
  
    // y-axis
    svg
        .append("g")
        .attr("class", "y-axis")
        .style("stroke-width", 2)
        .call(d3.axisLeft(yScale));
  
    // chart title
    svg
        .append("text")
        .attr("class", "chart-title")
        .attr("x", width / 2)
        .attr("y", -margin.top / 2)
        .attr("text-anchor", "middle")
        .style("fill", "blue")
        .style("font-weight", "Bold")
        .text("Yearly Git PRs Trend - Programming Languages");
  
    // legend
    const legend = svg
        .selectAll(".legend")
        .data(topLanguages)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * 17})`);
  
    legend
        .append("rect")
        .attr("x", width + 10)
        .attr("width", 14)
        .attr("height", 14)
        .style("fill", (d) => color(d.name));
  
    legend
        .append("text")
        .attr("x", width + 5)
        .attr("y", 7)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text((d) => d.name);
});
  