import React from 'react'
import Link from 'next/link'
import { MDBBtn } from 'mdb-react-ui-kit';
const Navbar = () => {
    return (
        <nav className='navbar container-fluid'>
            <Link href="/" className="navbar-brand">Super Hero Identity</Link>
            <Link href="/create-new-identity">
                <MDBBtn>New Identity</MDBBtn>
            </Link>
        </nav>
    )
}

export default Navbar
