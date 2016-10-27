module.exports = {
  db: {
    login: 'login',
    pwd: 'pwd',
    url: 'url',
    setting: function() {
      return 'mongodb://' + this.login + ':' + this.pwd + '@' + this.url;
    }
  },
  secret: 'secret'
}