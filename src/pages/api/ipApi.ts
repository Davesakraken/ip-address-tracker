/** We declare the shape of the api call with this interface. This interface is also 
exported in order to be used as a generic for the useState return type */
export interface FetchLocationDataInterface {
  ip: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  timezone: string;
  org: string;
}

export async function FetchLocationData(ip: string) {
  const ipApiUrl = `https://ipapi.co/${ip}/json/`;

  const response = await fetch(ipApiUrl);
  const ipDetails = await response.json();
  return ipDetails;
}
