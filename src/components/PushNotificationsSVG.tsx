import * as React from 'react'
import Svg, { Path, Line, Rect } from 'react-native-svg'

export interface IPushNotificationsSVG {
  height: number
  width: number
}

export const PushNotificationsSVG: React.FC<IPushNotificationsSVG> = ({
  height,
  width
}) => {
  return (
    <Svg
      width={width.toString()}
      height={height.toString()}
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <Path
        d="M1023.52 538.859C1023.52 793.428 852.282 874.877 610.453 874.877C368.623 874.877 0 1176.45 0 921.878C0 667.308 332.877 0 574.706 0C816.536 0 1023.52 284.289 1023.52 538.859Z"
        fill="#01090A"
        fill-opacity="0.74"
      />
      <Rect
        x="429.626"
        y="143.33"
        width="594.374"
        height="196.694"
        rx="15"
        fill="#6C63FF"
      />
      <Path
        d="M586.725 242C586.725 277.899 557.637 307 521.755 307C485.874 307 456.786 277.899 456.786 242C456.786 206.101 485.874 177 521.755 177C557.637 177 586.725 206.101 586.725 242Z"
        fill="white"
      />
      <Line
        x1="608.715"
        y1="192.5"
        x2="827.169"
        y2="192.5"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="606.716"
        y1="249.5"
        x2="958.239"
        y2="249.5"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="606.716"
        y1="285.014"
        x2="958.239"
        y2="285.014"
        stroke="white"
        stroke-width="7"
      />
      <Rect
        x="192.91"
        y="414"
        width="594.374"
        height="196.694"
        rx="15"
        fill="#6C63FF"
      />
      <Path
        d="M350.008 512.67C350.008 548.568 320.92 577.67 285.039 577.67C249.157 577.67 220.069 548.568 220.069 512.67C220.069 476.771 249.157 447.67 285.039 447.67C320.92 447.67 350.008 476.771 350.008 512.67Z"
        fill="white"
      />
      <Line
        x1="371.998"
        y1="463.17"
        x2="590.452"
        y2="463.17"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="369.999"
        y1="520.17"
        x2="721.522"
        y2="520.17"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="369.999"
        y1="555.684"
        x2="721.522"
        y2="555.684"
        stroke="white"
        stroke-width="7"
      />
      <Rect
        x="332.672"
        y="684.33"
        width="594.374"
        height="196.694"
        rx="15"
        fill="#6C63FF"
      />
      <Path
        d="M489.77 783C489.77 818.899 460.683 848 424.801 848C388.919 848 359.831 818.899 359.831 783C359.831 747.101 388.919 718 424.801 718C460.683 718 489.77 747.101 489.77 783Z"
        fill="white"
      />
      <Line
        x1="511.76"
        y1="733.5"
        x2="730.215"
        y2="733.5"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="509.761"
        y1="790.5"
        x2="861.284"
        y2="790.5"
        stroke="white"
        stroke-width="7"
      />
      <Line
        x1="509.761"
        y1="826.014"
        x2="861.284"
        y2="826.014"
        stroke="white"
        stroke-width="7"
      />
    </Svg>
  )
}

export default PushNotificationsSVG
