import babel from 'rollup-plugin-babel'

export default {
    entry: 'main.js',
    format: 'umd',
    moduleName: 'utils',
    dest: 'dist/bundle.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}