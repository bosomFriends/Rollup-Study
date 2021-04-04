// rollup.config.js
import myExample from './rollup-plugin-my-example'
export default {
    input:'virtual-module', 
    output: [
        {  
            file: './dist/bundle.js',
            format: 'es',
        },
    ],
    plugins: [
        myExample()
    ]
  };