import { Language } from 'prism-react-renderer'
import { CodeBlock } from '@features/code-block'

interface MDXCodeBlockProps {
  children: string
  className: string
}

export function MDXCodeBlock({ ...props }: MDXCodeBlockProps) {
  if (!props.className) return <code>{props.children}</code>

  const language = props.className.replace(/language-/, '') as Language

  return <CodeBlock language={language} code={props.children as string} />
}
