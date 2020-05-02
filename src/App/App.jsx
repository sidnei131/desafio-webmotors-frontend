import React, { Component } from 'react';
import './App.css';
import Checkbox from '../Form/Checkbox';
import Radio from '../Form/Radio';
// import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../Form/Button';
import Loader from '../Loader';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      radioAcao: [1,0,0],
      localizacao: '',
      raio: '',
      marca: '',
      marcas: [],
      modelo: '',
      modelos: [],
      ano: '',
      faixaPreco: '',
      versao: '',
      versoes: [],
      filtros: ''
    };
  }

  componentDidMount = () => {
    this.getMarcas();
  }

  getMarcas = () => {
    fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make').then(res => res.json()).then(
      result => {
        this.setState({
          marcas: result,
          loading: false
        });
      },
      err => {
        console.error(err);
        this.setState({loading: false});
      }
    );
  }

  handleChangeMarca = e => {
    let marca = e.target.value;
    if (marca >= 0) {
      this.getModelos(marca);
      this.setState({
        marca,
        modelos: [],
        versoes: []
      });
    } else {
      this.setState({
        marca: '',
        modelo: '',
        versao: '',
        modelos: [],
        versoes: []
      });
    }
  }

  getModelos = (IdMarca) => {
    if (IdMarca >= 0) {
      this.setState({loading: true}, () => {
        fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${IdMarca}`).then(res => res.json()).then(
          modelos => {
            this.setState({modelos, loading: false});
          },
          err => {
            console.error(err);
            this.setState({loading: false});
          }
        );
      });
    } else {
      this.setState({
        versao: '',
        versoes: []
      });
    }
  }

  hanldeChangeModelo = (e) => {
    let modelo = e.target.value;

    if (modelo >= 0) {
      this.getVersoes(modelo);
      this.setState({modelo});
    } else {
      this.setState({
        versao: '',
        versoes: []
      });
    }
  }

  getVersoes = (IdModelo) => {
    this.setState({loading: true}, () => {
      if (IdModelo >= 0) {
        fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${IdModelo}`).then(res => res.json()).then(
          versoes => {
            this.setState({versoes, loading: false});
          },
          err => {
            console.error(err);
            this.setState({loading: false});
          }
        );
      } else {
        this.setState({
          versao: '',
          versoes: []
        });
      }
    });
  }

  render() {
    let anos = [];
    for (let i = 2021; i >= 1970; i--) {
      anos.push({ID: i, Name: i.toString()});
    }

    return <>
      <Header />
      <div id="app">
        <Loader show={this.state.loading ? 'show' : 'hide'} />

        <div className="RadioGroup">
          <Radio label="Comprar Carros" attr={{name: 'acao', defaultChecked: this.state.radioAcao[0] === 1}} active={this.state.radioAcao[0] === 1 ? 'true' : 'false'} onChange={() => { this.setState({radioAcao: [1,0,0]}) }} />
          <Radio label="Comprar Motos" attr={{name: 'acao', defaultChecked: this.state.radioAcao[1] === 1}} active={this.state.radioAcao[1] === 1 ? 'true' : 'false'} onChange={() => { this.setState({radioAcao: [0,1,0]}) }} />
          <Radio label="Quero Vender" attr={{name: 'acao', defaultChecked: this.state.radioAcao[2] === 1}} active={this.state.radioAcao[2] === 1 ? 'true' : 'false'} onChange={() => { this.setState({radioAcao: [0,0,1]}) }} />
        </div>
        <Checkbox label="Novos" attr={{name: 'novo', defaultChecked: true}} />
        <Checkbox label="Usados" attr={{name: 'usado', defaultChecked: true}} />
        <br/>
        <Select label="Selecione sua cidade"
          attr={{style: {width:295}}}
          hasValue={this.state.localizacao !== ''}
          onChange={(e) => { this.setState({localizacao: e.target.value}) }}
          options={[
            {ID: 'São Paulo - SP', Name: 'São Paulo - SP'},
            {ID: 'Rio de Janeiro - RJ', Name: 'Rio de Janeiro - RJ'},
            {ID: 'Belo Horizonte - MG', Name: 'Belo Horizonte - MG'},
            {ID: 'Vitória - ES', Name: 'Vitória - ES'}
          ]}
        />
        <Select label="Raio" 
          attr={{style: {width:125}}}
          hasValue={this.state.raio !== ''}
          onChange={(e) => { this.setState({raio: e.target.value}) }}
          options={[
            {ID: '0km', Name: '0km'},
            {ID: '50km', Name: '50km'},
            {ID: '100km', Name: '100km'},
            {ID: '150km', Name: '150km'}
          ]}
        />
        <Select label="Marca"
          id='SelectMarca'
          attr={{style: {width:200}}}
          hasValue={this.state.marca !== ''}
          onChange={this.handleChangeMarca}
          options={this.state.marcas}
        />
        <Select label="Modelo"
          last
          attr={{style: {width:209 }}}
          hasValue={this.state.modelo !== ''}
          onChange={this.hanldeChangeModelo}
          options={this.state.modelos}
        />
        <br/>
        <Select label="Ano Desejado"
          attr={{style: {width:210}}}
          hasValue={this.state.ano !== ''}
          onChange={(e) => { this.setState({ano: e.target.value}) }}
          options={anos}
        />
        <Select label="Faixa de preço"
          attr={{style: {width:210}}}
          hasValue={this.state.faixaPreco !== ''}
          onChange={(e) => { this.setState({faixaPreco: e.target.value}) }}
          options={[
            {ID: 'Até R$ 5.000,00', Name: 'Até R$ 5.000,00'},
            {ID: 'Até R$ 10.000,00', Name: 'Até R$ 10.000,00'},
            {ID: 'Até R$ 15.000,00', Name: 'Até R$ 15.000,00'},
            {ID: 'Até R$ 20.000,00', Name: 'Até R$ 20.000,00'},
            {ID: 'Até R$ 30.000,00', Name: 'Até R$ 30.000,00'},
            {ID: 'Até R$ 40.000,00', Name: 'Até R$ 40.000,00'},
            {ID: 'Até R$ 50.000,00', Name: 'Até R$ 50.000,00'},
            {ID: 'Até R$ 75.000,00', Name: 'Até R$ 75.000,00'},
            {ID: 'Até R$ 100.000,00', Name: 'Até R$ 100.000,00'},
            {ID: 'Mais de R$ 100.000,00', Name: 'Mais de R$ 100.000,00'}
          ]}
        />
        <Select label="Versão"
          last
          attr={{style: {width:417}}}
          hasValue={this.state.versao !== ''}
          onChange={(e) => { this.setState({versao: e.target.value}) }}
          options={this.state.versoes}
        />

        <Button label="Ver Ofertas"
          attr={{style: {width: 215, float: 'right', marginRight: 0}}}
          onClick={() => {alert('VER OFERTAS');}}
        />
      </div>

      {/* <Catalogo filtros={this.state.filtros} /> */}
    </>;
  }
}

export default App;