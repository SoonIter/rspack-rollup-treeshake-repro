import { defineConfig } from '@rsbuild/core';
import TerserPlugin from 'terser-webpack-plugin';

export default defineConfig({
  plugins: [],
  output: {
    distPath: {
      root: 'dist-rsbuild',
    },
    minify: {
      js: false
    }
  },
  tools: {
    bundlerChain(chain, { CHAIN_ID, isProd }) {
      if (isProd) {
        chain.optimization.minimizer(CHAIN_ID.MINIMIZER.JS).use(TerserPlugin, [
          {
            minify: TerserPlugin.terserMinify,
          },
        ]);
      }
    },
  },
  source: {
    define: {
      'process.env.CRC_BMAP_MODE': JSON.stringify('online'),
    },
  },
});
