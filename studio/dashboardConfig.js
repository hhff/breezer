export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6052c1c763ca2c4ca05fc772',
                  title: 'Sanity Studio',
                  name: 'breezer-studio',
                  apiId: '6e70792a-cdcb-4361-a225-12c50f8b1092'
                },
                {
                  buildHookId: '6052c1c7fab0d84a1febb2c3',
                  title: 'Blog Website',
                  name: 'breezer-web',
                  apiId: '04801455-a735-4052-b5da-dc1a647a31e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hhff/breezer',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://breezer-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
