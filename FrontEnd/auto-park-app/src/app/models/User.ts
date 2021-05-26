export class User {
  public id: number;
  public first_name: string;
  public last_name: string;
  public birth_day: string;
  public sex: number;
  public phone_number: number;
  public job: string;
  public username: string;
  public password: string;
  public status: number;

  constructor(id,
              first_name,
              last_name,
              birth_day,
              sex,
              phone_number,
              job,
              username,
              password,
              status) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_day = birth_day;
    this.sex = sex;
    this.phone_number = phone_number;
    this.job = job;
    this.username = username;
    this.password = password;
    this.status = status;
  }
}
