import Document, {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
            integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
            crossOrigin='anonymous'
          />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument