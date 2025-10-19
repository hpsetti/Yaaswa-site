<template>
  <section class="contact-map-section">
    <div class="container">
      <div class="map-container">
        <!-- Map Header -->
        <div class="map-header">
          <h2 class="map-title">Find Us</h2>
          <p class="map-subtitle">Visit our office in Hyderabad</p>
        </div>

        <!-- OpenStreetMap -->
        <div class="map-wrapper">
          <div ref="mapContainer" class="map-iframe"></div>
        </div>

        <!-- Location Details -->
        <div class="location-details">
          <div class="location-info">
            <h3 class="location-title">
              Sri Devi Constructions - Hyderabad Office
            </h3>
            <div class="location-address">
              <p class="address-line">Hydernagar, Hyderabad</p>
              <p class="address-line">Telangana 500038, India</p>
            </div>
            <div class="location-actions">
              <a
                :href="directionsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="action-button directions-button"
              >
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                Get Directions
              </a>
              <a
                :href="largerMapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="action-button map-button"
              >
                <UIcon
                  name="i-heroicons-arrow-top-right-on-square"
                  class="w-4 h-4"
                />
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type L from "leaflet";

const officeLocation = {
  name: "Sri Devi Constructions - Hyderabad Office",
  address: "Hydernagar",
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
  postalCode: "500038",
  coordinates: {
    lat: 17.385, // Approximate coordinates for Hydernagar, Hyderabad
    lng: 78.4867,
  },
};

const fullAddress = computed(() => {
  const { address, city, state, country, postalCode } = officeLocation;
  return `${address}, ${city}, ${state} ${postalCode}, ${country}`;
});

const directionsUrl = computed(() => {
  const query = `${officeLocation.address}, ${officeLocation.city}, ${officeLocation.country}`;
  return `https://www.openstreetmap.org/directions?to=${encodeURIComponent(
    query
  )}`;
});

const largerMapUrl = computed(() => {
  const { coordinates } = officeLocation;
  return `https://www.openstreetmap.org/?mlat=${coordinates.lat}&mlon=${coordinates.lng}&zoom=15`;
});

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

const initializeMap = () => {
  if (!mapContainer.value) return;

  import("leaflet").then((L) => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    const { lat, lng } = officeLocation.coordinates;

    map = L.map(mapContainer.value).setView([lat, lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);

    const popupContent = `
      <div style="padding: 10px; min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a202c;">
          ${officeLocation.name}
        </h3>
        <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.4;">
          ${fullAddress.value}
        </p>
      </div>
    `;

    marker.bindPopup(popupContent);
  });
};

const destroyMap = () => {
  if (map) {
    map.remove();
    map = null;
  }
};

watch(
  () => officeLocation.coordinates,
  () => {
    if (mapContainer.value) {
      destroyMap();
      nextTick(() => {
        initializeMap();
      });
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  destroyMap();
});
</script>

<style scoped>
@import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";

.contact-map-section {
  background-color: #f8f9fa;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.map-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
}

.map-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.map-subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.location-details {
  padding: 2rem;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.location-info {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.location-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.location-address {
  margin-bottom: 2rem;
}

.address-line {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #4a5568;
  margin: 0;
  line-height: 1.5;
}

.location-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.directions-button {
  background-color: var(--color-blue-primary);
  color: white;
  border: 2px solid var(--color-blue-primary);
}

.directions-button:hover {
  background-color: #0a2d4a;
  border-color: #0a2d4a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

.map-button {
  background-color: transparent;
  color: var(--color-blue-primary);
  border: 2px solid var(--color-blue-primary);
}

.map-button:hover {
  background-color: var(--color-blue-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .map-wrapper {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .contact-map-section {
    padding: 3rem 0;
  }

  .map-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .map-title {
    font-size: 1.75rem;
  }

  .map-wrapper {
    height: 300px;
  }

  .location-details {
    padding: 1.5rem;
  }

  .location-title {
    font-size: 1.25rem;
  }

  .location-actions {
    flex-direction: column;
    align-items: center;
  }

  .action-button {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact-map-section {
    padding: 2rem 0;
  }

  .map-header {
    padding: 1rem;
  }

  .map-title {
    font-size: 1.5rem;
  }

  .map-subtitle {
    font-size: 0.9rem;
  }

  .map-wrapper {
    height: 250px;
  }

  .location-details {
    padding: 1rem;
  }

  .location-title {
    font-size: 1.125rem;
  }

  .address-line {
    font-size: 0.9rem;
  }

  .action-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }
}
</style>
