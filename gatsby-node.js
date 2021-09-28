exports.createPages = async ({ actions }) => {
    const axios = require('axios')
    const { createPage } = actions
    const InfoTemplate = require.resolve(`./src/components/InfoTemplate.js`)
    const result = await axios.get(' http://hp-api.herokuapp.com/api/characters')
    const lastResult = result.data.map(item => {
        return {...item, slug: item.name.toLowerCase().replace(' ', '-')}
    })

    lastResult.forEach(item => {
      createPage({
        path: item.slug,
        component: InfoTemplate,
        context: item
      })
    })
  }

