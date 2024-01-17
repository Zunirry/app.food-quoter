import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'src/components/FlatList';
import {Title} from 'src/components/Title';
import {HexaColor} from 'src/utils/color';

const windowsHeight = Dimensions.get('window').height;
const windowsWidth = Dimensions.get('window').width;
const fifthPartScreen = windowsHeight / 5;
const halfScreen = windowsHeight / 2;

interface Ingredients {
  name: string;
  brand: string;
  pricePerKg: number;
  quantityInKg: number;
}

const Header = () => {
  const style = StyleSheet.create({
    containerHero: {
      height: fifthPartScreen,
      backgroundColor: 'red',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      marginBottom: '10%',
    },
    circleHighlight: {
      position: 'absolute',
      bottom: 0,
      width: windowsWidth / 2,
      height: 45,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: HexaColor.DARK,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: HexaColor.SHADOW_WHITE,
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.6,
      shadowRadius: 3,
      elevation: 12,
    },
    image: {
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
  });

  return (
    <View style={style.containerHero}>
      <Image
        source={require('../../assets/images/donas.jpeg')}
        resizeMode="cover"
        style={style.image}
      />
      <View style={style.circleHighlight}>
        <Title>Donas</Title>
      </View>
    </View>
  );
};

const Body = ({
  data,
  isExpanded,
}: {
  data: Ingredients[];
  isExpanded: boolean;
}) => {
  const style = StyleSheet.create({
    containerList: {
      backgroundColor: '#0D1317',
      borderRadius: 10,
      margin: isExpanded ? 0 : '5%',
      flex: isExpanded ? 1 : undefined,
      width: isExpanded ? windowsWidth / 1.1 : 'auto',
      height: isExpanded ? windowsHeight / 1.2 : halfScreen,
      position: isExpanded ? 'absolute' : 'relative',
    },
    list: {paddingHorizontal: 10, paddingVertical: 5},
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },
    brandDetails: {
      color: HexaColor.PRIMARY,
      fontSize: 10,
      opacity: 0.7,
      margin: 0,
      padding: 0,
      fontStyle: 'italic',
    },
  });

  return (
    <View style={style.containerList}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator
        alwaysBounceVertical
        data={data}>
        {item => (
          <View style={style.list}>
            <View style={style.listItem}>
              <Title>{item.name}</Title>
              <Title>{`${String(item.quantityInKg)} kg`}</Title>
            </View>
            <View style={style.listItem}>
              <Text style={style.brandDetails}>{item.brand}</Text>
              <Text style={style.brandDetails}>${item.pricePerKg}</Text>
            </View>
          </View>
        )}
      </FlatList>
    </View>
  );
};

export const Details = () => {
  const ingredients: Ingredients[] = Array(15).fill({
    name: 'Masa',
    brand: 'Azteca',
    pricePerKg: 100,
    quantityInKg: 2,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: HexaColor.DARK,
      position: 'relative',
    },
    gradientContainer: {
      height: '100%',
      width: '100%',
      alignItems: isExpanded ? 'center' : 'stretch',
      justifyContent: isExpanded ? 'center' : 'flex-start',
    },
    closeExpanded: {
      backgroundColor: HexaColor.WHITE,
      position: 'absolute',
      top: 15,
      right: 10,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    openExpand: {
      marginHorizontal: '5%',
      alignItems: 'flex-end',
    },
  });

  return (
    <SafeAreaView style={style.container}>
      <LinearGradient
        colors={[HexaColor.DARK, HexaColor.DARK, '#131B20']}
        style={style.gradientContainer}>
        <Header />
        {isExpanded ? (
          <TouchableOpacity
            style={style.closeExpanded}
            onPress={() => setIsExpanded(false)}>
            <Text>X</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={style.openExpand}
            onPress={() => setIsExpanded(true)}>
            <Text style={{color: HexaColor.WHITE}}>Expandir</Text>
          </TouchableOpacity>
        )}
        <Body data={ingredients} isExpanded={isExpanded} />
      </LinearGradient>
    </SafeAreaView>
  );
};
