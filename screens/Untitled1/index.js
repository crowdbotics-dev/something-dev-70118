import { ImageBackground } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.uBsDAyHA}>Lorem ipsum…</Text><ImageBackground style={styles.GRoxInZS} source={require("./Profile Pic with a super long name so long that.JPG")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#ffffff"
  },
  uBsDAyHA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#a01919"
  },
  GRoxInZS: {
    width: 213,
    height: 192
  }
});
export default Untitled1;