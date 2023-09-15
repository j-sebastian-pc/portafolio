
import List from '../List/List'


export const Nav = () => {
    return (
        <nav >
            <ul>
                <List name="Home" path={'/'}/>
                <List name="About Me" path={'/about me'} />
                <List name="Contact " path={'/contact us'} />
            </ul>
        </nav>
    )
}

export default Nav