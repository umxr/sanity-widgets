import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages.home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'banner',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
})
