import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import { MenuButton } from '@mui/base/MenuButton'
import { MenuItem } from '@mui/base/MenuItem'

export default function DropDown({ mode, children, params }) {

    const newParams = {
        ...params,
        //addNew required param to choose mode save or edit
        addNew: false
    }

    return (
        <Dropdown>
            <MenuButton>
                {children}
            </MenuButton>
            <Menu className={`
                cursor-pointer font-sans box-border rounded-lg 
                font-semibold px-4 py-2 b bg-slate-900
                focus-visible:outline-none shadow-sm
            `}>
                {mode?.map((dropDown) => {
                    return (
                        <MenuItem className={`hover:bg-slate-800 px-2 rounded`}
                            onClick={() => dropDown.function(newParams)}
                            key={dropDown.title}>
                            {dropDown.title}
                        </MenuItem>
                    )
                })}
            </Menu>
        </Dropdown>
    )
}