import { defaultTheme } from '@vuepress/theme-default'
import mathjax3 from "markdown-it-mathjax3"

export default {
  title: "LDC Home", 
  theme: defaultTheme({
    // set theme config here
        // sidebar array
        // all pages will use the same sidebar
        sidebar: [
          // SidebarItem
          {
            text: 'Chapter 1. Linearly distributive categories',
            link: '/README.md',
            children: [
              // SidebarItem
              '/chapter1/Linearlogic.md',
              '/chapter1/connectives.md',
              // string - page file path
              '/chapter1/Semantics.md',
              '/chapter1/LinearlogicToQuantum.md',
              '/chapter1/LDC.md',
              '/chapter1/LDCrainbow.md',
              '/chapter1/Graphicalcalculus.md',
              '/chapter1/LDC.md',
              '/chapter1/Examples.md',
            ],
          },
      /*    {
            text: 'Chapter 2. Functors and transformations',
            link: 'README.md',
          },
          {
            text: 'Chapter 3. Frobenius relations and bialgebras',
            link: 'README.md',
          },
          {
            text: 'Chapter 4. Applications of LDCs to quantum',
            link: 'README.md',
          },
          {
            text: 'Chapter 5. Applications of LDCs to concurrency',
            link: 'README.md',
          }, */
          // string - page file path
          '/README.md',
        ],
  }),
  extendsMarkdown: md => {
    md.use(mathjax3)
  },
}