export async function fetchLocationData(ip: string) {
  const ipApiUrl = `http://ip-api.com/json/${ip}?fields=status,country,region,city,district,lat,lon,timezone,isp,query`;

  const response = await fetch(ipApiUrl);
  const ipDetails = await response.json();
  return ipDetails;
}
