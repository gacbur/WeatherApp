import styled from 'styled-components'

export const SevenDaysWrapper = styled.div`
    width:98%;
    display: flex;
    align-items: center;
    padding:0em 4em;
    background-color: rgba(0,0,0,.40);
    color:rgba(255,255,255,.8);

    @media all and (max-width:700px){
        padding:.5em 2em 2em 2em;
    }
 
    @media all and (max-width:600px){
        flex-direction: column;
        align-items: center;
    }
    
    @media all and (max-width:400px){
        padding:.5em 1em 2em 1em;
    }
    
    & + &{
    margin-top: .3em;
    }

    .main-info-cnt{
        display: flex;
        align-items: center;
        margin-right: 1em;

        @media all and (max-width:600px){
            margin-right: 0em;
        }

        @media all and (max-width:400px){
            margin-left: 1em;
        }
        
        .day-date-cnt{
            display: flex;
            flex-direction: column;
            align-items: center;
            width:90px;
            
            .day{
                font-size: 17px;

                @media all and (max-width:400px){
                    font-size: 16px;
                 }
            }
            
            .date{
                margin-top:.3em;
                color: rgba(255,255,255,.6)
            }
            
        }
        
        .weather-icon{
            margin-left: .8em;

            @media all and (max-width:600px){
                width:65px;
            }
        }
        
        .temp{
            margin-left: .5em;
            font-size: 23px;
            font-weight: 500;

            @media all and (max-width:400px){
                    margin-left: 0em;      
                    font-size: 20px;
                 }
        }
        
        .desc{
            margin-left:1em;
            font-weight: 500;
            font-size: 17px;
        }
    }

    .time-of-day-temp-cnt{
        display: flex;
        align-items: center;
        margin-left: auto;

        @media all and (max-width:600px){
        margin-left: none;
        width:100%;
        justify-content: center;
        }
        
        .morning-temp-cnt{
            display: flex;
            flex-direction: column;
            margin-right: 1em;
            justify-content: center;
            align-items: center;
            display: flex;

            .title{
                margin:none;
                display: flex;
                font-size:16px;
                font-weight: 500;
            }
            .temp{
                margin-top:.4em;
                font-size: 15px;
            }
        }
        
        .day-temp-cnt{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1em;
            text-align: center;

        
        .title{
            font-size:16px;
            font-weight: 500;
        }
        .temp{
            margin-top:.4em;
            font-size: 15px;
        }
    }

    .night-temp-cnt{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 1em;

        @media all and (max-width:600px){
                margin-right: 0em;
            }

        .title{
            font-size:16px;
            font-weight: 500;
        }
        .temp{
            margin-top:.4em;
            font-size: 15px;
        }  
    }
}

`