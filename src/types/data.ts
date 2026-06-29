export interface Airport { id: string; code: string; name: string; }
export interface Weather { id: string; conditions: string; }
export interface Hazard { id: string; type: string; severity: string; }

export interface AirportQuery { code: string; }
export interface WeatherQuery { airportCode: string; }
export interface HazardQuery { poiCoordinates: [number, number]; radiusMiles: number; }
