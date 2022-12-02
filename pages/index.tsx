import { Provider } from 'react-redux'
import Content  from '../components/Content'
import store from '../redux/store'
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-300">
            <Provider store={store}>
                <div className='pt-5 w-5/12 mx-auto'>
                    <Header />
                    <Content />
                </div>
            </Provider>
        </div>
    )
}
