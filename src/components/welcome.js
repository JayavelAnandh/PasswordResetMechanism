import './welcome.css';
const Welcome=()=>{
    let userName = localStorage.getItem("userName")
    return(
        <div className='welcome'>
        <div className="card container welcomeCard" >
            <h1>
                Hi {userName}!!!
            </h1>
            <p>This website is for free to use and experience how does password-reset process works!</p>
        </div>
        </div>
    )
}
export default Welcome