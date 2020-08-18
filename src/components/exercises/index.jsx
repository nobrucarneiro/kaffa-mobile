import React, { useState, useEffect } from 'react';
import Img from './kaffa.png';
import './style.css';

export default function Exercises(){

    const [currentDateTime, setCurrentDateTime] = useState('');
    const [cnpj, setCnpj] = useState('')

    useEffect(()=>{

        const currentDate = async () => {
            await fetch('http://worldclockapi.com/api/json/utc/now')
            .then(response => response.json())
            .then(data => {
                let BrDate = new Date(data.currentDateTime).toLocaleString("pt-BR",{timeZone: "America/Sao_Paulo"});
                setCurrentDateTime(BrDate)
            });
        }
        currentDate();
    },[])

    function cnpjMask(valor){
        return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
    }

    return(
        <main className="content">
        
            <article className="radius">
                <header>
                    <h3>Validate CNPJ format (Mask)</h3>
                    <p>Given a string, check if it looks like a CNPJ, considering two formats:</p>
                </header>
                
                <section>
                    <header>
                        <form>
                            <input 
                                type="text" 
                                name="cnpj" 
                                value={cnpj}
                                onChange={e => setCnpj(cnpjMask(e.target.value))} 
                                maxLength="14"/>
                        </form>
                    </header>
                </section>
            </article>
       
            <article className="radius">
                <header>
                    <h3>Rest Client - World Clock</h3>
                    <p>Application that queries a server and displays the current date/time hour in local and UTC timezones.</p>
                    <p>{currentDateTime} "America/Sao_Paulo"</p>
                </header>            
            </article>

            <article className="radius">
                <header>
                    <h3>Entity Relationship Diagram - Simple Order Manager</h3>
                    <p>Design the model of a simple Order Manager System.</p>
                    <img src={Img} alt="Alguma coisa"/>
                </header>            
            </article>
            
        </main>
    )
}