import * as React from "react";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ScaleLinear, ScaleBand } from "d3";
import "./BarChart.css";
type TItem = {
  key: string;
  color: string;
  value: number;
};
interface Props {
  data: TItem[];
  width: number;
  height: number;
  domainY: number[];
}

const BarChart: React.FC<Props> = ({
  data,
  width,
  height,
  domainY: domain,
}) => {
  const margin = {
    top: 5,
    left: 40,
    right: 40,
    bottom: 30,
  };
  //Let some space for the axises to be displayed
  const w = width - margin.left - margin.right;
  const h = height - margin.top - margin.bottom;

  const rectsRef = data.map(() => ({ current: null }));

  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);

  //Then as usual with d3, declare all the scales
  const xScale: ScaleBand<string> = d3
    .scaleBand()
    .domain(data.map((d) => d.key))
    .range([margin.left, w])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const yScale: ScaleLinear<number, number, number> = d3
    .scaleLinear()
    .domain(domain)
    .range([h, margin.bottom]);

  //Create the d3 axises based on the scales
  const axisBottom = d3.axisBottom(xScale);
  const axisLeft = d3.axisLeft(yScale);

  //Create as many rect elements as your data length
  let rects: SVGRectElement[] = [];
  data.forEach((d, i) => {
    //@ts-ignore
    rects.push(<rect ref={rectsRef[i]} key={i} fill={d.color} />);
  });
  let gXAxis = (
      <g ref={xAxisRef} className="axis" transform={`translate(0, ${h})`} />
    ),
    gYAxis = (
      <g
        ref={yAxisRef}
        className="axis"
        transform={`translate(${margin.left}, 0)`}
      />
    );

  //All the d3 usual code (d3.select, ...) goes into useEffect
  //to be processed only when the refs are created in React's virtual DOM
  useEffect(() => {
    data.forEach((d, i) => {
      if (rectsRef[i].current) {
        d3.select(rectsRef[i].current)
          .datum(d)
          .transition()
          .duration(500)
          .attr("x", (d: TItem) => xScale(d?.key) || 0)
          .attr("y", (d: TItem) => yScale(d?.value))
          .attr("width", xScale.bandwidth())
          .attr("height", (d: TItem) => yScale(0) - yScale(d?.value));
      }
    });

    if (xAxisRef.current)
      d3.select(xAxisRef?.current).transition().duration(500).call(axisBottom);
    if (yAxisRef?.current)
      d3.select(yAxisRef?.current).transition().duration(500).call(axisLeft);
  });

  return (
    <div className="barChart">
      <h3>Your products</h3>
      <svg width={width} height={height}>
        {rects}
        {gXAxis}
        {gYAxis}
      </svg>
    </div>
  );
};

export default BarChart;
