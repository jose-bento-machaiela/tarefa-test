import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AddIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    viewBox="0 0 95 94"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#0AABA6"
        d="M47.687 11a32.861 32.861 0 1 1 0 65.722 32.861 32.861 0 0 1 0-65.722Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.3}
        d="M58.227 43.4h-9.802v-9.8a.6.6 0 1 0-1.198 0v9.8h-9.802a.6.6 0 0 0 0 1.199h9.802V54.4a.599.599 0 1 0 1.198 0v-9.802h9.802a.6.6 0 0 0 0-1.198Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default AddIcon
