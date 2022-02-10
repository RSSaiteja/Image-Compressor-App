import React from 'react';


export default function Navbar(props) {
  return(
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
            <a className="navbar-brand" href="/">{props.title}</a>
        </div>
    </nav>
</div>
) ;
}
