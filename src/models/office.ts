// src/models/branchOffice.ts

export interface Office {
  code: string;
  description: string;
  address: string;
  identification: string;
  currency: string;
}

export class OfficeImpl implements Office {
  code: string;
  description: string;
  address: string;
  identification: string;
  currency: string;

  constructor(data: Office) {
    this.code = data.code;
    this.description = data.description;
    this.address = data.address;
    this.identification = data.identification;
    this.currency = data.currency;
  }
}
