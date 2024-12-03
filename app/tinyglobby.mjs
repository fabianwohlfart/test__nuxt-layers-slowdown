import { glob } from 'tinyglobby';

const files = await glob(['./**/*.vue', '../utilities/**/*.vue'])
console.log(files)