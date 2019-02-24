# Templates

## 目录结构

├── build
│   ├── webpack.base.js
│   ├── webpack.config.client.js
│   └── webpack.config.server.js
|
├── client
│   ├── app.js
│   ├── config
│   │   └── router.jsx
│   ├── server-entry.js
│   ├── server.template.ejs
│   ├── store
│   │   ├── app-state.js
│   │   └── store.js
│   ├── template.html
│   └── views
│       ├── App.jsx
│       ├── test
│       │   └── api-test.jsx
│       ├── topic-detail
│       │   └── index.jsx
│       └── topic-list
│           └── index.jsx
|
|── server
|   ├── server.js
|   └── util
|       ├── dev-static.js
|       ├── handle-login.js
|       ├── proxy.js
|       └── server-render.js
|
├── dist
│   ├── app.9337b7bd3bfeb9af5f86.js
│   ├── index.html
│   ├── server-entry.js
│   └── server.ejs
├── favicon.ico
├── nodemon.json
├── package-lock.json
├── package.json
