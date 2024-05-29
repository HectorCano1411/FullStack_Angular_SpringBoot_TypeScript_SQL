export class Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: Address;
  website: string;
  image: string;

  constructor(data: Partial<Person> = {}) {
    this.id = data.id || 0;
    this.firstname = data.firstname || '';
    this.lastname = data.lastname || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.birthday = data.birthday || '';
    this.gender = data.gender || '';
    this.address = data.address || {} as Address;
    this.website = data.website || '';
    this.image = data.image || '';
  }
}

export interface Address {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}
