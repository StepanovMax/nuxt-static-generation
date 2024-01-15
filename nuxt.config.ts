import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlBeautifyPlugin from 'html-beautify-webpack-plugin';

console.log(process.env.NODE_ENV);

export default defineNuxtConfig({
  dev: true,
  ssr: true,
  target: 'static',
  debug: true,
  mode: 'development',
  experimental: {
    inlineSSRStyles: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    }
  },
  hooks: {
    build: {
      before (builder) {
        new HtmlWebpackPlugin();
        new HtmlBeautifyPlugin({
          config: {
            html: {
              end_with_newline: true,
              preserve_newlines: true
            }
          }
        });
        console.log('build:before event hit');
        console.log(builder);
      },
      done (builder) {
        console.log('build:done event hit');
        console.log(builder);
      }
    }
  },
  build: {
    html: {
      minify: {
        preserveLineBreaks: true,
        collapseWhitespace: false,
        minifyCSS: false,
        minifyJS: false
      }
    },
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    },
    extractCSS: true,
    optimization: {
      minimize: false,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
    experimental: {
      inlineSSRStyles: false
    }
  },
  generate: {
    minify: false,
    fallback: '404.html',
    subFolders: false
  },
  css: ['@/assets/scss/index.scss'],
  vite: {
    build: {
      minify: false,
    },
    define: {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    ssgOptions: {
      script: 'async',
      formatting: 'prettify',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables/index.scss"; @import "@/assets/scss/components/base/index.scss";'
        }
      }
    }
  },
  svgo: {
    global: true,
    defaultImport: 'component',
  },
  devtools: {
    enabled: true,
  },
});
