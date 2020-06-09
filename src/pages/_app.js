import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import React from 'react';
import { Grommet, grommet } from 'grommet';
import { components } from '../components';
import { Layout } from '../layout';

const capitalizeFLetter = word => {
  return word.replace(/^./, word[0].toUpperCase());
};

const formatString = str => {
  const formattedString = [];
  const splitString = str.split('-');
  splitString.forEach(s => formattedString.push(capitalizeFLetter(s)));
  return formattedString.join(' ');
};

function App({ Component, pageProps, router }) {
  const route = router.route.split('/');
  // final array item is the title of page we are on
  const title =
    route[route.length - 1].length && formatString(route[route.length - 1]);

  // second to last array item is the topic
  const topic =
    route[route.length - 2] &&
    route[route.length - 2].length &&
    formatString(route[route.length - 2]);

  return (
    <Grommet theme={grommet} full>
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </Grommet>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
