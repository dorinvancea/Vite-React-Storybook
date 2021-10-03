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

`yarn build`  

### Alias:
Use @ to target `./src` folder, e.g:
```
import Button from '@/components/Button';
<Button>This is a button</Button>
```
### Alias configs:
`./storybook/main.js`  
`vite.config.js`

### Styled Components: 
Usage:
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

### Learn more about:   
- Vite: [https://vitejs.dev](https://vitejs.dev)
- Storybook: [https://storybook.js.org](https://storybook.js.org)
- Styled Components: [https://styled-components.com](https://styled-components.com)