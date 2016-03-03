'use strict'

import React from 'react'

class Sidenav extends React.Component {
    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">TransferVans</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="#">Request a transfer service</a>
                    <a className="mdl-navigation__link" href="#">Provide a transfer service</a>
                </nav>
            </div>
        )
    }
}

export default Sidenav
