// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/269.jpg")}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={{ width: 100, height: 100, marginTop: 90, marginLeft: 40 }}
            source={require("./assets/logo.png")}
          ></Image>
          <Text
            style={{
              marginTop: 130,
              fontSize: 25,
              marginRight: 120,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            DOMINO'S PIZZA
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={{
            width: 300,
            height: 50,
            backgroundColor: "red",
            marginTop: 500,
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            backgroundColor: "red",
            marginTop: 30,
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen() {
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", flex: 1 }}
      source={require("./assets/piz.jpg")}
    >
      <ScrollView>
        <TouchableOpacity
          style={{
            width: 390,
            height: 250,
            backgroundColor: "black",
            opacity: 0.8,
            alignSelf: "center",
            marginTop: 30,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              BUY 2 LARGE{"\n"}MUSHROOM PIZZA{"\n"}AND GET A BOX OF{"\n"}WINGS
            </Text>
            <View
              style={{
                width: 150,
                height: 2,
                backgroundColor: "green",
                marginLeft: 10,
                marginTop: 30,
              }}
            />
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              Any Extra Item For $6.99
            </Text>
          </View>
          <Image
            style={{ width: 200, height: 200, marginTop: 25 }}
            source={require("./assets/mush.png")}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 1,
              width: 70,
              backgroundColor: "#fff",
              marginLeft: 20,
            }}
          />

          <Text
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            START AN ORDER
          </Text>

          <View
            style={{
              height: 1,
              width: 70,
              backgroundColor: "#fff",
              marginRight: 20,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.8,
            width: 350,
            height: 150,
            alignSelf: "center",
            marginTop: 40,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#fff", marginLeft: 20, marginTop: 10 }}>
            Your Last Order
          </Text>
          <Text style={{ color: "#fff", marginLeft: 20, marginTop: 10 }}>
            Large Hand tossed Pizza Create Your Own With{"\n"}BBQ Sauce, 6 Chkn
            Wings,450 cal/slice{" "}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#fff", marginTop: 40, marginLeft: 20 }}>
              See All
            </Text>
            <Text
              style={{
                color: "red",
                marginTop: 40,
                marginRight: 20,
                fontWeight: "bold",
              }}
            >
              View Order
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 200,
            width: 350,
            backgroundColor: "black",
            opacity: 0.5,
            marginTop: 20,
            borderRadius: 10,
            marginLeft: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 70,
              marginLeft: 15,
            }}
          >
             MINT PEPPERONI {"\n"}
            <Text style={{ color: "red", fontSize: 15 }}>
              Only For $7.99
            </Text>{" "}
          </Text>
          <Image
            style={{ width: 150, height: 150, marginTop: 20, marginRight: 10 }}
            source={require("./assets/mush.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{width:350,height:200, backgroundColor:'#000',opacity:0.5,marginTop:20,marginLeft:30,borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
        <Image style={{width:180,height:180,marginTop:0}} source={require('./assets/veggie.png')}></Image>
          <Text style={{color:'#fff',marginTop:60,marginRight:10,fontWeight:'bold',fontSize:20}}>Veggie Pizza{"\n"}<Text style={{color:'red',fontSize:15}}>For Only $3.99</Text></Text>


        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {},
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Overview",
        headerShown: false,
      },
    },
    Details: {
      screen: DetailsScreen,
      options: {
        title: "DOMINO'S PIZZA",
        headerStyle: { backgroundColor: "#007FFF" },
      },
    },
  },
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
