import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta charset="UTF-8" content="width=device-width"/>
                </Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}