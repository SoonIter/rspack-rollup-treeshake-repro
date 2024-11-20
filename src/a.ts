var isOnline = process.env.CRC_BMAP_MODE === 'online';

function a() {}
function b() {}

var ManGlb3: any;
if (isOnline) {
  ManGlb3 = a();
} else {
  ManGlb3 = b();
}
var Arrow3: number;
if (isOnline) {
  Arrow3 = 3;
} else {
  Arrow3 = 4;
}

export { ManGlb3, Arrow3 };
