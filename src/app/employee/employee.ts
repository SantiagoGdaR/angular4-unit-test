import { Role } from '../role/role'

export class Employee{
    constructor(
        public id: number, 
        public name: string, 
        public role: Role
    ){}
}