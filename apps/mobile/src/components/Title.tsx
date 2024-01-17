import {StyleSheet, Text} from 'react-native';

interface Title {
  children: string;
  color?: string;
  fontSize?: number;
}

export const Title = ({children, color = '#ccc', fontSize = 20}: Title) => {
  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize,
      color,
    },
  });

  return <Text style={styles.title}>{children}</Text>;
};
