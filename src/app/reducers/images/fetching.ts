import { handleActions } from 'redux-actions';
import { IMAGES } from '../../constants'

export default handleActions({
  [IMAGES.LOAD]: () => true,
  [IMAGES.LOAD_SUCCESS]: () => false,
}, false);