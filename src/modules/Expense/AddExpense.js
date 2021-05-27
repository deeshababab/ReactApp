import React, { useState, useEffect } from 'react';
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
import {
  TextInput,
  RadioButton,
  Menu,
  Provider,
  Divider,
  Button,
} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { fonts, colors } from '../../styles';
// import { Button } from '../../components';

export default function AddExpense(props) {
  const rnsUrl = 'https://reactnativestarter.com';
  const [checked, setChecked] = React.useState('first');
  
  const [date, setDate] = useState(new Date());
  const [Username, setUsername] = React.useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [cat, setcat] = React.useState([]);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  

  const onPressItemHandler = value => {
    setUsername(value);
    setOpen(false);
  };

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
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{
            width: 300,
            backgroundColor: 'transparent',
            margin: 0,
            padding: 0,
          }}
          label="Email"
          value={Username}
          // onChangeText={User => setUsername(User)}
        />
        <Menu
          style={{ marginTop: 70 }}
          visible={isOpen}
          onDismiss={() => setOpen(false)}
          anchor={(
            <Button
              style={{ marginTop: 25 }}
              color="#8DB600"
              icon="account"
              mode="contained"
              onPress={() => setOpen(true)}
            >
              Ingresar
            </Button>
          )}
        >
          <Menu.Item
            onPress={() => onPressItemHandler('Item 1')}
            title="Item 1"
          />
          <Menu.Item
            onPress={() => onPressItemHandler('Item 2')}
            title="Item 2"
          />
          <Menu.Item
            onPress={() => onPressItemHandler('Item 3')}
            title="Item 3"
          />
        </Menu>
      </View> */}
      <View style={{ zIndex: 100 }}>
        <Provider style={{ zIndex: 1000, position: 'absolute' }}>
          <View
            style={
              {
                // paddingTop: 50,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // position: "relative",
                // padding:50,
                // zIndex: 10,
              }
            }
          >
            <Menu
              visible={visible}
              style={{ zIndex: 999, position: 'absolute' }}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>Show menu</Button>}
            >
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
        </Provider>
      </View>
      
      {/* 
      <DatePicker
        style={{ width: 300, paddingLeft: 15, paddingTop: 15 }}
        date={date}
        onDateChange={setDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
      />
      <TextInput
        label="Paid To"
        style={styles.container}
        value="john"
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Amount"
        style={styles.container}
        value="$567.00"
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Paid By"
        style={styles.container}
        value="$567.00"
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Reference Bill No"
        style={styles.container}
        value="123bdf123"
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Reference Bill"
        type="file"
        style={styles.container}
        outlined
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Reference Bill"
        type="file"
        style={styles.container}
        // onChangeText={text => setText(text)}
      />
      <TextInput
        label="Description"
        type="file"
        style={styles.container}

        // onChangeText={text => setText(text)}
      />
      <Text style={{ paddingLeft: 15 }}>Tax Paid</Text>
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            // onPress={() => setChecked('first')}
          />
        </>
        <>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            // onPress={() => setChecked('second')}
          />
        </> */}
      {/* </View> */}

      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 15,
  },
});
