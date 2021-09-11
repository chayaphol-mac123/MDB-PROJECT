import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
    },

    headerText: {
        paddingTop: 20,
        fontSize: 45,
        fontWeight: "bold",
        paddingLeft: 20,
    },

    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    imageContainer: {
        flexDirection: "row",
        marginTop: 20,
    },

    imageView: {
        width: width / 2.5,
        height: height / 3.5,
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 12,
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },

    imageButtle: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "20%",
        position: "absolute",
        bottom: 0,
        left: 0,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },

    description: {
        fontSize: 18,
        color: "black",
        textAlign: "center"
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 5,
    },

    buttonView: {
        width: width / 2.5,
        height: height / 20,
        borderRadius: 20,
        marginHorizontal: 12,
    },

    imageIm: {
        width: "100%",
        height: 150,
        marginTop: 5,
        alignItems: "center",
        padding:20,
    },

    textTop: {
        marginTop: 20,
    },
});