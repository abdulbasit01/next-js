import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

const index = ({ heros }) => {
  return (
    <div className='container'>
      <h1 className="display-2">Super hero identity manager</h1>
      <p>{React.Children.toArray(
        heros.map((hero) => {
          return <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superhero}</MDBCardTitle>
              <MDBCardText>
                Reveal Identity
              </MDBCardText>
              <MDBBtn className='mx-2'>View Heor</MDBBtn>
              <MDBBtn color='warning'>Edit Heor</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        })
      )}</p>

    </div>
  )
}
export async function getStaticProps(context) {
  const { data: { heros } } = await axios.get('http://localhost:3000/api/hero')
  console.log(heros)
  return { props: { heros } }
}
export default index
