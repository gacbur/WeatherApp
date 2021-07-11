import { MainPageWrapper, HeaderWrapper, SidebarAndMapWrapper } from './MainPageElements'

import MainPageHeader from '../../components/mainPageHeader/MainPageHeader'
import MainPageSidebar from '../../components/mainPageSidebar/MainPageSidebar'
import MainPageMap from '../../components/mainPageMap/MainPageMap'

const MainPage = () => {
    return (
        <>
            <MainPageWrapper>
                <HeaderWrapper>
                    <MainPageHeader />
                </HeaderWrapper>
                <SidebarAndMapWrapper>
                    <MainPageSidebar />
                    <MainPageMap />
                </SidebarAndMapWrapper>
            </MainPageWrapper>
        </>
    )
}

export default MainPage
