// utils/locationApi.js
// Simple thin wrappers around your backend pick‑list endpoints.
// Each function returns **an array of strings** (labels) that your dropdowns expect.

const BASE_URL = "https://bizplorers-backend.onrender.com/api/picklist";

/**
 * GET /countries → [ { id, value } ]
 */
export const fetchCountries = async () => {
  const res = await fetch(`${BASE_URL}/countries`);
  if (!res.ok) throw new Error("Failed to load countries");
  const data = await res.json();
  return data.map((c) => c.value);
};

/**
 * GET /states?country={countryValue}
 */
export const fetchStatesByCountry = async (countryValue) => {
  const res = await fetch(`${BASE_URL}/states?country=${encodeURIComponent(countryValue)}`);
  if (!res.ok) throw new Error("Failed to load states");
  const data = await res.json();
  return data.map((s) => s.value);
};

/**
 * GET /cities?state={stateValue}
 */
export const fetchCitiesByState = async (stateValue) => {
  const res = await fetch(`${BASE_URL}/cities?state=${encodeURIComponent(stateValue)}`);
  if (!res.ok) throw new Error("Failed to load cities");
  const data = await res.json();
  return data.map((c) => c.value ?? c);
};

// You can add caching, abort‑signal, etc. later as needed.
