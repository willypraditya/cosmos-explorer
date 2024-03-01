### React Starter Pack

#### Tech Stack
- ReactJs
- TypeScript
- SASS with BEM naming methodology (http://getbem.com/naming/)
- AntDesign UI Framework (https://ant.design/components/overview/)
- ESlint with Airbnb Config
- Husky for Pre-Commit hooks (https://typicode.github.io/husky/#/)
- MSW for API mocking (https://mswjs.io/)

#### How to run
    $ npm install
    $ npm run start

#### Folder Structure
```
├── api
    Contains files that hits API endpoint
├── assets
├── components
    Contains re-usable components
├── mocks
    Mocks files used for MSW
├── pages
    ├── {domain}
    Each page has their own domain parent folder
        ├── index.tsx
        SCSS File
├── styles
    Global SCSS Files
└── utils
    Reusable helper functions
```

#### Notes
Time taken: 4 Hours