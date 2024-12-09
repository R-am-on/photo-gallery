import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://10.1.0.101:8100', // Cambia esto por tu dirección IP local
    cleartext: true
  }
};


export default config; 
