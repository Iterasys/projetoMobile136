// Em breve um codigo aqui   

const wdio = require('webdriverio');
const caps = {"platformName":"Android","appium:platformVersion":"9.0","appium:appiumVersion":"1.22.0","appium:deviceName":"Samsung Galaxy S9 FHD GoogleAPI Emulator","appium:deviceOrientation":"portrait","appium:app":"storage:filename=mda-1.0.15-18.apk","appium:appPackage":"com.saucelabs.mydemoapp.android","appium:appActivity":"com.saucelabs.mydemoapp.android.view.activities.SplashActivity","appium:ensureWebviewsHavePages":true,"appium:nativeWebScreenshot":true,"sauce:options":{"name":"Appium Desktop Session -- Nov 30, 2022 7:25 PM"},"appium:newCommandTimeout":3600,"appium:connectHardwareKeyboard":true};
const driver = wdio.remote({
  protocol: "http",
  host: "ondemand.us-west-1.saucelabs.com",
  port: 80,
  path: "/wd/hub",
  desiredCapabilities: caps
});

driver.init()
  .element("~Sauce Lab Back Packs")
  .click()
  .element("com.saucelabs.mydemoapp.android:id/productTV")
  .click()
  .element("com.saucelabs.mydemoapp.android:id/priceTV")
  .click()
  .touchAction([
    {action: 'press', x: [object Object], y: undefined},
    {action: 'moveTo', x: undefined, y: undefined},
    'release'
  ])
  .element("~Tap to add product to cart")
  .click()
  .end();
