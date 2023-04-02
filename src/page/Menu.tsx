import Menu from "@/components/Menu/menu";
import MenuItem from "@/components/Menu/menuItem";
import SubMenu from "@/components/Menu/subMenu";

export default () => {
    return (
        <>
            <h5>Menu 菜单</h5>
            <h6>Horizontal</h6>
            <Menu onSelect={index => console.log(index)}>
                <MenuItem>cool link 1</MenuItem>
                <MenuItem disabled>cool link 2</MenuItem>
                <MenuItem>cool link 3</MenuItem>
            </Menu>
            <h6>Vertical</h6>
            <Menu mode='vertical' onSelect={index => console.log(index)}>
                <MenuItem>cool link 1</MenuItem>
                <MenuItem>cool link 2</MenuItem>
                <MenuItem>cool link 3</MenuItem>
                <MenuItem disabled>cool link 4</MenuItem>
            </Menu>
            <h6>Horizontal subMenu</h6>
            <Menu onSelect={index => console.log(index)}>
                <MenuItem>cool link 1</MenuItem>
                <SubMenu title="cool link 2">
                    <MenuItem>cool link 2 - 1</MenuItem>
                    <MenuItem>cool link 2 - 2</MenuItem>
                </SubMenu>
                <MenuItem>cool link 3</MenuItem>
            </Menu>
            <h6>Vertical subMenu</h6>
            <Menu mode='vertical' onSelect={index => console.log(index)} defaultOpenSubMenus={['1']}>
                <MenuItem>cool link 1</MenuItem>
                <SubMenu title="cool link 2">
                    <MenuItem>cool link 2 - 1</MenuItem>
                    <MenuItem>cool link 2 - 2</MenuItem>
                </SubMenu>
                <MenuItem>cool link 3</MenuItem>
            </Menu>
        </>
    )
}