import {StructureBuilder} from 'sanity/desk'
import DocumentsPane from 'sanity-plugin-documents-pane'

const views = (S: StructureBuilder) => [
  S.view.form().title('Editor'),
  S.view
    .component(DocumentsPane)
    .title('References')
    .options({
      query: `*[!(_id in path("drafts.**")) && references($id)]`,
      params: {id: `_id`},
    }),
]

export const doc = (S: StructureBuilder, {title, icon, type, id}: any) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().id(id).schemaType(type).views(views(S)))
}

export const docs = (S: StructureBuilder, {title, icon, type}: any) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.documentTypeList(type)
        // @ts-ignore
        .canHandleIntent(() => S.documentTypeList(type).getCanHandleIntent())
        .child((documentId) => S.document().documentId(documentId).schemaType(type).views(views(S)))
    )
}
