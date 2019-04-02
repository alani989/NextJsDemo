import React from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'

const Navbar = () => {
        return (
            <div>
                <Menu pointing secondary>
                    <Link href="/">
                        <Menu.Item
                            name='home'
                        />
                    </Link>

                    <Link href="/about">
                        <Menu.Item
                            name='about'
                        />
                    </Link>

                    <Link href="/test">
                        <Menu.Item
                            name='test'
                        />
                    </Link>

                </Menu>
            </div>
        )
}

export default Navbar