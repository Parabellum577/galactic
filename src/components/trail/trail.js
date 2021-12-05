import React from "react";
import { useTrail, a } from "@react-spring/web";
import * as styles from "./index.module.scss";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 30 },
    delay: 1000,
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height}}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
export default Trail;
