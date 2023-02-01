#vytvoreni nove aplikace ionic fw + angular
ionic start AK5PM_PROJEKT_DATABAZE_SERIALU blank --type=angular

#vytvoreni stranek(obrazovek) + vytvoreni sluzby
ionic g page pages/serialy
ionic g page pages/serialinfo
ionic g service services/serialinfo

#vytvoreni stranek(obrazovek) + vytvoreni sluzby
ionic g page pages/movies
ionic g page pages/movieinfo
ionic g service services/movie

#instalace možnosti vyhledávání
npm install ng2-search-filter

#capacitor splash screen a ikona
npm install -g cordova-res
cordova-res android --skip-config --copy
ionic cap open android

#build pro android studio
ionic build
npx cap add android 
npx cap sync android

#install splash screen
npm install @capacitor/splash-screen
npx cap sync

#zkopírovat do capacitor.config.ts 
 plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },