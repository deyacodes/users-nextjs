import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

//Components
import Container from '../components/Container'
import Users from "../components/Users"

const Index = ({users}) => {
    return (
        <>
            <Head>
                <title>Index</title>
            </Head>
            <Container>
                <h1>Index</h1>
                <Users users={users}/> 
            </Container>
        </>
    )
}
    
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const json = await res.json()
    console.log(json.data);
    return {users: json.data}  
}

export default Index