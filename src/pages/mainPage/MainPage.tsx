import { MainPageWrapper, MainContentWrapper } from './MainPageElements'

import NoCitiesModal from '../../components/noCitiesModal/NoCitiesModal'

const MainPage = () => {


    return (
        <>
            <MainPageWrapper>
                <MainContentWrapper>
                    {<NoCitiesModal />}
                </MainContentWrapper>
            </MainPageWrapper>
        </>
    )
}

export default MainPage
