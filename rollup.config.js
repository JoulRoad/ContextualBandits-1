import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'

export default {
    input: 'src/scripts/contextualbandits.js',
    output: {
        file: 'build/js/contextualbandits.min.js',
        format: 'iife',
        sourcemap: 'inline',
    },
    onwarn: warning => {  // overwite the default warning function
        const str = warning.toString();
        if (str.indexOf("Circular dependency") >= 0) {
            //Do nothing here.
        } else {
            console.log(str);
        }
    },
    plugins: [
        resolve(),
        commonJS({
            include: ['node_modules/**']
        }),
        typescript()
    ]
};
