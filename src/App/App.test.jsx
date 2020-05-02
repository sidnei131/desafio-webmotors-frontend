import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Testando component <App />', () => {
  it('Teste títulos e campos', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Comprar Carros/i)).toBeInTheDocument();
    expect(getByText(/Comprar Motos/i)).toBeInTheDocument();
    expect(getByText(/Quero Vender/i)).toBeInTheDocument();
    expect(getByText(/Novos/i)).toBeInTheDocument();
    expect(getByText(/Usados/i)).toBeInTheDocument();
    expect(getByText(/Selecione sua cidade/i)).toBeInTheDocument();
    expect(getByText(/Raio/i)).toBeInTheDocument();
    expect(getByText(/Marca/i)).toBeInTheDocument();
    expect(getByText(/Modelo/i)).toBeInTheDocument();
    expect(getByText(/Ano Desejado/i)).toBeInTheDocument();
    expect(getByText(/Faixa de preço/i)).toBeInTheDocument();
    expect(getByText(/Versão/i)).toBeInTheDocument();
    expect(getByText(/Ver Ofertas/i)).toBeInTheDocument();
  });
});