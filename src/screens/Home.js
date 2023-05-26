import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
const {height, width} = Dimensions.get('screen');
const list = [
  {label: 'sort by Rating', value: '1'},
  {label: 'sort by Discount', value: '2'},
  {label: 'sort by Price', value: '3'},
];

const Home = ({route}) => {
  console.log(route.params.data, route.params.category);
  const [data, setData] = useState(route.params.data);
  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View
        style={{
          width: width * 0.5,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
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
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, paddingTop: 10}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: '#000',
            fontWeight: '800',
            textTransform: 'capitalize',
          }}>
          {route.params.category}
        </Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={list}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          onChange={item => {
            console.log(item);
            // setValue(item.value);
            // setIsFocus(false);
          }}
        />
        <FlatList
          data={data}
          numColumns={2}
          renderItem={item => {
            console.log(item.item.category);
            if (item.item.category === route.params.category) {
              return renderItem(item);
            }
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
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
