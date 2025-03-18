// polyfill for window when running on the server
if (typeof window === 'undefined') {
  (global as any).window = {};
}
