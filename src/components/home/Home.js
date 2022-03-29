import style from './home.module.scss'
import clsx from 'clsx'

import Filter from '../filter'
import Todo from '../todo'

function Home() {

    return (

        <div className={clsx(style.container)}>
            <div className={clsx(style.box)}>
                <div className={clsx(style.title)}>
                    <h4>todo app with redux by huy khanh</h4>
                </div>
                <Filter/>
                <Todo />
            </div>
        </div>

    )
}

export default Home