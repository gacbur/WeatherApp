import styled from 'styled-components'

export const FourtyEightHoursItemWrapper = styled.div`
    width:98%;
    display: flex;
    align-items: center;
    padding:0em 4em;
    background-color: rgba(0,0,0,.40);
    color:rgba(255,255,255,.8);

    .time-date-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 17px;
        font-weight: 500;
        width:85px;

        .time{
            font-size: 18px;
        }

        .date{
            margin-top: .3em;
            font-size: 14px;
            color: rgba(255,255,255, .6);
        }
    }

    .weather-icon{
        margin-left: 1.5em;
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

    .humidity-cnt{
        margin-left: auto;
        margin-right:2em;

        .humidity-title{
            font-size: 14px;
        }

        .humidity-number{
            margin-top: .3em;
        }
    }

    .pressure-cnt{
        
        .pressure-title{
            font-size: 14px;
            margin-bottom: .3em;

        }

        .pressure-number{
        }
    }

    & + &{
        margin-top: .3em;
    }
`