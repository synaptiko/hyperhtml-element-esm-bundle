import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'esm.js',
    format: 'esm'
  },
  plugins: [
    resolve()
  ]
}
