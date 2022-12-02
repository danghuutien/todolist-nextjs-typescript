import { Provider } from 'react-redux'
import Content  from '../components/Content'
import store from '../redux/store'
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="bg-gray-300">
            <Provider store={store}>
                <div className='w-5/12 mx-auto'>
                    <Header />
                    <Content />
                </div>
            </Provider>
        </div>
    )
}
