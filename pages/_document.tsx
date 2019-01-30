import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <script
            crossOrigin="anonymous"
            src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=default%2CIntersectionObserver%2CIntersectionObserverEntry"
          >
          </script>
          <NextScript />
        </body>
      </html>
    );
  }
}
