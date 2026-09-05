'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  googleMapsUrl: string;
  className?: string;
}

const OFFICE_LAT = 17.7365065;
const OFFICE_LNG = 83.3027272;
const ZOOM_LEVEL = 16;

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  googleMapsUrl,
  className = '',
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      // Dynamically import Leaflet to avoid SSR window issues
      const L = (await import('leaflet')).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Clean up previous instance if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initialize map instance
      const map = L.map(mapContainerRef.current, {
        center: [OFFICE_LAT, OFFICE_LNG],
        zoom: ZOOM_LEVEL,
        scrollWheelZoom: true,
        zoomControl: true,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom HTML Marker using LAND POWER brand colors
      const customPinIcon = L.divIcon({
        className: 'custom-landpower-pin',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute -inset-2 bg-[#ffdea5]/40 rounded-full animate-ping"></div>
            <div class="w-10 h-10 bg-[#034F90] border-2 border-[#ffdea5] rounded-full shadow-2xl flex items-center justify-center text-[#ffdea5] transform -translate-y-2 hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div class="w-2.5 h-1.5 bg-[#034F90]/80 rounded-full blur-[1px] -bottom-1 absolute"></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 36],
        popupAnchor: [0, -36],
      });

      // Marker and Popup
      const marker = L.marker([OFFICE_LAT, OFFICE_LNG], { icon: customPinIcon }).addTo(map);

      const popupContent = `
        <div style="font-family: inherit; padding: 4px; min-width: 200px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <strong style="color: #034F90; font-size: 13px;">LAND POWER Head Office</strong>
          </div>
          <p style="margin: 0 0 8px 0; font-size: 11px; color: #43474e; line-height: 1.4;">
            No: 49-47-9, Flat No: 201 & 202, Prathapas Pride, Akkayapalem, Visakhapatnam – 530016
          </p>
          <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: bold; color: #034F90; text-decoration: underline;">
            Open in Google Maps &rarr;
          </a>
        </div>
      `;

      marker.bindPopup(popupContent);

      // Invalidate size after brief delay to handle container animations/resizing
      setTimeout(() => {
        if (isMounted && mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
          setIsLoaded(true);
        }
      }, 250);
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [googleMapsUrl]);

  return (
    <div
      className={`w-full h-72 sm:h-80 md:h-88 rounded-2xl overflow-hidden relative border-2 border-[#034F90]/20 shadow-md ${className}`}
    >
      {/* Real Map Canvas Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0 relative bg-[#f2efe9]" />

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-[#f2efe9] flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full border-3 border-[#034F90] border-t-transparent animate-spin" />
          <span className="font-sans text-xs font-semibold text-[#034F90]">
            Loading interactive office map...
          </span>
        </div>
      )}

      {/* Floating Info Overlay (Bottom Bar) - pointer-events-none on backdrop to allow drag/pan on map */}
      <div className="absolute inset-x-3 bottom-3 z-[400] pointer-events-none">
        <div className="bg-[#034F90]/90 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white pointer-events-auto transition-all hover:bg-[#034F90]/95">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#ffdea5] shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="w-5 h-5 text-[#ffdea5]" />
            </div>
            <div>
              <h5 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                Prathapas Pride, Akkayyapalem
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#ffdea5]/90 font-medium">
                Visakhapatnam, Andhra Pradesh — 530016
              </p>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#ffdea5] text-[#034F90] hover:bg-white px-4 py-2 rounded-full font-sans text-xs font-bold shadow-md transition-all shrink-0 w-full sm:w-auto hover:scale-105 active:scale-95"
          >
            <span>VIEW LIVE LOCATION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Recenter Quick Action Button */}
      <button
        type="button"
        onClick={() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.setView([OFFICE_LAT, OFFICE_LNG], ZOOM_LEVEL, {
              animate: true,
            });
          }
        }}
        title="Recenter Map to Office"
        className="absolute top-3 right-3 z-[400] p-2 bg-white/95 hover:bg-white text-[#034F90] rounded-lg shadow-md border border-[#034F90]/20 text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <Navigation className="w-3.5 h-3.5 text-[#034F90]" />
        <span className="hidden sm:inline">Recenter</span>
      </button>
    </div>
  );
};
