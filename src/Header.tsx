import { useState } from 'react'
import Btn from './components/Btn'
import CreatePost from './CreatePost'
import './Header.style.css'
export default function Header() {

    const [create, setCreate] = useState<boolean>(false)

    const handleOnClick = () => setCreate(!create)

    return (
        <header>
            <div>
                <h1 className={create ? "creating" : ""}>
                    POSTS <Btn label={create ? '-' : '+'} onClick={handleOnClick} type="inline" />
                </h1>
            </div>


            {create && <CreatePost />}
        </header>

    )
}
