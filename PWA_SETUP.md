# PWA Setup Guide for Financial Suite

## What's been configured

Your Financial Suite app is now a Progressive Web App (PWA)! This means users can install it on their devices and use it like a native app.

## Files Added/Modified

### 1. **public/manifest.json**
   - PWA manifest with app name, icons, colors
   - Supports all device sizes (120x120 to 512x512)
   - Brand color: #5a7ff8

### 2. **public/service-worker.js**
   - Caches important resources for offline use
   - Version: financial-suite-v1

### 3. **index.html**
   - Added PWA meta tags
   - Apple Touch Icons for iOS devices
   - Theme colors for mobile browsers
   - Manifest link

### 4. **src/main.tsx**
   - Registered Service Worker
   - Auto-registers on page load

## Icons Used

All icons are located in `/src/icons/`:
- icon-120.png (120x120) - iOS small
- icon-144.png (144x144) - Windows tile
- icon-152.png (152x152) - iOS medium
- icon-167.png (167x167) - iOS iPad
- icon-180.png (180x180) - iOS large
- icon-192.png (192x192) - Android standard
- icon-256.png (256x256) - Android medium
- icon-384.png (384x384) - Android large
- icon-512.png (512x512) - Android extra large

## How Users Can Install

### On Mobile (iOS)
1. Open Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### On Mobile (Android)
1. Open Chrome
2. Tap the three dots menu
3. Tap "Install app" or "Add to Home screen"
4. Tap "Install"

### On Desktop (Chrome/Edge)
1. Look for the install icon in the address bar
2. Click "Install"
3. The app will open in its own window

## Features

✅ **Installable** - Users can add to home screen
✅ **Offline Support** - Basic offline functionality via Service Worker
✅ **App-like Experience** - Runs in standalone mode
✅ **Optimized Icons** - All device sizes covered
✅ **Brand Colors** - Theme color matches your brand (#5a7ff8)

## Testing PWA

1. Build the app: `npm run build`
2. Serve the build: `npm run preview` or use a production server
3. Open Chrome DevTools → Application tab
4. Check "Manifest" and "Service Workers" sections
5. Run Lighthouse PWA audit

## Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Safari (iOS only - limited features)
- ✅ Firefox (Desktop - limited features)
- ✅ Samsung Internet
- ✅ Opera

## Notes

- Service Worker only works over HTTPS (or localhost)
- iOS has limited PWA support compared to Android
- Make sure all icon paths are correct when deploying
- Update CACHE_NAME in service-worker.js when making changes

## Deployment Checklist

- [ ] Verify all icon files exist in `/src/icons/`
- [ ] Test manifest.json loads correctly
- [ ] Confirm Service Worker registers
- [ ] Test installation on mobile devices
- [ ] Run Lighthouse PWA audit (score should be 90+)
- [ ] Verify HTTPS is enabled on production server
