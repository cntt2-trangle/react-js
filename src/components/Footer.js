import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="container">
                        <p>&copy; Your Website 2019. All Rights Reserved.</p>
                        <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#">Privacy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Terms</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">FAQ</a>
                        </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;