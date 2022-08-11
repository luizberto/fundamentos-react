import React from "react";
import Parametros from "./components/basico/Parametros";
import Sorteio from "./components/basico/Sorteio";
import Card from "./components/layout/Card";
import Familia from "./components/basico/Familia";
import Silveira from "./components/basico/Silveira";
import SilveiraMembros from "./components/basico/SilveiraMembros";
import Notas from "./components/repeticao/Notas";
import Loja from "./components/repeticao/Loja";
import Usuario from "./components/condicional/Usuario";
import ParouImpar from "./components/condicional/ParouImpar";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import MegaSena from "./components/mega/MegaSena";

export default () => {
    return (
        <>
            <h1>Documentação basica de React</h1>
            <div className="app">
                <div className="card-zone">

                    <Card titulo = "mega sena -> exemplo de sorteios">
                        <MegaSena qtde={6}/>
                    </Card>

                    <Card titulo = "componente controlado">
                        <Input/>
                    </Card>

                    <Card titulo = "comunicação indireta">
                        <IndiretaPai/>
                    </Card>

                    <Card titulo = "condicional com componente">
                        <ParouImpar numero = {5}/>
                        <Usuario usuario={{nome: "Luiz"}} />
                        <Usuario usuario={{numero: 13}}/>
                    </Card>

                    <Card titulo="Props">
                        <Parametros nome="Luiz" nota={6} />
                    </Card>

                    <Card titulo="sorteio">
                        <Sorteio min={1} max={10} />
                    </Card>

                    <Card titulo="Componentes filhos 1">
                        <Familia sobrenome="Pereira" />
                    </Card>

                    <Card titulo="Componentes filhos 2">
                        <Silveira sobrenome="Silveira">
                            <SilveiraMembros nome="joao" />
                            <SilveiraMembros nome="Breno" />
                        </Silveira>
                    </Card>

                    <Card titulo="Repetiçao map">
                        <Notas />
                    </Card>

                    <Card titulo="exercicio repetição -> produtos">
                        <Loja />
                    </Card>
                </div>


            </div>
        </>
    )
}