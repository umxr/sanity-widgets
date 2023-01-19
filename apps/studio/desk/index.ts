import {StructureResolver} from 'sanity/desk'
import {doc, docs} from './utils'

const structure: StructureResolver = (S) => {
  return S.list()
    .title('Documents')
    .items([
      doc(S, {
        title: 'Homepage',
        icon: () => '🏠',
        type: 'pages.home',
        id: 'home',
      }),
      S.divider(),
      docs(S, {
        title: 'Banner',
        icon: () => '🎉',
        type: 'banner',
      }),
    ])
}

export default structure
