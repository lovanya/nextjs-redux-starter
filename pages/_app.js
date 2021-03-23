import 'styles/common.scss';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { ReactReduxContext } from 'react-redux';
import styledNormalize from 'styled-normalize';

import { withRouter } from 'next/router';
import { Fragment } from 'react';
import App from 'next/app';

import { wrapper } from 'store';
import Layout from 'components/Layout';
import theme from 'theme';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const title = 'Next.js Example';
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={title} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component router={router} {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default wrapper.withRedux(withRouter(MyApp));
