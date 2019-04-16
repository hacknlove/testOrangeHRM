module.exports = {
  url: 'http://localhost:8800/symfony/web/index.php/dashboard',
  elements: {
    inputUser: '#txtUsername',
    inputPassword: '#txtPassword',
    loginButton: '#btnLogin'
  },
  commands: {
    login () {
      this.api.click(this.elements.loginButton)
      return this
    },
    setUsername () {
      this.api.setValue(
        this.elements.inputUser,
        this.props.username
      )
      return this
    },
    setPassword (password) {
      password = password || this.props.password

      this.api.setValue(
        this.elements.inputPassword,
        password
      )
      return this
    }
  },
  props: {
    username: 'admin',
    password: 'Bitnami.12345'
  }
}
