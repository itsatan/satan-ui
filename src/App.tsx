import './app.scss'
import Button from "./page/Button"
import Menu from './page/Menu'
// 使用字符串
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// fas 所有图标
library.add(fas)
import Icon from './components/Icon/icon'

function App() {
    return (
        <div className="App">
            {/* <Icon icon='coffee' theme='danger' size='10x' />
            <Icon icon='coffee' theme='dark' size='10x' />
            <Icon icon='coffee' theme='light' size='10x' />
            <Icon icon='coffee' theme='secondary' size='10x' />
            <Icon icon='coffee' theme='primary' size='10x' />
            <Icon icon='arrow-down' theme='success' size='10x' /> */}
            {/* <Button /> */}
            <Menu />
        </div>
    )
}

export default App