App.info({
  id: 'com.square205.code33',
  name: "code33chat",
  author: "LearnEverything",
  email: "jake@discoverdenton.com",
  version: "1.0.0"
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.typekit.net/*');

App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

App.icons({
  // iOS
  'iphone_2x': 'resources/ios/icons/Icon-120.png',
  'iphone_3x': 'resources/ios/icons/Icon-180@3x.png',
  'ipad':      'resources/ios/icons/Icon-76.png',
  'ipad_2x':   'resources/ios/icons/Icon-152.png',

  // Android
  'android_mdpi': 'resources/android/drawable-mdpi/icon.png',
  'android_hdpi': 'resources/android/drawable-hdpi/icon.png',
  'android_xhdpi': 'resources/android/drawable-xhdpi/icon.png',
  'android_xxhdpi': 'resources/android/drawable-xxhdpi/icon.png',
  'android_xxxhdpi': 'resources/android/drawable-xxxhdpi/icon.png'
});


App.launchScreens({
  // iOS
  'iphone_2x': 'resources/ios/splash/Default@2x~iphone_640x960.png',
  'iphone5': 'resources/ios/splash/Default-568h@2x~iphone_640x1136.png',
  'iphone6': 'resources/ios/splash/Default-750@2x~iphone6-portrait_750x1334.png',
  'iphone6p_portrait': 'resources/ios/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png',
  'iphone6p_landscape': 'resources/ios/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png',
  'ipad_portrait': 'resources/ios/splash/Default-Portrait~ipad_768x1024.png',
  'ipad_portrait_2x': 'resources/ios/splash/Default-Portrait@2x~ipad_1536x2048.png',
  'ipad_landscape': 'resources/ios/splash/Default-Landscape~ipad_1024x768.png',
  'ipad_landscape_2x': 'resources/ios/splash/Default-Landscape@2x~ipad_2048x1536.png',

  // Android
  'android_mdpi_portrait': 'resources/android/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/android/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/android/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/android/drawable-land-hdpi/screen.png',
  'android_xhdpi_portrait': 'resources/android/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/android/drawable-land-xhdpi/screen.png',
  'android_xxhdpi_portrait': 'resources/android/drawable-xxhdpi/screen.png',
  'android_xxhdpi_landscape': 'resources/android/drawable-land-xxhdpi/screen.png'
});
