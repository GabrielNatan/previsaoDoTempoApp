import React from 'react'
import styled from 'styled-components'


export const ContContainer = styled.div`
    max-width:500px;
    margin:60px auto 0 auto;
    display: flex;
    height:100%;
    justify-content:center;
    flex-direction:column;
`

export const ContCityPrev = styled.div`
    width:100%;
    height:300px;
    padding:20px 40px;
    background: rgba(255,255,255,.93);
    margin:0 0 10px 0 ;
    position: relative;
    display:flex;
    flex-wrap:wrap;
        .close{
            position: absolute;
            right:20px;
            font-weight:700;
            color:#FF7800;
            cursor:pointer;
        }
        
        strong{
            display:block;
            width:100%;
            font-size:14px;
        }

        h2{
            color: #000;
            font-size:2.5rem;
            display:block;
            width:100%;
        }

        .temp{
            display:flex;
            width:100%;
            justify-content: space-between;

                span{
                    font-weight:700;
                    flex:1;
                        i{
                            color:#FF7800;
                        }
                }
                p{
                    flex:1;
                }

        }

        .adicional{
            display:flex;
            width:100%;
            
            p{
                flex:1;
            }
        }
        .list-semana{
            width:100%;
            border-top:1px solid #FF7800;
            padding:15px 15px 0 15px;;
        }
        ul{
            width:100%;
            display:flex;
            list-style:none;
            justify-content:space-between;
                li{
                    flex:1;
                }
        }
`

export const Title = styled.h1`
    width:100%;
    text-align:center;
    color:#FFF;
    font-size:3.2rem;
    margin:0px 0 30px 0;
`

export const SubTitle = styled.h1`
    width:100%;
    text-align:left;
    color:#FFF;
    font-size:1.8rem;
    margin:30px 0;
`

export const ContInput = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-bottom:30px;
    input{
        width:100%;
        max-width:350px;
        padding:10px 15px;
        border:1px solid #DDD;
        border-right: none;
        font-size:1.2rem;
    }
    button{
        padding:10px 15px;
        border:1px solid #DDD;
        border-left: none;
        background: #FFF;
        font-size:1.2rem;

    }
`

export const Hr = styled.hr`
    margin:10px 0;
    width:100%;
    border:none;
    height:1px;
    background: #FFF;
`
export const ContList = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:0 60px 0 90px;

    table{
        list-style:none;
        flex:1;

        th{
            text-align:left;
            font-size:12px;
            font-weight:normal;
            color: #AD730C;
        }

        td{
            font-weight:700;
            font-size:13px;
            padding:10px 0;
        }
    }
`
