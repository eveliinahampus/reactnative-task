import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MainView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/round.jpg')} // Header round image
              style={styles.image}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.successText}>Sent successfully to <Text style={styles.bold}>Lela Crawford</Text></Text>
            <Text style={styles.amount}>$100.00</Text>
            <View style={styles.johnInfo}>
              <Image
                source={require('./assets/john.png')} // John's round image
                style={styles.johnImage}
              />
              <View>
                <Text style={styles.bold}>John Crawfood</Text>
                <Text style={styles.email}>John123@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Transaction done on <Text style={styles.bold}>12 January 2018</Text></Text>
            <Text style={styles.transactionText}>Your reference number is 03492390</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Continue clicked!')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D9596',
    padding: 30,
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: '70%',
    marginTop: 150,
  },
  content: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    alignItems: 'center',
  },
  johnInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successText: {
    color: 'gray',
  },
  amount: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  johnImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 20,
  },
  transactionDetails: {
    marginTop: 20,
  },
  transactionText: {
    color: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 50,
    marginTop: 40,
    width: '100%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MainView;


