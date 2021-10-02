# Vite + React + Storybook
Clean and basic setup for **Vite** with **React** and **Storybook**.   

### Includes:
- Alias folders for both Vite & Storybook
- SASS/SCCS support

### Install:  
`yarn`

### Use:
`yarn dev`  
`yarn storybook`

### Alias:
Use @ to target `./src` folder, e.g:
```
import { Button } from '@/stories/Button';
<Button>This is a button</Button>
```
### Alias config:
`./storybook/main.js`  
`vite.config.js`

### Learn more about:   
- Vite: [https://vitejs.dev](https://vitejs.dev)
- Storybook: [https://storybook.js.org](https://storybook.js.org)
- Sass: [https://sass-lang.com](https://sass-lang.com)

---

## Optional: Add other packages
#### Styled Components: 
`yarn add styled-components`  
Usage styled components:
```
import styled from 'styled-components';

const Button = styled.a`
  background-colour: green;
  padding: 1rem 2rem;
`

const App = () => {
  return (
    <Button>I am a button</Button>
  )
}
export default App;
```
Learn more about Styled Components: [https://styled-components.com](https://styled-components.com)
