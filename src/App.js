import './App.css';
import React, { useState } from 'react';


function App() {

  const [numAtual, setNumAtual] = useState(0);
  const [numAntigo, setNumAntigo] = useState(0);
  const [operador, setOperador] = useState();












  function inputNum(e){
    var input = (e.target.value);
    if(numAtual === 0){

      setNumAtual(input)
    }
    else{
      setNumAtual(numAtual + input)

    }
  }

  function limpar(){
    setNumAtual(0)
  }

  function porcentagem(){
    var numero = numAtual
    var calculo = numero/100
    setNumAtual(calculo)
  }

  function operacao(e){
    setOperador(e.target.value)
    setNumAntigo(numAtual)
    setNumAtual("")
  }

  function calcular(){


    if(operador == "+"){
      setNumAtual(parseFloat(numAntigo) + parseFloat(numAtual))
    }
    if(operador == "X"){
      setNumAtual(parseFloat(numAntigo) * parseFloat(numAtual))
    }
    if(operador == "/"){
      setNumAtual(parseFloat(numAntigo) / parseFloat(numAtual))
    }
    if(operador == "-"){
      setNumAtual(parseFloat(numAntigo) - parseFloat(numAtual))
    }
  }





  return (
    <>
    
    <div className='celular'>
       <div className='visor2'></div>
       <div className='visor'>
            <div className='modos'>
              <div className='light-ativado' ><div className='sol'></div></div>
                
                <div className='dark-desativado'><div className='lua'></div></div>
            </div>
            <div className='clear'></div>
            <div className='resultado'>
              <p id='saida'>{numAtual}</p>
            </div>

       </div>
       <div className='teclado'>
          <div className='numeros'>
            <ul className='primeira'>
              <button onClick={limpar}>C</button>
              <button>+/-</button>
              <button onClick={porcentagem}>%</button>
              <button onClick={operacao} value={"/"}>/</button>
            </ul>
            <ul className='segunda'>
            <button className='numero-t'onClick={inputNum} value={7}>7</button>
              <button className='numero-t'onClick={inputNum} value={8}>8</button>
              <button className='numero-t'onClick={inputNum} value={9}>9</button>
              <button onClick={operacao} value={"X"}>X</button>
            </ul>
            <ul className='terceira'>
            <button className='numero-t'onClick={inputNum} value={4}>4</button>
              <button className='numero-t'onClick={inputNum} value={5}>5</button>
              <button className='numero-t'onClick={inputNum} value={6}>6</button>
              <button onClick={operacao} value={"-"}> -</button>
            </ul>
            <ul className='quarta'>
              <button className='numero-t'onClick={inputNum} value={1}>1</button>
              <button className='numero-t'onClick={inputNum} value={2}>2</button>
              <button className='numero-t'onClick={inputNum} value={3}>3</button>
              <button onClick={operacao} value={"+"}> +</button>
            </ul>
            <ul className='quinta'>
              <button className='zero' onClick={inputNum} value={0} >0</button>
              <button className='ponto'onClick={inputNum} value={"."}>.</button>
              <button className='igual'onClick={calcular}>=</button>
            </ul>
            
          </div>
       </div>
    </div>

    </>
  );
}

export default App;
