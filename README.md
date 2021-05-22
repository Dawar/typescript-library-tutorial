# typescript-library-tutorial
A tutorial describing my very simple, dependency-less way to export a Typescript library with sub-modules to be consumed in other TS and JS projects.


So you want to build a Typescript library with sub modules or sub directories as well as top level exports? Similiar to popular libraries like Angular Material or rxjs or lodash, where you can both import from the main package like this:

```ts
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
```
## Spiel

The question is why does this seem almost impossible to do with Typescript in your own projects, especially since there are so many libraries out there that are bundeled this way? I spent hours trying to figure this out and came across actual libraries that are designed to help you with this type of bundeling. But I hated the thought of relying on an entire project to do something that so ubiquitous.

Also if you've tried Googling this problem you know that there doesn't seem to be a single decent tutorial on earth that gives you an answer you can actually use. Some tutorials are missing top-level imports, some are missing the tsconfig, some say you can solve the problem with webpack, but what gives!? I'm just trying to let my users import from a subfolder, why is this so hard?

So what follows is a short tutorial of a process that worked for me and (hopefully) works for others as well in their projects. No dependencies other than good old tsc.

## Tutorial
