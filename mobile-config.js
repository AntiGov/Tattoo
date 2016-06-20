App.info({
  id: 'com.dcvb.WCDigitalKiosk',
  name: "welcomingcenter",
  author: "LearnEverything",
  email: "jake@discoverdenton.com",
  version: "1.0.0"
});

/*App.accessRule('http://gitlab.dentonradio.com/welcoming-center/welcoming-crm.git', {
  'minimum-tls-version': 'TLSv1.0',
  'requires-forward-secrecy': false,
});*/

//
App.accessRule("*");
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.typekit.net/*');
App.accessRule("*.discoverdenton.com/*");
App.accessRule("*.simpleviewcrm.com/*");
App.accessRule("*.dentonradio.com/*");
//

App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference("SplashScreenDelay", "0");
App.setPreference("FadeSplashScreen", "false")

//<allow-intent href="*" />

App.icons({
  // iOS
  'iphone_2x': 'resources/ios/icons/Icon-120.png',
  'iphone_3x': 'resources/ios/icons/Icon-180@3x.png',
  'ipad':      'resources/ios/icons/Icon-76.png',
  'ipad_2x':   'resources/ios/icons/Icon-152.png',
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
});
