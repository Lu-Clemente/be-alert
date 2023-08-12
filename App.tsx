import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      } else {
        console.log("No updates available")
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Testing Expo EAS Update</Text>
      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
