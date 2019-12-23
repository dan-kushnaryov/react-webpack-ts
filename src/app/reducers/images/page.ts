
import { handleActions } from 'redux-actions';
import { IMAGES } from '../../constants'

export default handleActions({
  [IMAGES.LOAD_SUCCESS]: (state: number) => {
    return ++state
  },
  [IMAGES.LOAD_REFRESH]: () => 1
}, 1);