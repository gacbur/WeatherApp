import { Switch, Route } from 'react-router'

import MainPage from '../../pages/mainPage/MainPage'
import SingleCityWeather from '../../pages/singleCityWeather/SingleCityWeather'
import NotFound from '../../pages/notFound/NotFound'

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/weather-item/:id" component={SingleCityWeather} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Main
