import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const MenuIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={52}
    fill="none"
    viewBox="0 0 50 47"
    {...props}
  >
    <G
      stroke="#141414"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.8}
    >
      <Path d="M30.014 31.077H17M30.512 15.077H17.498M39.17 23.077H17.499" />
    </G>
  </Svg>
)
export default MenuIcon
