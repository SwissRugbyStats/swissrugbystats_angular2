export class User {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;

  getDisplayName() {
    if (this.first_name) {
      if (this.last_name) {
        return `${this.first_name} ${this.last_name}`;
      }
      return this.first_name;
    } else if (this.username) {
      return this.username;
    } else if (this.email) {
      return this.email;
    }
  }

}
