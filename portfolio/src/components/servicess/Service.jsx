import React from 'react' 
import './service.css' 
import ListServices from './listServices' 
 
 
export const Services = () => { 
  return ( 
    <section id="services"> 
      <h5>What i offer</h5> 
      <h2>Services 
      <ol> 
<li><a href="Drum Lessons.html">Drum Lessons</a></li> 
<li><a href="Web Application Development.html">Web Application development</a></li> 
<li><a href="network-monitoring.html">Network monitoring</a></li> 
<li><a href="Electronic Appliances.html">Electronic Appliances</a></li>  
</ol> 
      </h2> 
      
      <div className="container services__container"> 
        <ListServices /> 
      </div> 
    </section> 
  ); 
} 
export default Services;