/** We declare the shape of the api call with this interface. This interface is also 
exported in order to be used as a generic for the useState return type */
export interface FetchLocationDataInterface {
  status: string;
  country: string;
  region: string;
  city: string;
  district: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  query: string;
}

export async function FetchLocationData(ip: string) {
  const ipApiUrl = `http://ip-api.com/json/${ip}?fields=status,country,region,city,district,lat,lon,timezone,isp,query`;

  const response = await fetch(ipApiUrl);
  const ipDetails = await response.json();
  return ipDetails as FetchLocationDataInterface;
}
