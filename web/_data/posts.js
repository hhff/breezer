const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')

const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const serializers = require('../utils/serializers')

const hasToken = !!client.config().token

function generatePost (post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() })
  }
}

async function getPosts () {
  const filter = groq`*[_type == "post" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    ...,
    'images': images[].asset -> { ... }
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePosts = reducedDocs.map(generatePost)
  return preparePosts
}

module.exports = getPosts
