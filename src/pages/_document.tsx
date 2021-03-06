import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { CONFIG } from '@config'
import { getCssText } from '@lib/stitches'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Open+Sans:wght@300;400;700;800&family=Roboto+Serif:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href={CONFIG.api.assets.basePath} />
          <link rel="dns-prefetch" href={CONFIG.api.assets.basePath} />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://ssapi.bitswired.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKN4ZB3')`,
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://ssapi.bitswired.com/ns.html?id=GTM-NKN4ZB3"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
