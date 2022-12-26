import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() { 

    return (
        <aside className={styles.sidebar}>
        <img   className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         />
            

            <div className={styles.profile}>
            <Avatar src="https://lh3.googleusercontent.com/a/ALm5wu0V96A9zQQZ619lBDF-S51A5e8n0lNWW8fd7r8o=s88-w88-h88-c-k" />
                <strong>Lucas Vasconcelos</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}