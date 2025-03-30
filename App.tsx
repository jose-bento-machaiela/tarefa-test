import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

// Icons Personalizados SVGR
import AddIcon from './components/icons/AddIcon';
import QrCodeIcon from './components/icons/QrCodeIcon';
import SendIcon from './components/icons/SendIcon';
import MenuIcon from './components/icons/MenuIcon';
import ProfileIcon from './components/icons/ProfileIcon';

const handlePress = () => {
  Linking.openURL('https://paytesy.com/');
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#011729"} />

      {/* header */}
      <View style={styles.header}>
        <MenuIcon />
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Minha Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Meus Cofres</Text>
          </TouchableOpacity>
        </View>
        <ProfileIcon />
      </View>

      {/* bank info */}
      <View style={styles.balanceContainer}>
        <Text style={styles.accountText}>Conta Particular - 851 626 827</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceText}>28,319.50 MZN</Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity onPress={handlePress}>
            <SendIcon />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Enviar</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handlePress}>
          <AddIcon />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Mais</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handlePress}>
          <QrCodeIcon />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Scan</Text>
        </View>


        

        
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 5,
  },
  activeTab: {
    backgroundColor: "#002244",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  inactiveTab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  inactiveTabText: {
    color: "black",
  },
  balanceContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  accountText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 5,
  },
  balanceRow: {
    alignItems: "center",
  },
  balanceText: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonText: {
    color: "#c7c7c7",
    fontSize: 15,
    maxWidth: 100,
    textAlign: "center",
  },
});
