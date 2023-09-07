/** We declare the shape of the api call with this interface. This interface is also 
exported in order to be used as a generic for the useState return type */
export interface FetchLocationDataInterface {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
  hostname: string;
}

export async function FetchLocationData(ip: string) {
  const ipApiUrl = `https://ipapi.co/${ip}/json/`;

  const response = await fetch(ipApiUrl);
  const ipDetails = await response.json();
  return ipDetails as FetchLocationDataInterface;
}
