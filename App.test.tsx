import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import App from './App';
import { Linking } from 'react-native';



describe('<App />', () => {

    // teste errado

    it('should not render the text "Texto Errado" on the screen', () => {
        const { getByText } = render(<App />);
        const errorText = getByText('Texto Errado');
        expect(errorText).toBeTruthy();
      });

    // Teste para os textos 
  it('should render the text "Minha Conta" on the screen', () => {
    const { getByText } = render(<App />);
    const accountText = getByText('Minha Conta');
    expect(accountText).toBeTruthy();
  });

  it('should render the text "Meus Cofres" on the screen', () => {
    const { getByText } = render(<App />);
    const vaultsText = getByText('Meus Cofres');
    expect(vaultsText).toBeTruthy();
  });

  // testando os icons na tela

  it('should render MenuIcon component', () => {
    const { getByTestId } = render(<App />);
    const menuIcon = getByTestId('menu-icon');
    expect(menuIcon).toBeTruthy();
  });

  it('should render ProfileIcon component', () => {
    const { getByTestId } = render(<App />);
    const profileIcon = getByTestId('profile-icon');
    expect(profileIcon).toBeTruthy();
  });

  it('should render SendIcon component', () => {
    const { getByTestId } = render(<App />);
    const sendIcon = getByTestId('send-icon');
    expect(sendIcon).toBeTruthy();
  });

  it('should render AddIcon component', () => {
    const { getByTestId } = render(<App />);
    const addIcon = getByTestId('add-icon');
    expect(addIcon).toBeTruthy();
  });

  it('should render QrCodeIcon component', () => {
    const { getByTestId } = render(<App />);
    const qrCodeIcon = getByTestId('qr-code-icon');
    expect(qrCodeIcon).toBeTruthy();
  });
  

//   testando click 

  it('should call Linking.openURL when Send button is pressed', () => {
    const { getByText, getByTestId } = render(<App />);

    const sendButton = getByText('Enviar');
    const sendIcon = getByTestId('send-icon');

    fireEvent.press(sendIcon);
    expect(Linking.openURL).toHaveBeenCalledWith('https://paytesy.com/');
  });

  it('should call Linking.openURL when Add button is pressed', () => {
    const { getByText, getByTestId } = render(<App />);

    const addButton = getByText('Mais');
    const addIcon = getByTestId('add-icon'); 

    fireEvent.press(addIcon);
    expect(Linking.openURL).toHaveBeenCalledWith('https://paytesy.com/');
  });
});
