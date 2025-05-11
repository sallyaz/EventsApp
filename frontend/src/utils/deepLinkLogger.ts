import { Linking } from 'react-native';
/**
 * Logs the incoming deep link URL and optionally parses it.
 */
export const setupDeepLinkLogger = () => {
  Linking.addEventListener('url', ({ url }) => {
    console.log('📥 Deep link received:', url);
    try {
      const parsedUrl = new URL(url);
      const path = parsedUrl.pathname;
      const params = Object.fromEntries(parsedUrl.searchParams.entries());

      console.log('🔍 Path:', path);
      console.log('🔍 Query Params:', params);
    } catch (err) {
        console.error('Error parsing deep link URL:', err);
      console.warn('Failed to parse deep link URL:', url);
    }
  });
};