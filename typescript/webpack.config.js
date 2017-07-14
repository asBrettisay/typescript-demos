exports.entry = './HelloWorld.ts'
exports.target = 'node'
exports.resolve = {
  extensions: ['.ts', '.js']
}

exports.output = {
  path: __dirname,
  filename: './dist/bundle.js'
}

exports.module = {
  loaders: [
    {
      test: /\.ts$/,
      loaders: ['babel-loader', 'ts-loader']
    }
  ]
}