'use strict'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidenav from './Sidenav'

class TransferApp extends React.Component{
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" >
                <Header />
                <Sidenav />
                <main className="mdl-layout__content mdl-grid">
                </main>
                <Footer />
            </div>
        )
    }

}

export default TransferApp
