export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60019bdf14eaf31a2fab7fd3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zrggipke',
                  apiId: 'ef7362de-c141-4fed-8039-1904d928bd98'
                },
                {
                  buildHookId: '60019bdf5fd95412fd2dfed5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3zohmrhj',
                  apiId: '8369c8fc-56cc-4280-bd11-62e8061281be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikkipeel/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3zohmrhj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
