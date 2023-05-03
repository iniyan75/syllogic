import '../../css/events.css'

export default function Paper(){
    return(
    <div className='paper'>
        <div className="container-sm container-main">
        <h1 className='hh' style={{textAlign:"center"}}>PAPER PRESENTATION</h1>
        <br/>
        <div className='row'>
        <div className='col-lg-6'>
        <h2 className='hh'>Event Description</h2>
        <ul>
          <li>Each team should comprise of a max of 3 participants and min of 1 participant</li>
          <li>Timings : 5 min will be permitted for the presentation and 2 min for Q/A session</li>
          <li>Kindly have a note on the themes given</li>
          <li>The ppt must be submitted on or before 16.03.2023 to the given mail id</li>
          <li>Mail ID - syllogic23.paper@gmail.com </li>
          <li>No of max slides 10 - 12.</li>
          <li>Abstract should be submitted in registration form before 10-03-2023*</li>
          <li>Abstract should not exceed 500 words</li>
          <li>All participants will be awarded with the certification of participation</li>
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