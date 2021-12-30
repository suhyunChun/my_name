import React from "react";
function LeftBox() {


    return(
        <div id ='left'>
            <div className ='left-box'>
                <div className = 'left-title' style={{fontSize:'1.5rem', float:'left'}}>TITLE HEADING
                    <p style={{marginTop:1+'%', fontSize:'1rem'}}>Title description, <span style={{color:'lightgrey'}}>April 7, 2014</span></p>
                </div>
                <p>
                    Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                    Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at.
                    Phasellus sed ultricies mi non congue ullam corper.
                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                </p>
                <button className = 'btn'>Read More >></button>
            </div>

            <div className ='left-box'>
                <div className = 'left-title' style={{fontSize:'1.5rem', float:'left'}}>Blog Entry
                    <p style={{marginTop:1+'%', fontSize:'1rem'}}>Title description, <span style={{color:'lightgrey'}}>April 7, 2014</span></p>
                </div>
                <p>
                    Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                </p>
                <button className = 'btn'>Read More >></button>
            </div>
        </div>
    )
}

export default LeftBox