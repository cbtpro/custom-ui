import { createServer } from 'vite';
import { resolvePackagePath } from './util';
import pluginVue from '@vitejs/plugin-vue';
import pluginVueJsx from '@vitejs/plugin-vue-jsx';
import basicSsl from '@vitejs/plugin-basic-ssl';

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: resolvePackagePath('components'),
    plugins: [pluginVue(), pluginVueJsx(), basicSsl()],
    server: {
      host: '0.0.0.0',
      port: 8080,
      https: true,
      open: true
    }
  });
  await server.listen();

  server.printUrls();
})();
