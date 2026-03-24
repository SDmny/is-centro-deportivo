# frontend

Aquí se incluyen css, tailwind, javascript, react, etc.

## node_modules

No lo tocamos, son cosas de instalación relacionadas con npm.

## public

Assets que serán publicos, como imagen de logo, etc.

## src

Carpeta del código.

## index.html

El archivo base, punto de entrada a la página.

## package.json

Información del proyecto, nombre del proyecto, librerías usadas, etc.

## tsconfig.json y vite.config.js

No se ocupa modificar, es para typescript y otra info técnica.

### estructura base para un componente

function App() {
return (
<></>
);
}

export default App;

### linea para la importación de react router

import { Link } from "react-router-dom";

### vas a añadir un .gitignore para ti mismo? esto decia el original

# Logs

logs
_.log
npm-debug.log_
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
\*.local

# Editor directories and files

.vscode/_
!.vscode/extensions.json
.idea
.DS_Store
_.suo
_.ntvs_
_.njsproj
_.sln
\*.sw?
