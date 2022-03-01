import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'
import { visit } from 'unist-util-visit'

export interface TocEntry {
  depth: number
  value: string
}

export const remarkToc = () => (tree: any) => {
  const headingNodes: TocEntry[] = []

  visit(tree, 'heading', (headingNode) => {
    const x = {
      depth: headingNode.depth - 1,
      value: '',
    }

    visit(headingNode, 'text', (textNode) => {
      x.value = textNode.value
    })

    headingNodes.push(x)
  })

  const tt = fromMarkdown(
    `export const toc = ${JSON.stringify(headingNodes)}`,
    {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown],
    }
  )
  const nn = tt.children[0]
  tree.children.push(nn)
}

export const rehypeToc = () => (tree: any) => {
  visit(
    tree,
    (x: any) => x.tagName && ['h2', 'h3', 'h4'].includes(x.tagName),
    (headingNode) => {
      console.log(headingNode.children[0].value)
      headingNode.properties.id = headingNode.children[0].value
        .toLowerCase()
        .replace(/\s+/g, '-')
    }
  )
}
