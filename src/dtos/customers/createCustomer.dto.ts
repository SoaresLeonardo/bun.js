export enum CustomerRole {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  PROCESSING = "PROCESSING",
  DELIVERING = "DELIVERING",
  DELIVERED = "DELIVERED",
}

export interface CreateUserDTO {
  name: string;
  email: string;
  phone: string;
  role: CustomerRole;
}
