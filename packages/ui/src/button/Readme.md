# Button


#### Button
```jsx harmony
import React from 'react'
import Button from './Button'

const ButtonExample = () => (
  <div style={{ margin: '5px' }}>
    <Button>
      text
    </Button>
  </div>
)

export default ButtonExample
```

#### Button, color gray400, small
```jsx harmony
import React from 'react'
import Button from './Button'

const GrayButton = () => (
  <div style={{ margin: '5px' }}>
    <Button
      color='gray400'
      height='small'
    >
      text
    </Button>
  </div>
)

export default GrayButton
```

#### Ghost
```jsx harmony
import React from 'react'
import Ghost from './Ghost'

const GhostExample = () => (
  <div style={{ margin: '5px' }}>
    <Ghost>
      text
    </Ghost>
  </div>
)

export default GhostExample
```

#### Ghost, color gray, height small
```jsx harmony
import React from 'react'
import Ghost from './Ghost'

const GhostExample = () => (
  <div style={{ margin: '5px' }}>
    <Ghost
      color='gray400'
      height='small'
    >
      text
    </Ghost>
  </div>
)

export default GhostExample
```

#### Ghost, color gray600, height medium, width medium
```jsx harmony
import React from 'react'
import Ghost from './Ghost'

const GhostExample = () => (
  <div style={{ padding: '5px', backgroundColor: '#000', width: '40px' }}>
    <Ghost
      color='gray600'
      height='medium'
      width='medium'
    >
      i
    </Ghost>
  </div>
)

export default GhostExample
```
