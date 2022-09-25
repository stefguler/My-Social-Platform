import { MetricData, MetricName, MetricContainer } from "../ProfileBox.styles";
import { useState } from "react";

export default function Metric(props) {
  const metricdata = props.input
  const metricname = props.name
  const onclick = props.onClick
  const id = props.id
  const [isActive, setIsActive] = useState(false)
  const styles = {
    active: {
      borderBottom: isActive ? "2px solid #C468FF" : "none",
    }
  };

  const handleClick = () => {
    // console.log('clicked on: ', metricname);
    // console.log('isActive? ', isActive);
    setIsActive(!isActive);
  }


  return (
    <>
      <MetricContainer
        style={styles.active}
        onClick={onclick}
        id={id}>
        <MetricData
          onClick={onclick}
          id={id}>
          {metricdata}
        </MetricData>
        <MetricName
          onClick={onclick}
          id={id}>
          {metricname}
        </MetricName>
      </MetricContainer>
    </>
  )

}