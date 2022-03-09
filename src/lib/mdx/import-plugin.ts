import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'
import { visit } from 'unist-util-visit'

export const remarkExtractComponents = () => (tree: any) => {
  const components = new Set<string>()

  visit(tree, 'mdxJsxFlowElement', (mdxFlowElement) => {
    //console.log(mdxFlowElement.name)
    components.add(mdxFlowElement.name)
  })

  const tt = fromMarkdown(
    `export const components = ${JSON.stringify(Array.from(components))}`,
    {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown],
    }
  )
  const nn = tt.children[0]
  tree.children.push(nn)
}
