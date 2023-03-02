import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function BlogCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://assets.entrepreneur.com/content/3x2/2000/20150225224437-computer.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            It provides new functions, simple ways to do complex works, and much
            more. New updates: The new JavaScript features in ECMAScript 2021
            are as follows: 1. Logical assignment operators: Logical assignment
            operators introduce new operators which combine logical operators
            and assignment expressions.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.geeksforgeeks.org/new-features-in-ecmascript-2021-update/',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/princid/')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
    height: 440,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 9,
  },
  elevatedCard: {
    backgroundColor: '#54e8dc',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 250,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
