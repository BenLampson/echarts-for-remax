import * as React from 'react'
import BaseChart, { BaseChartProps, BaseChartType } from './BaseChart'

export interface EChart4RemaxProps extends Omit<BaseChartProps, 'type' | 'container'> {}
const EChart4Remax = (props: EChart4RemaxProps) => {
  if (process.env.REMAX_PLATFORM === 'wechat') {
    const { Canvas } = require('remax/wechat')
    return <BaseChart type={BaseChartType.CANVAS_2D} container={Canvas} {...props} />
  }

  if (process.env.REMAX_PLATFORM === 'ali') {
    const { Canvas } = require('remax/ali')
    return <BaseChart type={BaseChartType.CANVAS_CONTEXT} container={Canvas} {...props} />
  }

  if (process.env.REMAX_PLATFORM === 'toutiao') {
    const { Canvas } = require('remax/toutiao')
    return <BaseChart type={BaseChartType.CANVAS_CONTEXT} container={Canvas} {...props} />
  }

  return <BaseChart {...props} />
}

export default EChart4Remax
