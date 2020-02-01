import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';

const Details = ({ show }) => (show ? (
  <div className="card mb-3">
    {show.image && <img className="card-img-top" src={show.image.original} alt={show.name} />}
    <div className="card-body">
      <h5 className="card-title">
        {show.name}
        {show.network && <small className="ml-2">{show.network.name}</small>}
      </h5>
      <p className="card-text">{ReactHtmlParser(show.summary)}</p>
    </div>
  </div>
) : (
  <div />
));

const mapStateToProps = ({ shows }) => ({
  show: shows.detail[shows.selected],
});

Details.propTypes = {
  show: PropTypes.any,
};

export default connect(mapStateToProps)(Details);
