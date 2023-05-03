import '../../css/events.css'

export default function Poster(){
    return(
    <div className='paper'>
        <div className="container-sm container-main">
        <h1 className='hh' style={{textAlign:"center"}}>POSTER PRESENTATION</h1>
        <br/>
        <div className='row'>
        <div className='col-lg-6'>
        <h2 className='hh'>Event Description</h2>
        <ul>
          <li>Posters from any theme are permitted to present</li>
          <li>Poster should be presented in A3 sheet</li>
          <li>Each participating team should comprise of a maximum of 3 members and Min of 1</li>
          <li>Hardcopy of the poster should be submitted to the juries during the event</li>
          <li>Three minutes will be permitted for the presentation of the poster and two minutes will be for queries</li>
          <li>All participants will be awarded with the certification of participation</li>
          <li>The prize will be distributed based on the opinion of juries</li>
          <li>Abstract should be submitted in registration link before 10-03-2023</li>
         </ul>
         </div>
         <div className='col-lg-6 my-auto' id='reg'>
            <h3 className='hhh'>Registration link</h3>
            <a href=""><button className="btn btn-warning mt-3" id='bb'>Register</button></a>
        </div>
        </div></div>
    </div>
    )
}