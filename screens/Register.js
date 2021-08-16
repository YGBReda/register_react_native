import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, Button } from "react-native-elements";
import { images } from "../constants";
const Register = props => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingTop: 40,
          backgroundColor: "#fff",
          alignItems: "center"
        }}
      >
        <Button
          icon={<Icon name="arrow-back-outline" size={25} color="#333" />}
          buttonStyle={{
            backgroundColor: "#fff"
          }}
          containerStyle={{
            position: "absolute",
            zIndex: 9,
            top: 10,
            left: 10
          }}
          onPress={() => navigation.navigate("Home")}
        />
        <Image
          source={images.register}
          resizeMode="contain"
          style={{
            height: "90%",
            width: "90%"
          }}
        />
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: "#fff",
          alignItems: "center",
          paddingHorizontal: 20
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#636262",
            padding: 20,
            marginBottom: 10
          }}
        >
          Create New Account
        </Text>
        <View>
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5
            }}
            inputStyle={{
              fontSize: 14
            }}
            placeholder="Name"
            leftIcon={<Icon name="person-sharp" size={18} color="#cacaca" />}
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5
            }}
            inputStyle={{
              fontSize: 14
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Phone"
            leftIcon={<Icon name="call-sharp" size={18} color="#cacaca" />}
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 10
            }}
            inputStyle={{
              fontSize: 14
            }}
            maxLength={20}
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock-closed" size={18} color="#cacaca" />}
          />
          <View
            style={{
              paddingHorizontal: 10
            }}
          >
            <Button
              title="REGISTER"
              buttonStyle={{
                backgroundColor: "#8462f5",
                padding: 12,
                width: "100%",
                borderRadius: 40
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              paddingHorizontal: 20
            }}
          >
            <Text
              style={{
                color: "#bfbfbf"
              }}
            >
              Aleardy have an account ?
            </Text>
            <Text
              style={{
                color: "#8462f5"
              }}
            >
              {" "}
              Login here
            </Text>
          </View>
        </View>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight
  }
});
export default Register;
