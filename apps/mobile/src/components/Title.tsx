import {StyleSheet, Text} from 'react-native';

interface Title {
  children: string;
}

export const Title = ({children}: Title) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
});
