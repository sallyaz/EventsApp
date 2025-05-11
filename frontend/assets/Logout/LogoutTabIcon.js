import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48.000000 48.000000"
      {...props}
    >
      <Path
        d="M80 400c-18-18-20-33-20-160C60 58 59 60 203 60c105 0 147 13 147 45 0 23-20 28-39 11-15-14-37-16-112-14l-94 3v270l94 3c75 2 97 0 112-14 19-17 39-12 39 11 0 32-42 45-147 45-90 0-106-3-123-20z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
      <Path
        d="M325 309c-4-5 1-19 10-29 17-19 15-19-81-22-80-2-99-6-99-18s19-16 99-18c97-3 98-3 80-23-13-15-15-22-6-31 10-10 22-3 54 30l42 42-39 40c-41 42-50 46-60 29z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
    </Svg>
  )
}

export default SvgComponent
