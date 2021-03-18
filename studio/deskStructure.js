import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { MdPerson } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Projects')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Projects')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
