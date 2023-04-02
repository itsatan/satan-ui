import Menu from "@/components/Menu/menu";
import MenuItem from "@/components/Menu/menuItem";

export default () => {
    return (
        <>
            <h5>Menu 菜单</h5>
            <h6>Horizontal</h6>
            <Menu onSelect={index => console.log(index)}>
                <MenuItem index={0}>cool link</MenuItem>
                <MenuItem index={1} disabled>cool link2</MenuItem>
                <MenuItem index={2}>cool link3</MenuItem>
            </Menu>
            <h6>Vertical</h6>
            <Menu mode='vertical' onSelect={index => console.log(index)}>
                <MenuItem index={0}>cool link</MenuItem>
                <MenuItem index={1} disabled>cool link2</MenuItem>
                <MenuItem index={2}>cool link3</MenuItem>
            </Menu>
        </>
    )
}