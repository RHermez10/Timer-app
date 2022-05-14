import {Link} from 'react-router-dom'

interface FrontPage{
    header: string;
    text: string;
}

function FirstPage({header,text}:FrontPage){
    return(
        <section>
            <Link to="/TimeSet">
            <h1> {header} </h1>
            </Link>
            <p>{text}</p>
        </section>
    )
}

export default FirstPage;