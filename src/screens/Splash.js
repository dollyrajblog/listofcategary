import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const {height, width} = Dimensions.get('screen');
const Splash = ({navigation}) => {
  const [alldata, setAllList] = useState();
  const [listdata, setListData] = useState();
  useEffect(() => {
    ApiCall();
  }, []);
  const ApiCall = async () => {
    await axios({
      method: 'GET',
      url: 'https://dummyjson.com/products?limit=100',
    })
      .then(res => {
        console.log('==res', res);
        const data = res?.data?.products;
        setAllList(res?.data?.products);
        let newArray = [];
        let uniqueObject = {};
        for (let i in data) {
          objTitle = data[i]['category'];
          uniqueObject[objTitle] = data[i];
        }
        for (i in uniqueObject) {
          newArray.push(uniqueObject[i]);
        }
        // console.log(newArray, '===>');
        setListData(newArray);
      })
      .catch(err => {
        console.log('===ERror', err);
      });
  };
  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View
        style={{
          width: width * 0.5,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              data: alldata,
              category: item.category,
            })
          }>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              color: '#000',
              fontWeight: '800',
            }}>
            {item.category}
          </Text>
          <Image
            style={{height: 120, width: width * 0.4, marginVertical: 5}}
            source={{uri: item.images[0]}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: 'green',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '200',
              color: '#000',
            }}>
            {item.description}
          </Text>
          {item.stock < 50 ? (
            <Text style={{color: 'red', fontSize: 12, fontWeight: '600'}}>
              hurry! only a few items left
            </Text>
          ) : null}

          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: '#000',
            }}>{`discount:${item.discountPercentage}%`}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#000',
            }}>{`price:${item.price}`}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: '#000',
            }}>{`Rating:${item.rating}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {listdata !== null ? (
          <FlatList
            data={listdata}
            numColumns={2}
            renderItem={item => renderItem(item)}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
