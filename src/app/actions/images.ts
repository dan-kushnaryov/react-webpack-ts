import { createAction } from 'redux-actions'
import { IMAGES, STATS } from '../constants'
import { Images } from 'app/common/types';

type ImagesPayload = {
  imagesData: Images.ModelsList,
  page: number,
}

const loadImages = createAction(IMAGES.LOAD);
const refreshImages = createAction(IMAGES.LOAD_REFRESH);

const setImages = createAction<ImagesPayload>(IMAGES.LOAD_SUCCESS);

const loadImagesStats = createAction<Pick<Images.Model, 'id'>>(STATS.LOAD);
const setImagesStats = createAction<Images.Stats>(STATS.LOAD_SUCCESS);

export {
  loadImages,
  refreshImages,
  setImages,
  loadImagesStats,
  setImagesStats,
}