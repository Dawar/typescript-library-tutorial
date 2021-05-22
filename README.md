# typescript-library-tutorial
A tutorial describing my very simple, dependency-less way to export a Typescript library with sub-modules to be consumed in other TS and JS projects.


So you want to build a Typescript library with sub modules or sub directories as well as top level exports? Similiar to popular libraries like Angular Material or rxjs or lodash, where you can both import from the main package like this:

```ts
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
```
## Spiel

The question is why does this seem almost impossible to do with Typescript in your own projects, especially since there are so many libraries out there that are bundeled this way? I spent hours trying to figure this out and came across actual libraries that are designed to help you with this type of bundeling. But I hated the thought of relying on an entire project to do something that should be simple!

Also if you've tried Googling this problem you know that there doesn't seem to be a single decent tutorial on earth that gives you an answer you can actually use. Some tutorials are missing top-level imports, some are missing the tsconfig, some say you can solve the problem with webpack, but what gives!? I'm just trying to let my users import from a subfolder, why is this so hard?

So what follows is a short tutorial of a process that worked for me and (hopefully) works for others as well in their projects. No dependencies other than good old tsc.

## Tutorial

1. Move all of your "sub directories" or "sub modules" into a src folder in the root of your project. Like this:

- my-lib/
  - tsconfig.json
  - src/
    - index.ts
    - toplevelexport1.ts
    - toplevelexport2.ts
    - submodule1/
      - index.ts
      - sm1-export-1.ts
      - sm1-export-2.ts
    - submodule2/
      - index.ts
      - sm1-export-1.ts
      - sm1-export-2.ts

2. Configure your tsconfig.json like so. Important parts are the includes, excludes, baseDir and outDir.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "baseUrl": "./src",
    "outDir": ".",
    "incremental": true,
  },
  "include": ["src/"],
  "exclude": ["!src/"],
}
```

To explain what we are doing here, we want to compile and export all our top level exports, sub modules, etc. and output them to the root directory. This is because the quiry way package.json / npm works which I can't clearly explain but basically requires that any importable folders be at the top of the package (instead of lets say in a dist/ folder)

3. Lastly for the top-level exports include them in your package.json:

```json
{
...
  "main": "./index.d.ts",
  "types": "./index.d.ts",
}
```

4. After you build your project (tsc) what you should end up with is all your src/ folders and files getting outputted with types into the main root folder. Feel free to now distribute this as-is and see how easy it is to import from the top level and sub modules!

Really hope this helps some folks, I get irrationally angry thinking about how much time I spent solving a problem that should be so straightforward!
    
