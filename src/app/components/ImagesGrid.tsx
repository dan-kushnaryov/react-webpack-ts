import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { images as imagesActions } from '../actions';
import { Images } from '../common/types';
import Stats from './Stats';

export namespace ImagesGrid {
  export interface State {
    imagesData: Images.ModelsList,
    imagesFetching: boolean,
    imagesStats: any,
  }

  export interface Props extends State {
    loadImages: () => void;
    refreshImages: () => void;
  }
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class ImagesGrid extends React.Component<ImagesGrid.Props> {
  componentDidMount () {
    this.props.refreshImages();
  }

  render() {
    const { imagesData: images, loadImages, imagesFetching, imagesStats } = this.props;

    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <Stats stats={imagesStats[image.id]} />
                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                    </div>
                ))}
            </section>
            {/* {error && <div className="error">{JSON.stringify(error)}</div>} */}
            <button onClick={() => !imagesFetching && loadImages()}>
                Load More
            </button>
        </div>
    );
  }
}

const mapStateToProps = (state: ImagesGrid.State) => {
  const { imagesData, imagesFetching, imagesStats } = state

  return { imagesData, imagesFetching, imagesStats }
}

const mapDispatchProps = (dispatch: Dispatch) => ({
  loadImages: () => dispatch(imagesActions.loadImages()),
  refreshImages: () => dispatch(imagesActions.refreshImages()),
})

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(ImagesGrid);

