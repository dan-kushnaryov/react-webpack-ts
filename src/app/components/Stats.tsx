import * as React from 'react';

namespace Stats {
  export type Props = {
    stats: {
      error: any,
      isLoading: boolean,
      downloads: any,
    }
  }
}

const Stats = (props: Stats.Props) => {
    const { stats } = props

    if (!stats) {
        // loading not yet started
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && `🤘 ${stats.downloads}`}
        </span>
    );
};

export default Stats;
