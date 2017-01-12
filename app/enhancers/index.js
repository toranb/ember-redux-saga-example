import { compose } from 'redux';

var devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default compose(devtools);
