# rspack rollup compare

DCE analysis in one big esm file, compared with rollup

```ts
// node_modules/@aibee/crc-bmap/lib/bmap.esm.js:9565
var isOnline = process.env.CRC_BMAP_MODE === 'online';
var ParkingTypeIconMap3;
if (isOnline) {
  ParkingTypeIconMap3 = (init_online(), __toCommonJS(online_exports))
    .ParkingTypeIconMap;
} else {
  ParkingTypeIconMap3 = (init_offline(), __toCommonJS(offline_exports))
    .ParkingTypeIconMap;
}
```

```ts
  source: {
    define: {
      'process.env.CRC_BMAP_MODE': JSON.stringify('online'),
    },
  },
```

```sh
ni
npx rsbuild build
npx vite build
```

## Result

rsbuild 3875kb > vite(rollup) 812kb

rsbuild

```sh
ready   Built in 0.95 s (web)

  File (web)                                  Size         Gzip
  dist-rsbuild/index.html                     0.31 kB      0.22 kB
  dist-rsbuild/static/js/index.f63e9bd1.js    1.8 kB       0.90 kB
  dist-rsbuild/static/js/698.df5bb1bd.js      3875.7 kB    1683.1 kB

  Total: 3877.8 kB (gzip: 1684.2 kB)
```

vite(rollup)

```sh
vite v4.4.5 building for production...
✓ 1449 modules transformed.
dist/index.html            0.45 kB │ gzip:   0.28 kB
dist/index.js              0.77 kB │ gzip:   0.44 kB
dist/chunks/crc-bmap.js  812.95 kB │ gzip: 220.61 kB
✓ built in 3.79s
```
