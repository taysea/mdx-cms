import { Link } from 'next/link';
import PropTypes from 'prop-types';
import { Anchor, Paragraph } from 'grommet';

const internalLink = RegExp('^/.*');

export const components = {
  a: props =>
    internalLink.test(props.href) ? (
      <Link href={props.href} passHref>
        <Anchor {...props} />
      </Link>
    ) : (
      <Anchor {...props} />
    ),
  p: Paragraph,
};

components.a.propTypes = {
  href: PropTypes.string.isRequired,
};
