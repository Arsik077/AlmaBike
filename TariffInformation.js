import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { SharedElement } from 'react-native-shared-element';


const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const tariffData = [{ title: "Годовой абонемент", subTitle: "Стандарт, Льготный (50%), Льготный (20%)", },
{ title: "3 месяца", subTitle: "Стандарт, Льготный (50%), Льготный (20%)", },
{ title: "Турист", subTitle: "3 дня, 10 дней", }]

const Tariff = ({ tariff, key }) => {


  return (
    <TouchableOpacity style={styles.tariff}>
      <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{tariff.title}</Text>
        <Text style={{ fontSize: 11 }}>{tariff.subTitle}</Text>
      </View>
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <View style={styles.tariffIcon}>
          <Icon name={"format-list-bulleted"} size={30} color="rgba(0, 189, 183, 1)" />
        </View>
      </View>
    </TouchableOpacity>
  );
};


const TariffCard = ({ tariff }) => {
  const [selectedTariff, setSelectedTariff] = useState("Стандарт");

  return (
    <View style={styles.tariffCard}>
      <Text style={styles.tariffCardTitle}>
        Годовой абонемент
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 15 }}>
        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 100, width: 100 }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 58,
            height: 58,
            backgroundColor: selectedTariff == "Стандарт" ? 'rgba(0, 189, 183, 1)' : '#C4C4C4',
            borderRadius: 25,
            alignSelf: 'center',

          }} onPress={() => setSelectedTariff("Стандарт")}>
            <Icon size={30} color="#fff" type={'material'}
              name={'directions-bike'} />
          </TouchableOpacity>
          <Text style={{ flexWrap: "wrap", flexDirection: "row", textAlign: "center" }}>Стандарт</Text>
        </View>

        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 100, width: 100 }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 58,
            height: 58,
            backgroundColor: selectedTariff == "Льготный -50%" ? 'rgba(0, 189, 183, 1)' : '#C4C4C4',
            borderRadius: 25,
            alignSelf: 'center'
          }} onPress={() => setSelectedTariff("Льготный -50%")}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              -50%
            </Text>
          </TouchableOpacity>
          <Text style={{ flexWrap: "wrap", flexDirection: "row", textAlign: "center" }}>Льготный -50%</Text>
        </View>

        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 100, width: 100 }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 58,
            height: 58,
            backgroundColor: selectedTariff == "Льготный -20%" ? 'rgba(0, 189, 183, 1)' : '#C4C4C4',
            borderRadius: 25,
            alignSelf: 'center'
          }} onPress={() => setSelectedTariff("Льготный -20%")}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              -20%
            </Text>
          </TouchableOpacity>
          <Text style={{ flexWrap: "wrap", flexDirection: "row", textAlign: "center" }}>Льготный -20%</Text>
        </View>
      </View>

      <View style={{ alignSelf: "center", marginBottom: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center", color: "black", marginBottom: 10 }}>{selectedTariff}</Text>
        <Text style={{ textAlign: "center", color: "rgba(0, 189, 183, 1)" }}>
          За поездки свыше 30 минут будет списана дополнительная плата:
        </Text>
      </View>

      <View style={{
        backgroundColor: "#F8F8F6",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10
      }}>
        <Text>
          от 0 до 30 минут (0,5 часа) БЕСПЛАТНО* от 31 до 60 минут (до 1 часа) 100 ₸ от 61 до 120 минут (до 2 часов) 250 ₸ от 121 до 180 минут (до 3 часов) 500 ₸ от 181 минуты и каждый последующий час (от 3 часов) 1 000 ₸
        </Text>
      </View>

      <View>
        <Text style={{ textAlign: "center", color: "rgba(0, 189, 183, 1)", marginBottom: 15 }}>
          Поездки до 30 минут включены в стоимость абонемента
        </Text>

        <TouchableOpacity style={{
          backgroundColor: "#00BDB7",
          padding: 15,
          borderRadius: 100
        }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600", textAlign: "center" }}>
            Купить за 10 000
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};





export default function TariffInformation() {

  return (
    <>

      <Header backgroundColor={"#00BDB7"}
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff', fontSize: 30 } }}
        centerComponent={{ text: 'Тарифы', style: { color: '#fff', fontSize: 20 } }}
        containerStyle={{ backgroundColor: "#00BDB7", borderBottomEndRadius: 50, height: 80, flexDirection: 'column', justifyContent: 'center', marginTop: 30 }}
      />
      <ScrollView>
        <View style={styles.container}>
          <TariffCard />
          {tariffData.map((elem, index) =>
            <Tariff key={index.toString()} tariff={elem} />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tariff: {
    width: WINDOW_WIDTH - 35,
    height: 100,
    paddingVertical: 20,
    paddingLeft: 35,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 189, 183, 0.2)",
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20
  },
  tariffCard: {
    width: WINDOW_WIDTH - 20,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 5,
    marginBottom: 20,
    elevation: 7,
    alignSelf: "center",
    marginTop: 20
  },
  tariffIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 58,
    height: 58,
    backgroundColor: 'rgba(0, 189, 183, 0.4)',
    borderRadius: 100,
  },
  tariffCardTitle: {
    color: "black",
    fontSize: 21,
    fontWeight: "600",
    width: "40%",
    alignSelf: "center",
    marginBottom: 20,
    textAlign: "center",
  }
})


