import React from 'react';
import { View, FlatList } from 'react-native';

const VirtualizedList: React.FunctionComponent = ({ children }) => {
  return (
    <FlatList
      style={{
        flex: 1,
        overflow: 'scroll',
      }}
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

export default VirtualizedList;
