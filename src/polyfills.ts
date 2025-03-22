// polyfill for window when running on the server 
//(This is because of the map, it is a browser only feature, and trying to access it on the server will throw an error, be careful with this)
if (typeof window === 'undefined') {
  (global as any).window = {};
}
