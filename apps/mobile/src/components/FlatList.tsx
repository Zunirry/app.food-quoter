import React, {ReactNode} from 'react';
import {FlatList as List, View} from 'react-native';

interface FlatList<T> {
  data: T[];
  children: (item: T) => ReactNode;
  keyExtractor?: (item: T, index: number) => string;
}

interface Item {
  children: React.JSX.Element | any;
  item: unknown;
}
const Item = <T,>({
  children,
  item,
}: {
  children: (item: T) => ReactNode;
  item: T;
}) => {
  return <View>{children(item)}</View>;
};
export const FlatList = <T,>({children, data, keyExtractor}: FlatList<T>) => {
  return (
    <View>
      <List
        data={data}
        renderItem={({item}) => <Item children={children} item={item} />}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
