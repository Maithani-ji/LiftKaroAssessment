import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker, MapType, Region } from 'react-native-maps';

import { useTheme } from '../../context/ThemeContext';               // Theme context for styling
import { useApi } from '../../hooks/useApi';                         // Custom hook for API handling
import { mockApiService } from '../../services/mockApiService';     // Mock API to fetch gyms
import { GymsScreenProps } from '../../types/navigation';           // Navigation type

// Define Gym object structure
interface Gym {
  id: number;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  hours: string;
}

const GymsScreen: React.FC<GymsScreenProps> = () => {
  const { theme } = useTheme();                       // Get current theme
  const { data: gyms, loading, error } = useApi<Gym[]>(mockApiService.fetchGyms); // Fetch gym data

  const mapRef = useRef<MapView>(null);               // Ref to control MapView
  const [mapType, setMapType] = useState<MapType>('standard'); // (Not used here but ready for toggle)

  // Show loading spinner while data is fetched
  if (loading) {
    return (
      <View style={[styles.centeredContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  // Show error if gym data fails to load
  if (error) {
    return (
      <View style={[styles.centeredContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.notification }]}>
          Failed to load gym data.
        </Text>
      </View>
    );
  }

  // Set map's initial region (centered at first gym or default to SF)
  const initialRegion: Region = gyms && gyms.length > 0 ? {
    latitude: gyms[0].coordinates.latitude,
    longitude: gyms[0].coordinates.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  } : {
    latitude: 37.7749,             // San Francisco default
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Gyms Near You</Text>
      
      {/* Render map and markers */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
      >
        {gyms?.map(gym => (
          <Marker
            key={gym.id}
            coordinate={gym.coordinates}
            title={gym.name}
            description={gym.address}
          />
        ))}
      </MapView>
    </View>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
  controls: {
    position: 'absolute',
    right: 20,
    top: 100,
    gap: 12,
    alignItems: 'center',
  },
  controlButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  controlText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GymsScreen;
