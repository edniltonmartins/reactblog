
function Post(props){
    let time = props.readingTime;
    let texto = "";
    if (time!=undefined){
        texto = `Leia em ${props.readingTime} ${props.readingTime === 1 ? "minuto" : "minutos"}`;
    }
    return (
        <>
            <h2>{props.title}</h2>
            <small>
                {texto}
            </small>
            {props.children}
        </>
    )
}

export default Post;