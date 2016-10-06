import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    number: state.number
  };
};

var dispatchToActions = (dispatch) => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

var NumbersComponent = Ember.Component.extend({
    layout: hbs`
      {{number}}
      <button onclick={{action "add"}}>add</button>
    `
});

export default connect(stateToComputed, dispatchToActions)(NumbersComponent);
