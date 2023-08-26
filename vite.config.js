import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginFonts } from 'vite-plugin-fonts';
// import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path"

export default defineConfig({
  plugins: [vue(),
  VitePluginFonts({
    custom: {
      families: [{
        name: 'Nunito Sans',
        local: 'Nunito-Regular',
        src: '/static/fonts/NunitoSans_Regular.ttf'
      },
      {
        name: 'Nunito Sans',
        local: 'Nunito-Bold',
        src: '/static/fonts/NunitoSans_Bold.ttf'
      },
      {
        name: 'Nunito Sans',
        local: 'Nunito-SemiBold',
        src: '/static/fonts/NunitoSans_SemiBold.ttf'
      },
      ],
    },
  }),
  // viteImagemin({
  //   conversion: [
  //     { from: 'jpg', to: 'webp' },
  //   ],
  //   gifsicle: {
  //     optimizationLevel: 7,
  //     interlaced: false,
  //   },
  //   optipng: {
  //     optimizationLevel: 2,
  //   },
  //   mozjpeg: {
  //     quality: 20,
  //   },
  //   pngquant: {
  //     quality: [0.8, 0.9],
  //     speed: 4,
  //   },
  //   svgo: {
  //     plugins: [
  //       {
  //         name: 'removeViewBox',
  //       },
  //       {
  //         name: 'removeEmptyAttrs',
  //         active: false,
  //       },
  //     ],
  //   },
  // },
  // ),
  createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/icons')],

    symbolId: 'icon-[dir]-[name]',

    inject: 'body-last' | 'body-first',

    customDomId: '__svg__icons__dom__',
  }),


  ],
  base: "./",
  root: './',
  publicDir: './src/assets',
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: ({ name, extname }) => {

          if (/\.css$/.test(name ?? '')) {
            return 'style[extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  }
})
