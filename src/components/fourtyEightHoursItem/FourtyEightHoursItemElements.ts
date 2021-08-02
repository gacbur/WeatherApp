import styled from 'styled-components'

export const FourtyEightHoursItemWrapper = styled.div`
    width:98%;
    display: flex;
    align-items: center;
    padding:0em 4em;
    background-color: rgba(0,0,0,.40);
    color:rgba(255,255,255,.8);

    @media all and (max-width:1000px){
        padding:0em 1em;
    }

    @media all and (max-width:600px){
        padding:.6em .1em;
    }

    .time-date-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
        width:85px;

        @media all and (max-width:600px){
            width:65px;
        }

        .time{
            font-size: 18px;

            @media all and (max-width:600px){
            font-size: 14px;
            }

        }

        .date{
            text-align: center;
            margin-top: .3em;
            font-size: 14px;
            color: rgba(255,255,255, .6);

            @media all and (max-width:600px){
            font-size: 12px;
            }
        }
    }


.temp-icon-cnt{
    position:relative;
    display: flex;
    align-items: center;

    @media all and (max-width:600px){
        flex-direction: column;
        justify-content: center;
    }

    .weather-icon{
        margin-left: 1.5em;

        @media all and (max-width:600px){
            margin-left: 0em;
            margin-bottom: 1.2em;
            width:55px;
            }
    }

    .temp{
        margin-left: .5em;
        font-size: 23px;
        font-weight: 500;
        
        @media all and (max-width:600px){
            margin-left: 0em;
            font-size: 17px;
            position: absolute;
            top:45px;
            }
    }

}

    .desc{
        margin-left:1em;
        font-weight: 500;
        font-size: 17px;

        @media all and (max-width:600px){
            margin-left: .1em;
            font-size: 14px;
            }
    }

    .humidity-cnt{
        margin-left: auto;
        margin-right:2em;
        text-align: center;

        @media all and (max-width:400px){
            margin-right:.4em;
            margin-left: .4em;
            font-size: 14px;
        }
        
        @media all and (max-width:600px){
            font-size: 14px;
            }

        .humidity-title{
            font-size: 14px;

            @media all and (max-width:400px){
                font-size: 13px;
            }

            @media all and (max-width:600px){
            margin-left: .5em;
            font-size: 14px;
            }
        }

        .humidity-number{
            margin-top: .3em;

            @media all and (max-width:600px){
            font-size: 14px;
            }

            @media all and (max-width:400px){
            font-size: 14px;
            }
        }
    }

    .pressure-cnt{
        text-align: center;
        
        .pressure-title{
            font-size: 14px;
            margin-bottom: .3em;

            @media all and (max-width:600px){
                font-size: 13px;
                margin-left: none;
            }
        }
    }

    & + &{
        margin-top: .3em;
    }
`