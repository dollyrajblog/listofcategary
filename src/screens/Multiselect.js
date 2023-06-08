import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const data = [
  {
    categoryid: 1,
    categoryname: 'Brand',
    Multiselect: true,
    options: [
      {
        optionId: 11,
        optionName: 'Puma',
      },
      {
        optionId: 12,
        optionName: 'NIKE',
      },
      {
        optionId: 13,
        optionName: 'Adidas',
      },
      {
        optionId: 14,
        optionName: 'redTap',
      },
    ],
  },
  {
    categoryid: 2,
    categoryname: 'Color',
    Multiselect: true,
    options: [
      {
        optionId: 21,
        optionName: 'Black',
      },
      {
        optionId: 22,
        optionName: 'Blue',
      },
      {
        optionId: 23,
        optionName: 'White',
      },
    ],
  },
  {
    categoryid: 3,
    categoryname: 'size',
    Multiselect: false,
    options: [
      {
        optionId: 31,
        optionName: '2',
      },
      {
        optionId: 32,
        optionName: '3',
      },
      {
        optionId: 33,
        optionName: '4',
      },
      {
        optionId: 34,
        optionName: '5',
      },
      {
        optionId: 35,
        optionName: '6',
      },
      {
        optionId: 36,
        optionName: '7',
      },
    ],
  },
  {
    categoryid: 4,
    categoryname: 'Occasion',
    Multiselect: false,
    options: [
      {
        optionId: 41,
        optionName: 'Casual',
      },
      {
        optionId: 42,
        optionName: 'Party',
      },
      {
        optionId: 43,
        optionName: 'Wedding',
      },
    ],
  },
];
const Multiselect = () => {
  const [storeSelect, setStoreSelect] = useState({
    1: [11, 12],
    2: [21],
    3: 33,
    4: 42,
  });
  const [state, setState] = useState(false);

  //   ====== ONPress function ======
  const ONPressFun = (data, multiselect, categoryid) => {
    if (!multiselect) {
      storeSelect[categoryid] = data.optionId;
    } else {
      if (storeSelect.hasOwnProperty(categoryid)) {
        let varient = storeSelect[categoryid];
        if (Object.values(varient).includes(data.optionId)) {
          const index = storeSelect[categoryid].indexOf(data.optionId);
          if ((index > -1) & (storeSelect[categoryid].length !== 1)) {
            storeSelect[categoryid].splice(index, 1);
          }
        } else {
          storeSelect[categoryid] = varient;
          storeSelect[categoryid].push(data.optionId);
        }
      } else {
        storeSelect[categoryid] = [data.optionId];
      }
    }
    console.log(storeSelect);
    setState(!state);
  };
  // ===== Element color change if select the element ===
  const colorChange = (optionid, categoryid) => {
    if (storeSelect.hasOwnProperty(categoryid)) {
      if (typeof storeSelect[categoryid] === 'object') {
        if (Object.values(storeSelect[categoryid]).includes(optionid)) {
          return true;
        } else {
          return false;
        }
      } else {
        if (storeSelect[categoryid] === optionid) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return true;
    }
  };
  // ===== Second flatlist renderitem2 =====
  const renderItem2 = ({item}, multiselect, categoryid) => {
    return (
      <View
        style={{
          backgroundColor: colorChange(item.optionId, categoryid)
            ? '#000'
            : 'lightpink',
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onPress={() => ONPressFun(item, multiselect, categoryid)}>
          <Text
            style={{
              color: colorChange(item.optionId, categoryid) ? '#fff' : '#000',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.optionName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  // ===== First flatlist renderitem1 =====
  const renderItem1 = ({item}) => {
    let multiselect = item.Multiselect;
    let categoryid = item.categoryid;
    return (
      <View style={{margin: 10}}>
        <Text
          style={{
            backgroundColor: 'blue',
            padding: 5,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {item.categoryname}
        </Text>
        <FlatList
          data={item.options}
          renderItem={item => renderItem2(item, multiselect, categoryid)}
          horizontal
          showsHorizontalScrollIndicator
          extraData={storeSelect}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginVertical: 10,
            fontSize: 30,
          }}>
          Filter
        </Text>
        <FlatList
          extraData={storeSelect}
          data={data}
          renderItem={item => renderItem1(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Multiselect;
