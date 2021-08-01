import styled from 'styled-components'

export const SavedCityItemWrapper = styled.div`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    min-height: 520px;
    width:330px;
    background: ${(props: { color: string }) => props.color === 'day' ? 'rgb(153,238,252)' : 'rgb(86,66,156)'};
    background: ${(props: { color: string }) => props.color === 'day' ? 'linear-gradient(0deg, rgba(153,238,252,1) 0%, rgba(59,178,240,1) 100%)' : 'linear-gradient(0deg, rgba(86,66,156,1) 0%, rgba(59,72,166,1) 100%)'};
    border-radius: 20px;
    box-shadow: 0 0px 16px rgba(0,0,0,.2);
    color: ${(props: { color: string }) => props.color === 'day' ? 'rgba(0,0,0,.65)' : 'rgba(255,255,255,.95)'};
    transition: .3s;

    &:hover{
        opacity: .85 !important;
    }
`

export const SavedCityLoadingOverlay = styled.div`
    cursor:default;
    pointer-events: none;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: ${props => props.theme.elementsBackgroundColor};
    opacity: ${(props: { isActive: boolean }) => props.isActive ? 1 : 0};
    visibility: ${(props: { isActive: boolean }) => props.isActive ? 'visible' : 'hidden'};
    transition: .2s;
`

export const SavedCityErrorOverlay = styled.div`
    cursor:default;
    color: rgba(0,0,0,.7) !important;
    padding:0em 1.5em;
    text-align: center;
    pointer-events: none;
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: white;
    opacity: ${(props: { isActive: boolean }) => props.isActive ? 1 : 0};
    visibility: ${(props: { isActive: boolean }) => props.isActive ? 'visible' : 'hidden'};
    transition: .2s;
`
export const SavedCityItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:2em 1em;

    .options-btn-cnt{
    position: relative;
    display: flex;
    width:100% !important;
    margin-bottom: 1em;

    .options-btn{
        color:white;
        margin-right: .5em;
        background-color: transparent;
        border:none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        height: 25px;
        width:40px;
        margin-left: auto;
        transition:.2s;
    
        &:hover{
            
        }
    }
}

    .city-name{
        font-size: 30px;
    }

    .weather-desc{
        font-size: 17px;
        margin-top:1.8em;
    }

    .weather-icon{
        width:135px;
        margin: -1.4em 0em;
    }

    .temp-main{
        font-size: 62px;
        padding-left:.4em;
    }
`

export const MinMaxTempCnt = styled.div`
    width:70%;
    display: flex;
    margin-top: 2.2em;

    .temp-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        &:first-child{
            margin-right:auto;
        }

        .temp-type{
            font-size: 17px;
        }

        .temp{
            font-size: 38px;
        }
    }
`
