import Button, { ButtonType, ButtonSize } from "@/components/Button/button"

function App() {
    return (
        <div className="App">
            <Button disabled className="default">默认按钮(禁用)</Button>
            <Button btnType={ButtonType.Default} onClick={() => console.log('hello world')}>默认按钮</Button>
            <Button btnType={ButtonType.Primary}>主要按钮</Button>
            <Button btnType={ButtonType.Success}>成功按钮</Button>
            <Button btnType={ButtonType.Info}>消息按钮</Button>
            <Button btnType={ButtonType.Warning}>警告按钮</Button>
            <Button btnType={ButtonType.Danger}>危险按钮</Button>
            <Button btnType={ButtonType.Light}>Light按钮</Button>
            <Button btnType={ButtonType.Dark}>Dark按钮</Button>
            <Button btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>Link按钮</Button>
            <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Link按钮(禁用)</Button>
            <hr />
            <Button size={ButtonSize.Large}>默认按钮(Large)</Button>
            <Button size={ButtonSize.Small}>默认按钮(Small)</Button>
        </div>
    )
}

export default App
