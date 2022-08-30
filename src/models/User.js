export class User {
  constructor({uid, email, password, accessToken}) {
    this.uid = uid;
    this.email = email;
    this.password = password;
    this.accessToken = accessToken;
  }
}
