import Radio from './Radio';
import {connect} from 'react-redux';

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const mapStateToRadioProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchToRadioProps = (
  dispatch,
  ownProps
) => {
  return {
    onChange: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
}
const FilterRadio = connect(
  mapStateToRadioProps,
  mapDispatchToRadioProps
)(Radio);

export default FilterRadio;
