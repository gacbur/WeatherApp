import { MainPageWrapper, HeaderWrapper, MainContentWrapper } from './MainPageElements'

import MainPageHeader from '../../components/mainPageHeader/MainPageHeader'

import NoCitiesModal from '../../components/noCitiesModal/NoCitiesModal'

const MainPage = () => {
    return (
        <>
            <MainPageWrapper>
                <MainContentWrapper>
                    <NoCitiesModal />
                </MainContentWrapper>
            </MainPageWrapper>
        </>
    )
}

export default MainPage
