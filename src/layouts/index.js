import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@flickr" />
      <meta
        name="twitter:title"
        content="Small Island Developing States Photo Submission"
      />
      <meta name="twitter:description" content="View the album on Flickr." />
      <meta
        name="twitter:image"
        content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
      />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
