import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nike home page</title>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,1,300,2,601,600,401,501,400,700&f[]=quicksand@600,700,400,300,500,1&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
