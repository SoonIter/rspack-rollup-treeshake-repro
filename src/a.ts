var isOnline = "online" === "online";
import { qux } from './qux'

function a() {}
function b() {}

var ManGlb3;
if (isOnline) {
  ManGlb3 = a();
} else {
  ManGlb3 = b();
  console.log(qux);
}
var Arrow3;
if (isOnline) {
  Arrow3 = 3;
} else {
  Arrow3 = 4;
  console.log(qux);
}


export { ManGlb3, Arrow3 }