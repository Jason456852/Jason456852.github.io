const Root = () => {
    return (<>
        This is home.
        <nav>
            <ul>
                <li>
                    <a href={`/about`}>About</a>
                </li>
                <li>
                    <a href={`/contacts`}>Contact</a>
                </li>
            </ul>
        </nav>
    </>);
}

export default Root;