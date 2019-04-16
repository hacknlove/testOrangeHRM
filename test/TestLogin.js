module.exports = {
  'login ok' (browser) {
    browser.page.orangeHRM()
      .navigate()
      .setUsername()
      .setPassword()
      .login()
      .waitForElementVisible('.head>h1', 2000)
      .end()
  },
  'login fail' (browser) {
    browser.page.orangeHRM()
      .navigate()
      .setUsername()
      .setPassword('contraseña mala')
      .login()
      .waitForElementVisible('.head>h1', 2000)
      .end()
  }
}
