import React from 'react';
import {  Text, StyleSheet, Pressable } from 'react-native';

const UsElection = ({ }) => {
  const [fact, setFact] = React.useState('Loading...');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://uselection.togatech.org/');
      const decoded = await response.json();
      const newFact = decoded.value;
      setFact(newFact);

    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    fetchFact();
    console.log('here');

  }, []);

  return (
    <>
    <Text style={styles.text}>{fact}</Text>
    <Pressable onPress= {handleRefreshPress}> 
    <Text>Refresh</Text>
    </Pressable>
    </>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  button: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 5,
  },
  
});

export default UsElection;
