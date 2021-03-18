// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import post from './documents/post'
import siteSettings from './documents/siteSettings'

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    siteSettings,
    post,
    {
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [{
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titles should be catchy, descriptive, and not too long'
      }, {
        title: 'URL',
        name: 'url',
        type: 'url'
      }]
    }
  ])
})
