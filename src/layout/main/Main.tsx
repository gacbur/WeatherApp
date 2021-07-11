import { Switch, Route } from 'react-router'

import MainPage from '../../pages/mainPage/MainPage'

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </>
    )
}

export default Main
