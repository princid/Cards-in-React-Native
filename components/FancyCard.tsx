import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/04/Summer-wallpapers-high-quality-free-download.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Maldives</Text>
          <Text style={styles.cardLabel}>Maldives, South Asia</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex
            cumque dignissimos.
          </Text>
          <Text style={styles.cardFooter}>2500 KM away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Bali</Text>
          <Text style={styles.cardLabel}>Bali, Indonesia</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex
            cumque dignissimos.
          </Text>
          <Text style={styles.cardFooter}>1200 KM away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  card: {
    width: 340,
    height: 400,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 250,
    marginBottom: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    // fontWeight: '600',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    marginTop: 6,
    marginBottom: 6,
  },
  cardFooter: {
    // marginTop: 10,
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
