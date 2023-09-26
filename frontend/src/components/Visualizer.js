import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visualizer = ({ fetchedData }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", 800) // Set the width of the SVG
      .attr("height", 500) // Set the height of the SVG
      .style("margin-top", "25px");

    const margin = { top: 10, right: 10, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    
    // offset for labels
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const xScale = d3.scaleBand()
      .domain(fetchedData.data[0].map((_, i) => i))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(fetchedData.data[0])])
      .range([height, 0]);

    svg.selectAll("rect")
      .data(fetchedData.data[0])
      .enter().append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d))
      .attr("fill", "steelblue");
      
    svg.selectAll("text")
      .data(fetchedData.data[0])
      .enter().append("text")
      .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr("y", height + 20) // Adjust y pos of labels
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d => d);
}, [fetchedData.data]);

  // show the result
  return <svg ref={svgRef}></svg>;
}

export default Visualizer;
