export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17878117822/k_0rCJip7-UbEL7b-cxC'
    });
  }
};