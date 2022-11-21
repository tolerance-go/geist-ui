import { Image, Card, Link, Text } from 'components'
import Head from 'next/head'

export const meta = {
  title: '和 image 及 footer 一起使用',
}

export default () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Card width="400px">
        <Image
          src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
          height="200px"
          width="400px"
          draggable={false}
        />
        <Text h4 mb={0}>
          Geist UI React
        </Text>
        <Text type="secondary" small>
          Modern and minimalist React UI library.
        </Text>
        <Card.Footer>
          <Link block target="_blank" href="https://github.com/geist-org/geist-ui">
            Visit source code on GitHub.
          </Link>
        </Card.Footer>
      </Card>
    </>
  )
}
