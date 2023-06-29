
// Load data from CSV file
d3.csv("repos.csv").then(data => {
    // Set up dimensions
    const width = 700;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 50;

    // with d3 version 7 we only have d3.schemaCategory10 and not d3.schemaCategory20
    // so set up custom color scale with 15 colors
    const color = d3.scaleOrdinal()
        .range([
            "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
            "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf",
            "#aec7e8", "#ffbb78", "#98df8a", "#ff9896", "#c5b0d5"
    ]);


    // SVG element
    const svg = d3.select("#chart")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Generate arc data
    const pie = d3.pie()
        .value(d => d.num_repos);
    const arcData = pie(data);

    // Set up arc generator
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    // Draw arcs
    const arcs = svg.selectAll("arc")
        .data(arcData)
        .enter()
        .append("g")
        .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i));

    // Filter top 15 languages
    const topLanguages = data.slice(0, 15);


    // Add legends
    const legends = svg.selectAll(".legend")
        .data(topLanguages)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(${width / 2 - 120}, ${i * 20 - height / 2 + 20})`);

    legends.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", (d, i) => color(i));

    legends.append("text")
        .text(d => d.language)
        .attr("x", 20)
        .attr("y", 12);
    }).catch(error => {
    console.log("Error loading data:", error);
});