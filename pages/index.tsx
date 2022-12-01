import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Provider } from 'react-redux'
import Content  from './components/Content'
import store from './redux/store'
import Header from './components/Header'

export default function Home() {
    return (
        <div className="bg-gray-300">
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
            <script src="https://cdn.tailwindcss.com"></script>
            </Head>

            <Provider store={store}>
                <div className='w-5/12 mx-auto'>
                    <Header />
                    <Content />
                </div>
            </Provider>
        </div>
    )
}
