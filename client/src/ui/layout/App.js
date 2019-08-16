import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';


const App = () => {
    return (
        <React.Fragment>
            <div className='ui container' >
                <Header />
                <Main />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default App;
