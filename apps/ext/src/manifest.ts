import {
  defineManifest,
} from '@crxjs/vite-plugin'

export const manifest = defineManifest(async () => {
  return {
    manifest_version: 3,
    version: '0.0.1',
    name: 'Bug',
    content_scripts: [
      {
        matches: [
          'http://*/*',
          'https://*/*',
          '<all_urls>',
        ],
        js: [
          'src/content.ts',
        ],
        css: [
          'fonts.css',
        ],
      },
    ],
  }
})
