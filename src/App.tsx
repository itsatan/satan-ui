import './app.scss'
// import Button from "./page/Button"
// import Menu from './page/Menu'
// 使用字符串
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// fas 所有图标
library.add(fas)
// import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Button,{ButtonSize, ButtonType} from './components/Button/button'
import { useState } from 'react'

function App() {
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            <Button size={ButtonSize.Small} onClick={() => setShow(!show)}>Toggle</Button>
            <Transition in={show} timeout={300} animation='zoom-in-left'>
                <div>
                    <p>Edit <code>src/App.tsx</code></p>
                    <p>Edit <code>src/App.tsx</code></p>
                    <p>Edit <code>src/App.tsx</code></p>
                    <p>Edit <code>src/App.tsx</code></p>
                </div>
            </Transition>
            <Transition in={show} timeout={300} animation='zoom-in-top' wrapper>
                <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>A Small Button</Button>
            </Transition>
            {/* <Icon icon='coffee' theme='danger' size='10x' />
            <Icon icon='coffee' theme='dark' size='10x' />
            <Icon icon='coffee' theme='light' size='10x' />
            <Icon icon='coffee' theme='secondary' size='10x' />
            <Icon icon='coffee' theme='primary' size='10x' />
            <Icon icon='arrow-down' theme='success' size='10x' /> */}
            {/* <Button /> */}
            {/* <Menu /> */}
        </div>
    )
}

export default App