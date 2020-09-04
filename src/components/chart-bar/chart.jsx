import React from 'react';
import { ResponsivePie } from '@nivo/pie'

import {COLORS} from '../../utils/color.constans';


const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'pastel1' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabel="name"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor={`${COLORS.dark}`}
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor={`${COLORS.dark}`}
        animate={true}
        motionStiffness={90}
        motionDamping={15}


        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -60,
                itemWidth: 100,
                itemHeight: 24,
                itemTextColor: `${COLORS.dark}`,
                symbolSize: 24,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: `${COLORS.light}`
                        }
                    }
                ]
            }
        ]}
    />
)



export default MyResponsivePie;