import styled from 'styled-components'

export const SavedCityItemWrapper = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 520px;
    width:330px;
    background-color: #98eafa;
    border-radius: 20px;
    box-shadow: 0 0px 16px rgba(0,0,0,.2);
    
    
`

export const SavedCityLoadingOverlay = styled.div`
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,.3);
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
        display: flex;
        width:100% !important;
        margin-bottom: 1em;

        .options-btn{
            margin-right: .5em;
            background-color: transparent;
            border:none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: rgba(0,0,0,.7);
            height: 25px;
            width:40px;
            margin-left: auto;
            transition:.2s;
        
            &:hover{
                color: rgba(0,0,0,.5)
            }
        }
    }

    .city-name{
        font-size: 30px;
        color:rgba(0,0,0,.65);
    }

    .weather-desc{
        font-size: 17px;
        margin-top:1.8em;
        color:rgba(0,0,0,.5);
    }

    .weather-icon{
        width:135px;
        margin: -1.4em 0em;
    }

    .temp-main{
        font-size: 62px;
        padding-left:.4em;
        color:rgba(0,0,0,.65);
    }
`

export const MinMaxTempCnt = styled.div`
    width:70%;
    display: flex;
    margin-top: 2.2em;
    color:rgba(0,0,0,.65);

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
