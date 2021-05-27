import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fetch from 'node-fetch';
import Moment from 'moment';
import url from '../../../Axios';

import { fonts, colors } from '../../styles';
import { Button } from '../../components';

export default function SingleExpense({ route, navigation }) {
  const filetype = (type, file_value) => {
    if (type === 'jpg') {
      return file_value;
    } else if (type === 'png') {
      return file_value;
    } else if (type === 'jpeg') {
      return file_value;
    } else if (type === 'pdf') {
      return pdf;
    } else if (type === 'docx') {
      return doc;
    } else if (type === 'exe') {
      return excel;
    } else if (type === 'zip') {
      return zip;
    }
  };
  const rnsUrl = 'https://reactnativestarter.com';

  const { itemId, otherParam } = route.params;
  const [expenseList, setexpenseList] = React.useState([]);
  const [expensedata, setexpensedata] = React.useState([]);
  const [account_name, setaccount_name] = React.useState('');
  const [file_path, setfile_path] = React.useState('');
  React.useEffect(() => {
    fetch(url + 'expense/' + itemId)
      .then(result => result.json())
      .then(data => {
        // const array = Object.values(data);
        setexpensedata(data[0].column_data);
        console.log(data[0].column_data);
        // const x = {foo: 11, bar: 42};
        // const result = Object.keys(data).map(key => ({[key]: x[key]}));
        setfile_path(data.referrenceImgUrl);

        setexpenseList(data[0]);
      });
  }, []);
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log(`Don't know how to open URI: ${rnsUrl}`);
      }
    });
  };

  return (
    <ScrollView>
      {/* <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.container}
      > */}

      <TouchableOpacity
        // key={item.id}
        style={styles1.itemThreeContainer}
        // onPress={() => this._openArticle(item)}
      >
        <>
          <View style={styles1.itemThreeSubContainer}>
            <View style={styles1.itemThreeContent}>
              <Text style={styles1.itemThreeTitle}>
                Payment Account:{expenseList.payment_account?.name}
              </Text>

              <View>
                <Text style={[styles1.itemThreeTitle, { paddingTop: 15 }]}>
                  Description
                </Text>

                <Text
                  color="#19e7f7"
                  hCenter
                  size={15}
                  style={{ paddingLeft: 15, lineHeight: 25 }}
                >
                  {' '}
                  {expenseList.description}
                </Text>
                <Text
                  style={[
                    styles1.itemThreeTitle,
                    { paddingTop: 15, fontSize: 15 },
                  ]}
                >
                  Paid To:
                </Text>
                <Text
                  color="#000"
                  hCenter
                  size={15}
                  style={{ paddingLeft: 15, lineHeight: 25 }}
                >
                  {expenseList.paid_to}
                </Text>
                <Text
                  style={[
                    styles1.itemThreeTitle,
                    { paddingTop: 15, fontSize: 15 },
                  ]}
                >
                  Date:
                </Text>
                <Text
                  style={[styles1.itemThreeSubtitle, { paddingLeft: 15 }]}
                  numberOfLines={1}
                >
                  {Moment(expenseList.paid_date).format('d MMM YYYY')}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles1.itemThreeHr]} />

          {expensedata.map((content, index) => {
            return (
              <View style={{padding:15}}>
                <Text
                  style={[
                    styles1.itemThreeTitle,
                    { padding: 15, fontSize: 15 },
                  ]}
                >
                  {content.column.name}
                </Text>
                {content.column.type === 'file' ? (
                  <View
                    style={[styles1.itemThreeSubtitle, { paddingLeft: 15 }]}
                    numberOfLines={1}
                  >
                    <Image
                      source={{
                        uri: filetype(
                          content.file.split('.')[3],
                          content.file,
                          index,
                        ),
                      }}
                      style={{
                        marginLeft: 15,
                        width: 100,
                        height: 100,
                        padding: 15,
                      }}
                    />
                  </View>
                ) : (
                  <Text
                    style={[styles1.itemThreeSubtitle, { paddingLeft: 15 }]}
                    numberOfLines={1}
                  >
                    {content.column.type==='date'?Moment(content.value).format('d MMM YYYY'):content.value}
                  </Text>
                )}
              </View>
            );
          })}
          <View style={styles1.itemThreeHr} />
          <View style={styles1.itemThreeSubContainer}>
            <Image
              source={{
                uri: file_path,
              }}
              style={{ marginLeft: 15, width: 100, height: 100 }}
            />
            <View style={styles1.itemThreeContent}>
              <View>
                <Text style={styles1.itemThreeBrand}>
                  Bill No:{expenseList.description}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.primaryRegular,
                    fontSize: 14,
                    paddingLeft: 15,
                    color: '#000',
                  }}
                >
                  Amount: {expenseList.amount}
                </Text>
              </View>
            </View>
          </View>
        </>
      </TouchableOpacity>

      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
    paddingLeft: 15,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    padding: 15,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    paddingLeft: 15,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    paddingTop: 15,
    paddingLeft: 15,
    textAlign: 'left',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: 'white',
  },
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 25,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
});