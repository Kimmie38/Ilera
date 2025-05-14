import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import HeaderAndTab from './HeaderAndTab';  // Your header with menu & bell icon
import TabBar from './TabBar';              // Your custom bottom tab bar
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native'; // Your custom SVG

const screenWidth = Dimensions.get('window').width;

const GraphScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderAndTab />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Animal Info Card */}
          <View style={styles.infoCard}>
            <Text><Text style={styles.bold}>Animal Type: </Text>Cow</Text>
            <Text><Text style={styles.bold}>Animal Tag: </Text>250</Text>
            <Text><Text style={styles.bold}>Gender: </Text>M</Text>
            <Text><Text style={styles.bold}>Age: </Text>4</Text>
            <Text><Text style={styles.bold}>Sensor ID: </Text>DF-0013</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Tabs */}
          <View style={styles.filterTabs}>
            <TouchableOpacity style={[styles.filterBtn, styles.activeFilter]}>
              <Text style={styles.activeFilterText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterText}>With Trackers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterText}>Without Trackers</Text>
            </TouchableOpacity>
          </View>

          {/* Temperature Card */}
          <View style={styles.temperatureCard}>
  <View style={styles.tempHeader}>
    <View style={styles.iconCircle}>
      {/* <ThermometerIcon width={16} height={16} /> */}
    </View>
    <View>
      <Text style={styles.tempLabel}>Temperature</Text>
      <Text style={styles.tempValue}>23k</Text>
    </View>
    <TouchableOpacity style={styles.dropdownButton}>
      <Text style={styles.dropdownText}>Hour ▾</Text>
    </TouchableOpacity>
  </View>


  <LineChart
    data={{
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{ data: [0, 10000, 20000, 30000, 40000, 35000, 25000] }],
    }}
    width={screenWidth - 40}
    height={180}
    withInnerLines
    withDots={false}
    withVerticalLines={false}
    chartConfig={{
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0,
      color: () => "#4CAF50",
      labelColor: () => "#000",
      propsForBackgroundLines: { stroke: "#E0E0E0" },
      fillShadowGradient: "#C8E6C9",
      fillShadowGradientOpacity: 0.2,
      yAxisLabel: "",
    }}
    bezier={false}
    style={{ borderRadius: 16 }}
  />

  {/* Manual Y-axis vertical line */}
  <View
    style={{
      position: 'absolute',
      top: 20, // Matches chart padding top
      bottom: 30, // Matches chart padding bottom
      left: 40, // Aligned to labels area (adjust if needed)
      width: 1,
      backgroundColor: '#E0E0E0',
    }}
  />

  {/* Optional: Vertical dashed reading line at index 6 */}
  <View
    style={{
      position: 'absolute',
      top: 20,
      bottom: 30,
      left: ((screenWidth - 40 - 60) / 7) * 5.5 + 40, // 60 = padding (left+right)
      width: 1,
      borderLeftWidth: 1,
      borderLeftColor: '#4CAF50',
      borderStyle: 'dashed',
    }}
  />
</View>

        </ScrollView>

        {/* Bottom TabBar from TopBar Component */}
        <TabBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f9f9f9' },
  container: { flex: 1 },
  scrollContainer: { paddingBottom: 100 },

  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bold: { fontWeight: 'bold' },
  viewButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  viewButtonText: { fontSize: 12 },

  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  activeFilter: {
    backgroundColor: '#8BC34A',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#fff',
    fontSize: 14,
  },
  temperatureCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tempHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DFF1DC', // Light green background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  tempLabel: { fontSize: 14, color: '#444' },
  tempValue: { fontSize: 18, fontWeight: '600' },
  dropdownButton: {
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  dropdownText: {
    fontSize: 12,
    color: '#333',
  },
  

  chartCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  chartTitle: { fontSize: 16, marginLeft: 6 },
  chartValue: { marginLeft: 'auto', fontSize: 16 },
  dropdown: { marginLeft: 10 },
  dropdownText: { fontSize: 14, color: '#888' },
});

export default GraphScreen;
