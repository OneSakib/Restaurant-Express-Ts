export const enum DbCollection {
  user = "user",
  restaurant = "restaurant",
}
export interface userInterface{
  email:string;
  password:string;
  role:string;  
  timestamp:Date;
}
