import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { View, Alert } from "react-native";

const Network = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log(state);
      const connectionStatus = state.isConnected ?? false;
      if (connectionStatus !== isConnected) {
        setConnected(connectionStatus);
      }

      if (connectionStatus) {
        Alert.alert("Internet Restored 😊");
      } else {
        Alert.alert("🛜 No internet");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  return <View />;
};

export default Network;
