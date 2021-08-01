import { FC } from 'react'

import { HeaderWrapper, Logo, ThemeSwitchBtn } from './HeaderElements'

import { FaMoon, FaSun } from 'react-icons/fa'
import { TiWeatherPartlySunny } from 'react-icons/ti'

type HeaderProps = {
    theme: string,
    toggleTheme: (() => void)
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {

    return (
        <HeaderWrapper>
            <Logo to="/">
                <h2>
                    <TiWeatherPartlySunny className='icon' /> Weather Forecast
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
