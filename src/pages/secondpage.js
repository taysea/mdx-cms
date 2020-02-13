import React from 'react';
import Link from 'next/link';
import { Anchor, Box, grommet, Grommet, Heading, Paragraph } from 'grommet';
import { FormNext } from 'grommet-icons';

const SecondPage = () => {
  return (
    <Grommet theme={grommet} full>
      <Box pad="large">
        <Heading size="small">Second Page</Heading>
        <Paragraph>
          Next.js automatically handles the route based on your file structure.
        </Paragraph>
        <Box align="start">
          {/* Need to pass href because of:
           * https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child */}
          <Link href="/" passHref>
            <Anchor label="Back to Home page" icon={<FormNext />} reverse />
          </Link>
        </Box>
      </Box>
    </Grommet>
  );
};

export default SecondPage;
