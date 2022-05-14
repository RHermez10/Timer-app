interface FrontPage{
    header: string;
    text: string;
}

function FirstPage({header,text}:FrontPage){
    return(
        <section>
            <h1> {header} </h1>
            <p>{text}</p>

        </section>
    )
}

export default FirstPage;