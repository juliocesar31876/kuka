import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';
import Pages from './Pages';
import Assets from './Pages/Componentes/Assets';
//---------REDUX----------
import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import SSocket from './SSocket';
//------------------------
const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    return (
        <Provider store={store}>
            <SComponentContainer
                debug
                socket={SSocket}
                assets={Assets}
                theme={{
                    initialTheme: "primary",
                    themes: {
                        default: {
                            barStyle: "dark-content",
                            barColor: "#55C0F1",
                            primary: "#55C0F1",
                            secondary: "#000000",
                            background: "#dddddd"
                        },
                        dark: {
                            barStyle: "light-content",
                            barColor: "#000000",
                            primary: "#000000",
                            secondary: "#9CDCFE",
                            background: "#222222"
                        }
                    }
                }}>
                <SNavigation props={{
                    prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                    pages: {
                        ...Pages
                    }
                }} />
                <SSocket />
            </SComponentContainer>
        </Provider>
    )
}
export default App;