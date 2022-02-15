import { Language } from 'prism-react-renderer'
import { CodeBlock } from '@features/code-block'

function processMeta(code: string) {
  const metaStringRe = /---.*---/ms
  const metaString = code.match(metaStringRe)

  if (metaString) {
    const strippedCode = code.replace(metaStringRe, '')
    const propsRe = /((.*)=(.*))/g
    const t = metaString[0].matchAll(propsRe)
    const meta: any = {}
    Array.from(t).map((res) => {
      meta[res[2]] = res[3]
    })

    meta.collapsible = meta.collapsible === 'true' ? true : false

    return { code: strippedCode, meta: meta }
  }
  return { code }
}

interface MDXCodeBlockProps {
  children: string
  className: string
}

export function MDXCodeBlock({ ...props }: MDXCodeBlockProps) {
  if (!props.className) return <code>{props.children}</code>

  const language = props.className.replace(/language-/, '') as Language

  const { code, meta } = processMeta(props.children)

  return <CodeBlock language={language} code={code} meta={meta} />
}
