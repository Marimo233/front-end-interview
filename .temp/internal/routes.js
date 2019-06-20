/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/dxy/Downloads/dxy-gzh/Front-end-Interview/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-77cab7d0",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-77cab7d0").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5b8d0d7e",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b8d0d7e").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-281299f7",
    path: "/guide/book.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-281299f7").then(next)
    },
  },
  {
    name: "v-db07261a",
    path: "/guide/cssBasic.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-db07261a").then(next)
    },
  },
  {
    name: "v-0415fc43",
    path: "/guide/deepclone.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0415fc43").then(next)
    },
  },
  {
    name: "v-17edd93a",
    path: "/guide/event.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-17edd93a").then(next)
    },
  },
  {
    name: "v-66a88163",
    path: "/guide/eventLoop.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-66a88163").then(next)
    },
  },
  {
    name: "v-b989c5ea",
    path: "/guide/hoisting.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b989c5ea").then(next)
    },
  },
  {
    name: "v-36e82cfa",
    path: "/guide/htmlBasic.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-36e82cfa").then(next)
    },
  },
  {
    name: "v-45f2a08e",
    path: "/guide/http.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-45f2a08e").then(next)
    },
  },
  {
    name: "v-67c1f0fa",
    path: "/guide/httpWritten.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-67c1f0fa").then(next)
    },
  },
  {
    name: "v-0b1c6be3",
    path: "/guide/immutable.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b1c6be3").then(next)
    },
  },
  {
    name: "v-1588a7c3",
    path: "/guide/jsBasic.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1588a7c3").then(next)
    },
  },
  {
    name: "v-2366ef63",
    path: "/guide/jsWritten.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2366ef63").then(next)
    },
  },
  {
    name: "v-772cb57a",
    path: "/guide/mechanism.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-772cb57a").then(next)
    },
  },
  {
    name: "v-5a9e26c7",
    path: "/guide/memory.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5a9e26c7").then(next)
    },
  },
  {
    name: "v-8c976b3a",
    path: "/guide/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8c976b3a").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]