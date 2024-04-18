
function Avatar(props) {
    return (
        <>
            <img src = {props.src} width = {props.width} height ={props.height}  />
            {props.children}
        </>
    )
}

export default Avatar

