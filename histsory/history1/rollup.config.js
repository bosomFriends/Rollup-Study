// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
export default {
    input:'./src/main.js', 
    output: [
        {  
            file: './dist/bundle.js',
            format: 'cjs',
            name: 'LFL'
        },
        {
            file: './dist/bundle.min.js',
            format: 'iife',
            name:'version',
            plugins: [terser()]
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        json()
    ]
  };