import styled from 'styled-components'

export const SevenDaysWrapper = styled.div`
    width:98%;
    display: flex;
    align-items: center;
    padding:0em 4em;
    background-color: rgba(0,0,0,.40);
    color:rgba(255,255,255,.8);
    
    & + &{
    margin-top: .3em;
}
    .day-date-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:90px;

        .day{
            font-size: 17px;
        }

        .date{
            margin-top:.3em;
            color: rgba(255,255,255,.6)
        }

    }
    
    .weather-icon{
    margin-left: .8em;
    }

    .temp{
        margin-left: .5em;
        font-size: 23px;
        font-weight: 500;
    }

    .desc{
        margin-left:1em;
        font-weight: 500;
        font-size: 17px;
    }

    .morning-temp-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1em;
        margin-left: auto;

        .title{
            font-size:16px;
            font-weight: 500;
        }
        .temp{
            margin-top:.4em;
            font-size: 15px;
            width:max-content;
        }
    }

    .day-temp-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1em;
        
        .title{
            font-size:16px;
            font-weight: 500;
        }
        .temp{
            margin-top:.4em;
            font-size: 15px;
            width:max-content;
        }
    }

    .night-temp-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1em;

        .title{
            font-size:16px;
            font-weight: 500;
        }
        
        .temp{
            margin-top:.4em;
            font-size: 15px;
            width:max-content;
        }   
    }
`