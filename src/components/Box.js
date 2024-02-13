
function Box(props) {
    return (
        <div className="box">
            <img class="rounded-picture" src={props.roundedPic}/>
            <h1>{props.featureName}</h1>
            <p>{props.featureDesc}</p>
            <img />
        </div>
    )
}
export default Box
