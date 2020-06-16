import myCurrentLocation, {
  message,
  name,
  getGreeting,
} from "../../playground/myModule";
import myAddFunction, { substract } from "../../playground/math";
// import myCurrentLocation from "./myModule";

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting("Jessica"));
console.log(myAddFunction(5, 6));
console.log(substract(3, 1));
