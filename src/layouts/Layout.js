import React from 'react';
import { Box } from 'grommet';

export const Layout = ({ ...rest }) => {
  return <Box pad="medium" align="start" {...rest} />;
};
