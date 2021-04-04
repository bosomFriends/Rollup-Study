// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
export default {
    input:'src/main.js', 
    output: [
        {  
            file: './dist/bundle.js',
            format: 'cjs',
        },
    ],
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        })
    ],
    external: ['lodash']
  };