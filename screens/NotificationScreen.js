import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');

  const notifications = []; // ← Replace with real notification data from backend

  const filteredNotifications = notifications.filter(n =>
    (filter === 'All' || (filter === 'Unread' && n.isUnread)) &&
    (n.title.toLowerCase().includes(searchText.toLowerCase()) || n.message.toLowerCase().includes(searchText.toLowerCase()))
  );

  const todayNotifs = filteredNotifications.filter(n => n.date === 'today');
  const yesterdayNotifs = filteredNotifications.filter(n => n.date === 'yesterday');

  const renderNotif = (item) => (
    <View style={styles.notifCard} key={item.id}>
      <Ionicons name={item.icon || 'notifications'} size={24} color="#4CAF50" style={styles.notifIcon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.statusContainer}>
        {item.isUnread && <View style={styles.unreadDot} />}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.header}>Notification</Text>
        <View style={{ width: 24 }} />
      </View>

     
      <TextInput
        style={styles.searchBar}
        placeholder="Search Notifications"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Tabs */}
      <View style={styles.tabRow}>
        {['All', 'Unread'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setFilter(tab)}
            style={[styles.tabButton, filter === tab && styles.activeTab]}>
            <Text style={[styles.tabText, filter === tab && styles.activeTabText]}>
              {tab} {tab === 'All' ? notifications.length : notifications.filter(n => n.isUnread).length}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.markAll}>
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <ScrollView>
        {todayNotifs.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Today</Text>
            {todayNotifs.map(renderNotif)}
          </>
        )}
        {yesterdayNotifs.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Yesterday</Text>
            {yesterdayNotifs.map(renderNotif)}
          </>
        )}
        {todayNotifs.length === 0 && yesterdayNotifs.length === 0 && (
          <Text style={{ textAlign: 'center', marginTop: 40, color: '#888' }}>No notifications yet.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
backButton: {
  width: 36,
  height: 36,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: '#DDDDDE',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#DDDDDE',
},
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    fontFamily:'Kodchasan-Bold',
  },
  searchBar: {
    marginTop: 5,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ccc',
    fontSize: 14,
    fontFamily:'Kodchasan-Regular',
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    flexWrap: 'wrap',
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#D9F2DD',
  },
  tabText: {
    fontSize: 14,
    color: '#555',
    fontFamily:'Kodchasan-Regular',
  },
  activeTabText: {
    color: '#2F814A',
    fontFamily:'Kodchasan-Bold',
  },
  markAll: {
    marginLeft: 'auto',
  },
  markAllText: {
    color: '#4CAF50',
    fontWeight: '500',
    fontFamily:'Kodchasan-Regular',
  },
  sectionTitle: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily:'Kodchasan-Regular',
  },
  notifCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  notifIcon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#222',
    fontFamily:'Kodchasan-Bold',
  },
  message: {
    fontSize: 13,
    color: '#666',
    fontFamily:'Kodchasan-Regular',
  },
  statusContainer: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
