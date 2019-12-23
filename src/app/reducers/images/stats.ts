
import { handleActions } from 'redux-actions';
import { STATS } from '../../constants'

export default handleActions({
  [STATS.LOAD]: (state = {}, action: any) => {
    return {
      ...state,
      [action.payload.id]: {
        isLoading: true,
        downloads: null,
        error: false,
      },
    }
  },
  [STATS.LOAD_SUCCESS]: (state = {}, action: any) => {
    const {
      payload: {
        imageId,
        downloads,
      }
    } = action

    return {
      ...state,
      [imageId]: {
        isLoading: false,
        downloads,
        error: false,
      },
    }
  },
}, {} as any);
