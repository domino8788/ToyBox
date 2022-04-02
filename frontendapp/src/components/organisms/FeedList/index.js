import React from 'react';

import { Linear } from 'components/molecules/List/Layout';
import { FeedItem } from 'components/molecules/List/Item';

const FeedList = ({ data, onScrolledToBottom, header, onItemPress }) => {
  return <Linear data={data} item={FeedItem} header={header} onScrolledToBottom={onScrolledToBottom} onItemPress={onItemPress} />;
};

export default React.memo(FeedList);
