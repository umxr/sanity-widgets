import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {schemaTypes} from './schemas'
import structure from './desk'
import {productionUrl} from './plugins/productionUrl'
import {previewSecretId} from 'preview'

const config = defineConfig({
  name: 'default',
  title: 'Widgets',

  projectId: '6vdgqb9n',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: structure,
    }),
    visionTool(),
    unsplashImageAsset(),
    // Custom Plugins
    productionUrl({
      previewSecretId,
      types: ['pages.home'],
      apiVersion: '2022-11-15',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

export default config
