import { defaultTheme } from '@vuepress/theme-default'
import mathjax3 from "markdown-it-mathjax3"

export default {
  title: "LDC", 
  theme: defaultTheme({
    // set theme config here
        // sidebar array
        // all pages will use the same sidebar
        sidebar: [
          // SidebarItem
          {
            text: 'Foo',
            link: '/foo/',
            children: [
              // SidebarItem
              {
                text: 'github',
                link: 'https://github.com',
                children: [],
              },
              // string - page file path
              '/reference/config.md',
            ],
          },
          // string - page file path
          '/README.md',
        ],
  }),
  extendsMarkdown: md => {
    md.use(mathjax3)
  },
}