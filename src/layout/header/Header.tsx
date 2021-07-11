import { FC } from 'react'

import { HeaderWrapper, Logo, ThemeSwitchBtn } from './HeaderElements'

import { FaMoon, FaSun } from 'react-icons/fa'

type HeaderProps = {
    theme: string,
    toggleTheme: (() => void)
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {

    return (
        <HeaderWrapper>
            <Logo to="/">
                <h2>
                    Weather app
                </h2>
            </Logo>
            <ThemeSwitchBtn
                type='button'
                onClick={() => toggleTheme()}
            >
                {theme === 'light' ? <FaMoon className="icon" /> : <FaSun className="icon" />}
            </ThemeSwitchBtn>
        </HeaderWrapper>
    )
}

export default Header
