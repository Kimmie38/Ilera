import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import HeaderAndTab from './HeaderAndTab';
import TabBar from './TabBar';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

// Placeholder icons (replace with yours later)
import ThermometerIcon from '../Ilhera/assets/icons/ThermometerIcon';
import MotionIcon from '../Ilhera/assets/icons/MotionIcon';
import HeartIcon from '../Ilhera/assets/icons/HeartIcon';

const screenWidth = Dimensions.get('window').width;

const GraphCard = ({ title, value, IconComponent }) => (
  <View style={styles.graphCard}>
    <View style={styles.cardHeader}>
      <View style={styles.iconCircle}>
        <IconComponent width={35} height={35} style={{ marginRight: 10 }} />
      </View>
      <View>
        <Text style={styles.cardLabel}>{title}</Text>
        <Text style={styles.cardValue}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.dropdownButton}>
        <Text style={styles.dropdownText}>Daily ▾</Text>
      </TouchableOpacity>
    </View>

    <View style={{ overflow: 'hidden', borderRadius: 16 }}>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [{ data: [0, 0, 0, 0, 0, 0, 0] }],
        }}
        width={screenWidth - 72}
        height={180}
        fromZero
        withInnerLines
        withDots={false}
        withVerticalLines={false}
        withShadow={false}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: () => "#4CAF50",
          labelColor: () => "#000",
          propsForBackgroundLines: { stroke: "#E0E0E0" },
          fillShadowGradientOpacity: 0,
        }}
        bezier={false}
        style={{ marginVertical: 8 }}
      />
    </View>

    <View style={styles.yAxisLine} />
    <View style={styles.dashedLine} />
  </View>
);

const GraphScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All'); // Filter state

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderAndTab />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Animal Info Card */}
          <View style={styles.infoCard}>
            <Text style={styles.infoItem}>
              <Text style={styles.bold}>Animal Type: - </Text>
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.bold}>Animal Tag: - </Text>
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.bold}>Gender: - </Text>
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.bold}>Age: - </Text>
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.bold}>Sensor ID: - </Text>
            </Text>
          </View>

          {/* Filter Tabs */}
          <View style={styles.filterTabs}>
            {['All', 'With Trackers', 'Without Trackers'].map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterBtn,
                  activeFilter === filter && styles.activeFilter,
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text
                  style={
                    activeFilter === filter
                      ? styles.activeFilterText
                      : styles.filterText
                  }
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Graph Cards */}
          <GraphCard title="Temperature" value="0k" IconComponent={ThermometerIcon} />
          <GraphCard title="Motion" value="0m/s" IconComponent={MotionIcon} />
          <GraphCard title="Heart Rate" value="0bps" IconComponent={HeartIcon} />
        </ScrollView>

        <TabBar activeTab="Home" />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { paddingBottom: 100, backgroundColor: '#fff' },

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
  infoItem: {
    marginBottom: 8,
  },
  bold: {
    fontSize: 17,
    fontFamily: 'Kodchasan-Bold',
  },

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

  graphCard: {
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 16,
    backgroundColor: '#DFF1DC',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLabel: { fontSize: 14, color: '#444' },
  cardValue: { fontSize: 18, fontWeight: '600' },
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
  yAxisLine: {
    position: 'absolute',
    top: 20,
    bottom: 30,
    left: 40,
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  dashedLine: {
    position: 'absolute',
    top: 20,
    bottom: 30,
    left: ((screenWidth - 40 - 60) / 7) * 5.5 + 40,
    width: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#4CAF50',
    borderStyle: 'dashed',
  },
});

export default GraphScreen;
