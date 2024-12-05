import federation from '@originjs/vite-plugin-federation';
export default {
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        vue_mfe: 'http://localhost:5001/assets/remoteEntry.js',
        react_mfe: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'vue']
    }),
  ]
}