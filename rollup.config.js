// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
    input:'./src/main.js', 
    output: {  
        file: './dist/bundle.js',
        format: 'umd',
        name: 'LFL'
    },
    plugins: [
        resolve(),
        commonjs()
    ]
  };