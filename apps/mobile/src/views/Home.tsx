import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Card} from 'src/components/Card';
import {FlatList} from 'src/components/FlatList';
import {Title} from 'src/components/Title';
import {HexaColor, RGBAColor} from 'src/utils/color';

interface Dishes {
  name: string;
  icon?: string | any | null;
  soldAveragePerWeek: number;
  earning: number;
}

const windowsWidth = Dimensions.get('window').width;

const Home = () => {
  const dishes: Dishes[] = Array(10).fill({
    name: 'Donas',
    // icon: donasImg,
    soldAveragePerWeek: 150,
    earning: 100,
  });

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <FlatList
          data={dishes}
          keyExtractor={({name}, key) => `${name}-${key}`}>
          {(item: Dishes) => (
            <View style={style.flatItem}>
              <TouchableOpacity>
                <Card>
                  <View style={style.bodyWrapper}>
                    <Image
                      source={require('../assets/images/donas.jpeg')}
                      style={style.coverImage}
                      resizeMode="cover"
                    />
                    <View style={style.titleWrapper}>
                      <Title>{item.name}</Title>
                    </View>
                    <View style={style.earningWrapper}>
                      <Text style={style.statistics}>Ganancias</Text>
                      <Text style={style.statistics}>{item.earning}</Text>
                    </View>
                    <View style={style.soldPerWeeksWrapper}>
                      <Text style={style.statistics}>Semanal</Text>
                      <Text style={style.statistics}>
                        {item.soldAveragePerWeek}
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          )}
        </FlatList>
      </ScrollView>
      <TouchableOpacity style={style.buttonAdd}>
        <Icon name="activity" size={30} color="blue" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HexaColor.DARK,
    position: 'relative',
  },
  flatItem: {
    marginHorizontal: 15,
    marginVertical: 30,
    height: 160,
    borderRadius: 8,
    shadowColor: '#333',
    shadowOffset: {
      width: 8,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 12,
  },
  bodyWrapper: {
    width: '100%',
    height: '100%',
  },
  coverImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 5,
    position: 'relative',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    right: '50%',
    left: '50%',
    transform: [{translateX: parseInt('-50%', 22)}],
    width: windowsWidth * 0.5,
    height: 45,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: HexaColor.DARK,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: HexaColor.SHADOW_WHITE,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 12,
  },
  earningWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: windowsWidth * 0.45,
    height: 45,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 5,
    backgroundColor: RGBAColor.DARK,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: HexaColor.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 12,
  },
  soldPerWeeksWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: windowsWidth * 0.45,
    height: 45,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 5,
    backgroundColor: RGBAColor.DARK,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: HexaColor.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 12,
  },
  statistics: {
    color: HexaColor.PRIMARY,
    fontWeight: '500',
    fontSize: 16,
  },
  buttonAdd: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: HexaColor.NAVYBLUE,
    borderRadius: 20,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: HexaColor.PRIMARY,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default Home;
