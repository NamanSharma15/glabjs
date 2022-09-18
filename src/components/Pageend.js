import React from 'react'
import { Link } from 'react-router-dom'
const Pageend = (props) => {
    return (
        <div style={{'backgroundColor': 'white' }}>
            <div class="container">
                <footer class="py-3 mt-4 mb-0">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Features</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Pricing</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">FAQs</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">About</Link></li>
                    </ul>
                    <p class="text-center text-muted">© 2022 Company, Inc</p>
                </footer>
            </div>
        </div>
    )
}

export default Pageend