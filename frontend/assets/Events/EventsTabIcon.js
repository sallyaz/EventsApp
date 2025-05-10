import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color }
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-calendar"
      {...props}
    >
      <Rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <Path d="M16 2L16 6" />
      <Path d="M8 2L8 6" />
      <Path d="M3 10L21 10" />
    </Svg>
  )
}

export default SvgComponent
