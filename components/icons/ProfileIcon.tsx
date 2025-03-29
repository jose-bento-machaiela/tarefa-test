import * as React from "react"
import Svg, { SvgProps, Circle, G, Path, Rect } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    viewBox="0 0 45 45"
    {...props}
  >
    <Circle cx={22.5} cy={22.5} r={22.5} fill="#F6F6F6" />
    <Circle cx={22.5} cy={22.5} r={22.5} stroke="#F1F1F1" />
    <G stroke="#080808" strokeWidth={1.4} opacity={0.64}>
      <Path d="M22.349 22.581h2.058a6.893 6.893 0 0 1 6.893 6.893c0 .872-.706 1.578-1.578 1.578H17.034a1.578 1.578 0 0 1-1.578-1.578 6.893 6.893 0 0 1 6.893-6.893Z" />
      <Rect width={5.141} height={7.163} x={20.807} y={12.948} rx={2.57} />
    </G>
  </Svg>
)
export default ProfileIcon
