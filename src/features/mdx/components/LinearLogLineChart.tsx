import React from 'react'
import {
  Box,
  RadioGroup,
  RadioGroupRadio,
  RadioGroupIndicator,
} from '@components/core'
import { LineChart, LineChartProps } from '@features/charts'

type YScaleMode = 'log' | 'linear'

export function LinearLogLineChart(props: LineChartProps): JSX.Element {
  const [yScaleMode, setYScaleMode] = React.useState('linear')

  return (
    <Box
      css={{
        backgroundColor: '$gray4',
        borderRadius: '$md',
        padding: '$4',
        my: '2rem',
      }}
    >
      <LineChart {...props} yScale={{ type: yScaleMode as YScaleMode }} />
      <RadioGroup
        onValueChange={setYScaleMode}
        value={yScaleMode}
        defaultValue="linear"
      >
        <Box css={{ display: 'flex', gap: '$4' }}>
          <Box
            css={{
              display: 'flex',
              margin: '10px 0',
              alignItems: 'center',
              gap: '$2',
            }}
          >
            <RadioGroupRadio value="linear" id="r1">
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Box> Linear Scale </Box>
          </Box>

          <Box
            css={{
              display: 'flex',
              margin: '10px 0',
              alignItems: 'center',
              gap: '$2',
            }}
          >
            <RadioGroupRadio value="log" id="r1">
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Box> Log Scale </Box>
          </Box>
        </Box>
      </RadioGroup>
    </Box>
  )
}
