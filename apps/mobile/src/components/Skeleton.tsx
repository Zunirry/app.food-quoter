import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowsWidth} from 'src/utils/dimension';

interface CommonSkeleton {
  number?: number;
}

interface Skeleton {}

export const SkeletonCard = (props: Skeleton) => {
  return (
    <View style={[style.container, style.skeletonAtTop]}>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={style.card}></View>
      </SkeletonPlaceholder>
    </View>
  );
};

export const CommonSkeleton = (props: CommonSkeleton) => {
  const {number = 3} = props;

  const elements: any = Array(number).fill(1, 0, 9);

  return (
    <View style={style.container}>
      <SkeletonPlaceholder borderRadius={4}>
        {elements.map((element: any) => (
          <View style={style.profile}>
            <View style={style.avatar} />
            <View style={style.textContainer}>
              <Image style={style.title} />
              <Text style={style.subTitle}>Hello world</Text>
            </View>
          </View>
        ))}
      </SkeletonPlaceholder>
    </View>
  );
};

const style = StyleSheet.create({
  skeletonAtTop: {marginTop: '20%'},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
    width: windowsWidth,
    justifyContent: 'center',
  },
  avatar: {width: 100, height: 100, borderRadius: 50},
  card: {
    width: windowsWidth / 1.2,
    height: 150,
    borderRadius: 20,
  },
  textContainer: {marginLeft: 30},
  title: {width: 120, height: 40},
  subTitle: {marginTop: 6, fontSize: 14, lineHeight: 40},
});
