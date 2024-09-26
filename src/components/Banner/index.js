import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";



export function Banner() {
    return (
        <View style={styles.container}>
            <PagerView initialPage={0} style={styles.content}>
                <View key="1" style={styles.page}>
                    <Text>Banner 1</Text>
                </View>
                <View key="2" style={styles.page}>
                    <Text>Banner 2</Text>
                </View>
                <View key="3" style={styles.page}>
                    <Text>Banner 3</Text>
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={styles.bullet}></View>
                <View style={styles.bullet}></View>
                <View style={styles.bullet}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginTop: 10,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 10,
    },
   bulletContent: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
   },
   bullet: {
   width: 10,
   height:10,
   borderRadius: 5,
   margin: 10,
   backgroundColor: "#000",
   },
   activeBullet: {
    backgroundColor:"#000",
   }
});