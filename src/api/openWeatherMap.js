export const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=58a2cd1a0a047829682e7668d5179c95';

export function getWeather(city) {
  return `https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=58a2cd1a0a047829682e7668d5179c95`
}
