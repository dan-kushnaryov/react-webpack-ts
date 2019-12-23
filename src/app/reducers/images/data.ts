
import { handleActions } from 'redux-actions';
import { IMAGES } from '../../constants'

export default handleActions({
  [IMAGES.LOAD_SUCCESS]: <S>(state: S[] = [], action: any) => {
    const { imagesData: images, page } = action.payload

    return page === 1
      ? images
      : [...state, ...images];
  },
}, [] as any);