import './ServicesSection.css'
import SData from './ServicesSectionData'
import distribution from '../assests/distribution.png'
import domesticexpress from '../assests/domesticexpress.jpg'
import exportexpress from '../assests/exportexpress.jpg'
import roadexpress from '../assests/roadexpress.jpg'
import warehouse from '../assests/warehouse.jpg'
import importexpress from '../assests/importexpress.jpg'



function ServicesSection(){
    return(
    <div className='SSection'>
        <h1>SPECIAL SERVICES</h1>
        <p>Globally known for our ability to handle every last detail of our customers' particular logistics and forwarding needs, Memory Logistic's Special Services team takes care of all your logistics.</p>

        <div className='sectioncard'>
            <SData 
            image={distribution}
            heading= 'Distribution'
            text='Our services extend beyond the walls of the warehouse. You can rely on us for your distribution service.'
            linkto='/'
            />
            <SData 
            image={warehouse}
            heading= 'Warehousing'
            text= 'Mercury Express Logistics currently offers over 10,000 sqm2 warehousing space, servicing all storage and cross-docking requirements.'
            linkto='/'
            />
          <SData 
            image={exportexpress}
            heading= 'Export Express'
            text= 'Mercury Express Logistics provides global door-to-door shipping solutions for your packages. With Export Express, you can ship and send your packages, door-to-door and to anywhere in the world all you need to do is visit an office near you.'
            linkto='/'
            />
            
        </div>
        <div className='sectioncard2'>
        <SData 
            image={importexpress}
            heading= 'Import Express'
            text= 'Our courier service operates around the clock and throughout the year so we’re always on hand to help.'
            linkto='/'
            />
            <SData 
            image={domesticexpress}
            heading= 'Domestic Express'
            text= 'Domestic Express Services offers reliable door to door solutions for time-critical packages to be delivered within to any city.'
            linkto='/'
            />
            <SData 
           image={roadexpress}
           heading= 'Road Express'
           text= 'With Road Express, is guaranteed extensive and affordable domestic delivery of parcels between all towns within Zambia.'
           linkto='/'
           />
        </div>
    </div>
    )
}

export default ServicesSection