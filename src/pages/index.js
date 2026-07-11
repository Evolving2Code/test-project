import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Project</title>
        <meta name="description" content="A practice application" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h1>Hello Practice App!</h1>
          <p style={{ fontSize: '1.2rem' }}>
            This is a starting point for our project.
          </p>
          <a
            href="https://vercel.com/new?name=test-project&style=auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy to Vercel
          </a>
        </div>
      </body>
    </>
  )
}
