/** We declare the shape of the api call with this interface. This interface is also 
exported in order to be used as a generic for the useState return type */
export interface FetchLocationDataInterface {
  ip: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
  code?: number;
}

export async function FetchLocationData(usrInput: string) {
  const ipApiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=at_6VTJpukBLamPHTQwEaGGc5Pwj9tjn&ipAddress=${usrInput}&domain=${usrInput}`;

  const response = await fetch(ipApiUrl);

  const ipDetails = await response.json();
  return ipDetails as FetchLocationDataInterface;
}
