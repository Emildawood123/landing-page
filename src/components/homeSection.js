import logo from '../imgs/228965366_3958852544213753_7779066411120821296_n.jpg'
function Home(){
    return (
        <section id='home'>
            <div>
            <img src={logo}/>
            <p className='free-state'><b>emildawood</b><br/><p>developer and owner this app</p></p>
            </div>
            <h2><h1>Hello,</h1> <p>in SEGMY-APP</p><a className='link-to-app' href='https://main--segmyapp.netlify.app/'>Live Demo</a></h2>
            
        </section>
    )
}
export default Home
