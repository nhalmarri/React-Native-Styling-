import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  // TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
        padding:40,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "24%",
          borderRadius: 10,
        }}
      >
        <Image
          style={{ width: 66, height: 58, borderRadius: 100 }}
          source={{
            uri: "https://i.pinimg.com/736x/39/28/69/3928690a885a32f5b095cb2be0c17d15.jpg",
          }}
        />

        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
          Nora Almarri
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>Kuwait</Text>

        <View style={styles.line}></View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 26,
            }}
          >
            <Text style={styles.text}>80K</Text>
            <Text style={styles.text}>803K</Text>
            <Text style={styles.text}>1.4K</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <Text style={styles.textSec}>Followers</Text>
            <Text style={styles.textSec}>Likes</Text>
            <Text style={styles.textSec}>Photos</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textSec: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 10,
    gap: 20,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  line: {
    marginRight: -20,
    marginLeft: -20,
    height: 1,
    width:"90%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    //alignSelf: "stretch",
    marginVertical: 10
  },
});

