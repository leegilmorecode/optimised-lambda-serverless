# Optimised Typescript Lambda Serverless ❤️

Example of an optimised typescript lambda build in serverless which is using Lerna to pull through local symlinked dependecies as well as external node modules (axios).

In the first example the node_modules are being zipped with the lambda handler in the final package.

In the second example webpack is bundling all of the dependecies into one optimised bundle (file) which has also been tree shaken.

## Serverless + TypeScript 😱

Package **35.2 MB zipped** (_lambda function file 1 kb_)

## Typescript + Webpack + Serverless Webpack 😎

Package **55 kb zipped** (_lambda function file 191 kb_)
