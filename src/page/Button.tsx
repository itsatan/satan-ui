import Button, { ButtonType, ButtonSize } from "@/components/Button/button"

const SMALL_BUTTON = ButtonSize.Small;
const LARGE_BUTTON = ButtonSize.Large;

export default () => {
    return (
        <>
            <h5>Button 按钮</h5>
            <h6>Small</h6>
            <div className="box">
                <Button size={SMALL_BUTTON} btnType={ButtonType.Default}>默认按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Primary}>主要按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Success}>成功按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Info}>消息按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Warning}>警告按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Danger}>危险按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Light}>Light按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Dark}>Dark按钮</Button>
                <Button size={SMALL_BUTTON} btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>Link按钮</Button>
            </div>
            <h6>Disabled</h6>
            <div className="box">
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Default}>默认按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Primary}>主要按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Success}>成功按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Info}>消息按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Warning}>警告按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Danger}>危险按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Light}>Light按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Dark}>Dark按钮</Button>
                <Button disabled size={SMALL_BUTTON} btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>Link按钮</Button>
            </div>
            <h6>Middle</h6>
            <div className="box">
                <Button btnType={ButtonType.Default}>默认按钮</Button>
                <Button btnType={ButtonType.Primary}>主要按钮</Button>
                <Button btnType={ButtonType.Success}>成功按钮</Button>
                <Button btnType={ButtonType.Info}>消息按钮</Button>
                <Button btnType={ButtonType.Warning}>警告按钮</Button>
                <Button btnType={ButtonType.Danger}>危险按钮</Button>
                <Button btnType={ButtonType.Light}>Light按钮</Button>
                <Button btnType={ButtonType.Dark}>Dark按钮</Button>
                <Button btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>Link按钮</Button>
            </div>
            <h6>Large</h6>
            <div className="box">
                <Button size={LARGE_BUTTON} btnType={ButtonType.Default}>默认按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Primary}>主要按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Success}>成功按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Info}>消息按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Warning}>警告按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Danger}>危险按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Light}>Light按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Dark}>Dark按钮</Button>
                <Button size={LARGE_BUTTON} btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>Link按钮</Button>
            </div>
            <hr />
        </>
    )
}