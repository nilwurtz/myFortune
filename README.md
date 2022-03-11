# my-Fortune (WIP)

Web app for a certain 'fortune' events.

[web](https://ragnar1904.github.io/myFortune/)


## About components directory structure

|directory|desctiption|
|---|---|
|`/templates`|Components used on all pages, such as headers.
|`/pages/<page name>/index.tsx`| Page components.
|`/pages/<page name>/features`| Components that make up one feature of the page.
|`/molecules`| Components available on multiple pages with no side effects; depends only on atoms
|`/atoms`|Presentational components reused throughout the app.