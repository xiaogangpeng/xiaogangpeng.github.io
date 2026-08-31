import { LAND_PATH } from './worldmap-path.ts';

export { LAND_PATH };

/* Plate carrée, matching exactly the formula the land path was generated with.
   Antarctica is cropped off, hence the asymmetric latitude window. */
export const MAP = {
  width: 1000,
  height: 388.89,
  latTop: 84,
  latBottom: -56,
} as const;

export const projectLon = (lon: number) => ((lon + 180) / 360) * MAP.width;
export const projectLat = (lat: number) =>
  ((MAP.latTop - lat) / (MAP.latTop - MAP.latBottom)) * MAP.height;

export interface Place {
  city: string;
  country: string;
  lat: number;
  lon: number;
  /** Marks where you are based now; rendered slightly larger. */
  home?: boolean;
}

/* Two decimals is plenty at this map scale: 1° is about 2.8px on the rendered
   map, so 0.01° is well under a pixel. */
export const places: Place[] = [
  { city: 'Boston', country: 'USA', lat: 42.36, lon: -71.06, home: true },
  { city: 'New York', country: 'USA', lat: 40.71, lon: -74.01 },
  { city: 'Las Vegas', country: 'USA', lat: 36.16, lon: -115.13 },
  { city: 'Nashville', country: 'USA', lat: 36.17, lon: -86.78 },
  { city: 'Beijing', country: 'China', lat: 39.9, lon: 116.41 },
  { city: 'Xining', country: 'China', lat: 36.62, lon: 101.78 },
  { city: 'Lanzhou', country: 'China', lat: 36.06, lon: 103.84 },
  { city: "Xi'an", country: 'China', lat: 34.27, lon: 108.93 },
  { city: 'Wuxi', country: 'China', lat: 31.57, lon: 120.3 },
  { city: 'Suzhou', country: 'China', lat: 31.32, lon: 120.59 },
  { city: 'Shanghai', country: 'China', lat: 31.22, lon: 121.46 },
  { city: 'Hangzhou', country: 'China', lat: 30.29, lon: 120.16 },
  { city: 'Zhoushan', country: 'China', lat: 29.99, lon: 122.21 },
  { city: 'Ningbo', country: 'China', lat: 29.87, lon: 121.55 },
];

/* Guards the failure mode this list has already hit once: coordinates pasted
   from the row above, so six cities sat on top of Hangzhou. Duplicates now fail
   the build instead of quietly stacking pins. */
const seenCoords = new Map<string, string>();
const seenCities = new Set<string>();
for (const p of places) {
  const key = `${p.lat},${p.lon}`;
  const clash = seenCoords.get(key);
  if (clash) {
    throw new Error(`worldmap: ${p.city} reuses the coordinates of ${clash} (${key})`);
  }
  seenCoords.set(key, p.city);

  if (seenCities.has(p.city)) {
    throw new Error(`worldmap: ${p.city} is listed twice`);
  }
  seenCities.add(p.city);

  if (p.lat < -90 || p.lat > 90 || p.lon < -180 || p.lon > 180) {
    throw new Error(`worldmap: ${p.city} has out-of-range coordinates (${key})`);
  }
}
