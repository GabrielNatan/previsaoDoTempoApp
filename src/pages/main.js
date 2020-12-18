import React, { useState, useEffect } from 'react';
import {ContContainer,ContCityPrev, Title, SubTitle,ContInput, Hr, ContList} from './styled';
import axios from "axios";

const table = ["Rio de janeiro","São paulo", "Belo Horizonte","Brasilia","Belém"]
const table0 = ["Salvador","Curitiba", "Fortaleza","Manaus","Joao Pessoa"]


function Container(){
    const [result, setResult] = useState()
    const [cityName, setCityName] = useState()
    const [semana, setSemana] = useState([])
    const [modal, setModal] = useState(false)
    const [table1, setTable1] = useState([])
    const [table2, setTable2] = useState([])
    
    const req = ()=>{
        
        axios.get(`https://api.hgbrasil.com/weather?key=bf24855d&format=json-cors&city_name=${cityName}`)
            .then(res =>{

                let semanaList = res.data.results.forecast.filter((item,index)=>{
                    return index <= 4 ? item : null
                })
                setResult(res.data.results)
                setSemana(semanaList)
                setCityName(res.data.results.city_name)
                
        })
    }

    
    const newReq = (list, func)=>{
        let newList = []

    
         list.forEach( item=>{
                 axios.get(`https://api.hgbrasil.com/weather?key=bf24855d&format=json-cors&city_name=${item}`)
                .then(res => res.data.results)
                .then(res=>{
                    newList.push({
                        cidade: res.city_name,
                        max:res.forecast[0].max,
                        min: res.forecast[0].min
                    })
                    
                    
                }).then(res=>{return newList.length === 5 ? func(newList):null})
            })
    
    }

    useEffect(()=>{
        newReq(table, setTable1)
        newReq(table0, setTable2)
        
    },[])

    function closeModal(){
        setModal(false)
    }
    return(
        <>
            <ContContainer>
                <Title>Previsão do tempo</Title>
                {
                    modal ?
                <ContCityPrev>
                    <span onClick={closeModal} className="close">X</span>
                    <strong>{result.city} - Brasil</strong>
                    <h2>{result.temp}° {result.description}</h2>
                    <div className="temp">
                        <span><i className="fas fa-arrow-down"></i>{result.forecast[0].min}° <i className="fas fa-arrow-up"></i>{result.forecast[0].max}°</span>
                        <p>Sensação: {result.temp - 1}°C</p>
                    </div>
                    <div className="adicional">
                        <p>Vento: {result.wind_speedy}</p>
                        <p>Humidade: {result.humidity}%</p>
                    </div>
                    <div className="list-semana">
                        <ul>
                            {
                                semana.map((item,index)=>{
                                    return(
                                    <li key={index}>
                                        <strong>{item.weekday}</strong>
                                        <span>{item.min}° {item.max}°</span>
                                    </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    
                </ContCityPrev>
                    :null
                }
                <ContInput>
                    
                    <input type="text" value={cityName} onChange={(e)=>{setCityName(e.target.value)}} placeholder="Insira aqui o nome da cidade"/>
                    <button onClick={()=>req(cityName)}><i className="fas fa-search"></i></button>
                </ContInput>
                <Hr/>
                <ContList>
                    <SubTitle>Capitais</SubTitle>
            
                    <table>
                        <thead>
                            <tr>
                                <th>max</th>
                                <th>min</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table1.map((cada,index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{cada.min}°</td>
                                        <td>{cada.max}°</td>
                                        <td>{cada.cidade}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>max</th>
                                <th>min</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table2.map((cada, index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{cada.min}°</td>
                                        <td>{cada.min}°</td>
                                        <td>{cada.cidade}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                   
                </ContList>
            </ContContainer>
          
        </>
    )
}

export default Container;