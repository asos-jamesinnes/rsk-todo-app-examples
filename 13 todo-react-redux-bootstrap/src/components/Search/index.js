import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { searchShows, selectShow } from '../../actions';

// eslint-disable-next-line no-shadow
const Search = ({ shows, fetchShows, selectShow }) => {
  const [value, setValue] = useState('');
  const options = (shows.search[value] || []).map(id => shows.detail[id]);
  return (
    <>
      <div className="jumbotron mt-3">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <AsyncTypeahead
            autoFocus
            id="name"
            labelKey="name"
            filterBy={() => true}
            onSearch={(term) => {
              fetchShows(term);
              setValue(term);
            }}
            onChange={selectShow}
            placeholder="Search for a TV show..."
            isLoading={Boolean(value) && !shows.search[value]}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

Search.propTypes = {
  shows: PropTypes.any,
  fetchShows: PropTypes.any,
  selectShow: PropTypes.func,
};

const mapStateToProps = state => ({
  shows: state.shows,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: value => dispatch(searchShows(value)),
  selectShow: ([show]) => dispatch(selectShow(show && show.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
