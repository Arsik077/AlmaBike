import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';/* 
import { MMKV } from 'react-native-mmkv'; */

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const KEYBOARD_WIDTH = WINDOW_WIDTH - 50;
const clearButton = { label: 'remove', value: 'remove' };
const keyboardConfig = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
  {
    label: '6',
    value: 6,
  },
  {
    label: '7',
    value: 7,
  },
  {
    label: '8',
    value: 8,
  },
  {
    label: '9',
    value: 9,
  },
];

const Key = ({ label, value, onPress }) => {
  const handlePress = () => {
    onPress({ label, value });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.keyView}>
      <Text style={styles.keyText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function SmsConfirmation() {
  const [code, setCode] = useState('');
  const [len, setLen] = useState(1);
  const [codeLength, setCodeLength] = useState(["panorama-fish-eye", "panorama-fish-eye", "panorama-fish-eye", "panorama-fish-eye"]);

  const handleCodeLenthPlus = () => {
    if (len != 5) {
      setLen(len + 1);
      setCodeLength(codeLength.slice(len))
      for (var i = 0; i < len; i++) {
        setCodeLength(codeLength => [...codeLength, "circle"]);
      }
      setCodeLength(codeLength => [...codeLength.reverse()]);
    }
  };




  const handleCodeLenthMinus = () => {
    setCodeLength(codeLength.slice(1))
    setLen(len - 1);
    setCodeLength(codeLength => [...codeLength, "panorama-fish-eye"]);
  };


  const handleKeyPress = (key) => {
    if (typeof key.value === 'number' && code.length < 4) {
      setCode(code + key.value);
      handleCodeLenthPlus();
    }
    if (key.value === 'remove' && code.length > 0) {
      setCode(code.slice(0, -1));
      handleCodeLenthMinus();
    }
    /*     if (code.length == 3) {
          storage.set('user_code', code);
        } */
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: WINDOW_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexGrow: 2
      }}>
        <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', width: KEYBOARD_WIDTH, marginBottom: 30 }}>
          <Text style={styles.title}>Fingerprint или код доступа</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {
              codeLength.map((elem, index) =>
                <Icon type="material" key={index.toString()} iconStyle={{ marginHorizontal: 5 }} name={elem} color="black" size={30} />
              )
            }
          </View>
          <Text>{code}</Text>
        </View>

        <View style={styles.keyboard}>
          {keyboardConfig.map((key) => (
            <Key {...key} onPress={handleKeyPress} />
          ))}
        </View>
        <View style={styles.keyboardLastLine}>
          <Text style={{
            margin: 15,
            width: 75,
            height: 75,
          }} />
          <Key label={0} value={0} onPress={handleKeyPress} />
          <TouchableOpacity onPress={() => handleKeyPress(clearButton)} style={{
            margin: 15,
            width: 75,
            height: 75,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon type="material-icons-outlined" name="backspace" color="black" size={30} />
            {/* <Text style={styles.keyText}>⌫</Text> */}
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: 25, flexGrow: 1 }}>
        <TouchableOpacity>
          <Text>Забыли код доступа?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7A806',
    height: WINDOW_HEIGHT,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginBottom: 20
  },
  keyboard: {
    width: KEYBOARD_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  keyView: {
    marginVertical: 10,
    marginHorizontal: 15,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100
  },
  keyText: {
    fontSize: 30,
    color: 'black'
  },
  keyboardLastLine: {
    width: KEYBOARD_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
