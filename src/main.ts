import { capitalize, reverseString } from "./stringUtils.js";
import { UserManagement } from './userManagement.js'

console.log(capitalize('hello'));
console.log(reverseString('Maryna'));

// -----------
const admin = new UserManagement.Admin.AdminUser(
    "Marina",
    "admin@example.com",
    false
);

console.log(admin.isSuperAdmin); // false

admin.changeRole();
console.log(admin.isSuperAdmin); // true

admin.changeRole();
console.log(admin.isSuperAdmin); // false

// --------

import {
    generateFibonacci,
    generatePrimeNumbers
} from "./sequenceUtils.js";

console.log(generateFibonacci(100));

console.log(generatePrimeNumbers(100));