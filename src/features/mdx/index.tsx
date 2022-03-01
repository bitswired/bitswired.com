import dynamic from 'next/dynamic'

export const LinearLogLineChart = dynamic(() =>
  import('./components/LinearLogLineChart').then(
    (module: any) => module.LinearLogLineChart
  )
)

export { MDXCodeBlock } from './components/MDXCodeBlock'
export { mdxGeneralComponents } from './components/general-components'
export * from './components/blocks'
