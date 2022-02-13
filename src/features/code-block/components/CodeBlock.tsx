import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { Box } from 'components/Box'

interface CodeBlockProps {
  code: string
  language: Language
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          className={className}
          style={style}
          css={{
            fontFamily: '$mono',
            fontSize: '1em !important',
            padding: '$4',
            borderRadius: '$lg',
            backgroundColor: '$bgCode !important',
          }}
        >
          {tokens.map((line, i) => (
            <Box as="div" key="jj" {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Box as="span" key="ll" {...getTokenProps({ token, key })} />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Highlight>
  )
}
