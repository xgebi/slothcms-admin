
export default class UserDetails {

  private lastUpdated: Date;

  static fromJSON(json: UserDetailsJSON | string): UserDetails {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      return JSON.parse(json, this.reviver);
    } else {
      // create an instance of the User class
      let user = Object.create(UserDetails.prototype);
      // copy all the fields from the json object
      return Object.assign(user, json, {
        // convert fields that need converting
        lastUpdated: new Date(json.lastUpdated),
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === "" ? this.fromJSON(value) : value;
  }

  constructor(
    private uuid: string,
    private displayName: string,
    private token: string
  ) {
    this.lastUpdated = new Date();
  }

  getLastUpdated(): Date {
    return this.lastUpdated;
  }

  getDisplayName(): string {
    return this.displayName;
  }

  getUuid(): string {
    return this.uuid;
  }

  getToken(): string {
    return this.token;
  }

  toJSON(): UserDetailsJSON {
    return Object.assign({}, this, {
      uuid: this.uuid,
      displayName: this.displayName,
      token: this.token,
      lastUpdated: this.lastUpdated.toString()
    });
  }
}

interface UserDetailsJSON {
  uuid: string;
  displayName: string;
  token: string;
  lastUpdated: string;
}
