import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Jogadores} from './../imports/api/jogadores';
import {Tracker} from 'meteor/Tracker';



const renderizaLista = function(Lista){
    
    return Lista.map(function(Item){
        return <p key={Item._id}> {Item.nome} tem {Item.score} Pontos</p>
    });
};

const enviarForm = function(e){
    let jogadorNome = e.target.jogadorNome.value;
    e.preventDefault();
    if(jogadorNome){
        e.target.jogadorNome.value = '';
        Jogadores.insert({
            nome : jogadorNome,
            score : 0
        });
    }
};

Meteor.startup(function(){
    Tracker.autorun(function(){
        let ListaJogadores = Jogadores.find().fetch();
        let nome = 'Mariana golfrey'
         let title = 'Ranking de usuario'
         let jsx = (
                <div>
                  <h1>{title}</h1>
                    <p>ola, {nome}</p>
                    <p>Projeto susi</p>
                    <form onsubmit = {enviarForm}>
                        <input type="text" name ="jogadorNome" placeholder="Insira o nome"/>
                        <button> adionar jogador</button>
                    </form>

                    {renderizaLista(ListaJogadores)}
                </div>
            );
    ReactDom.render(jsx, document.getElementById('home'));
});
});
