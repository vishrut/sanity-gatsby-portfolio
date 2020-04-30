export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eab297c7b6cc3017971ef44',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bydioufa',
                  apiId: 'f5ad75a7-433d-4823-8df1-13b653dfba5f'
                },
                {
                  buildHookId: '5eab297dfd1c5c0198188391',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ohymmenh',
                  apiId: '436fa242-c7f4-4c1e-8150-78c14f8e8805'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishrut/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ohymmenh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
