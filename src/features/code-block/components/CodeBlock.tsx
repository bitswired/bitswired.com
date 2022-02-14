import { useBooleanToggle } from '@mantine/hooks'
import * as Collapsible from '@radix-ui/react-collapsible'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import React from 'react'
import { styled, keyframes } from '@lib/stitches'

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
})

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
})

const CollapsibleContent = styled(Collapsible.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
})

interface CollapsibleCodeProps {
  children: JSX.Element | JSX.Element[]
}
function CollapsibleCode({ children }: CollapsibleCodeProps) {
  const [open, toggle] = useBooleanToggle(false)

  return (
    <Collapsible.Root open={open} onOpenChange={toggle}>
      <Collapsible.Trigger>
        {open ? 'Hide Code' : 'Show Code'}
      </Collapsible.Trigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible.Root>
  )
}

interface CodeMeta {
  title?: string
  filename?: string
  github?: string
  collapsible?: boolean
}

interface CodeBlockProps {
  code: string
  language: Language
  meta?: CodeMeta
}

const Pre = styled('pre', {
  textAlign: 'left',
  margin: '1em 0',
  whiteSpace: 'pre-wrap',
  fontFamily: '$mono',
  fontSize: '0.9em !important',
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$bgCode !important',
  overflowWrap: 'anywhere',
  wordBreak: 'break-all',
})

const Line = styled('div', {
  display: 'table-row',
})

// const LineNo = styled('span', {
//   display: 'table-cell',
//   textAlign: 'right',
//   paddingRight: '1em',
//   userSelect: 'none',
//   opacity: 1,
// })

const LineContent = styled('span', {
  display: 'table-cell',
})

export function CodeBlock({ code, language, meta }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ tokens, getLineProps, getTokenProps }) => (
        // <Box
        //   as="pre"
        //   className={className}
        //   style={style}
        //   css={{
        //     fontFamily: '$mono',
        //     fontSize: '0.85em !important',
        //     padding: '$4',
        //     borderRadius: '$md',
        //     backgroundColor: '$bgCode !important',
        //   }}
        <Pre>
          {meta?.collapsible ? (
            <CollapsibleCode>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {/* <LineNo>{i + 1}</LineNo> */}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </CollapsibleCode>
          ) : (
            <>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {/* <LineNo>{i + 1}</LineNo> */}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </>
          )}
        </Pre>
      )}
    </Highlight>
  )
}
