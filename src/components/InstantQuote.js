import { useFormik } from 'formik'
import './InstantQuote.css'
import * as Yup from 'yup'




export default function InstantQuote(){

  
const formik = useFormik({
    initialValues:{
        OriginCountry:'Zambia',
        PickLocationCityField:'',
        DestinationCountry:'India',
        DropLocationCityField:'',

    },

    validationSchema: Yup.object({
        PickLocationCityField: Yup.string().required('City is required').lowercase('Must be in lowercase')
    }),

    onSubmit: (values) =>{
            console.log(values)
           
    }
})

console.log(formik.values)
    return(
        <>
        <div className='InstantQuote'>
             <form className='InstantQuoteForm' onSubmit={formik.handleSubmit}>
                                    <h1>Instant Quote</h1>


                                    <div className='OriginCountry'>     
                                    <label htmlFor='OriginCountry'>Origin Country
                                    </label>    
                                    <select name='OriginCountry' value={formik.values.OriginCountry} onChange={formik.handleChange}>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                        <option>American Samoa</option>
                                        <option>Andorra</option>
                                        <option>Angola</option>
                                        <option>Anguilla</option>
                                        <option>Antigua And Barbuda</option>
                                        <option>Argentina</option>
                                        <option>Armenia</option>
                                        <option>Aruba</option>
                                        <option>Australia</option>
                                        <option>Austria</option>
                                        <option>Azerbaijan</option>
                                        <option>Bahamas</option>
                                        <option>Bahrain</option>
                                        <option>Bangladesh</option>
                                        <option>Barbados</option>
                                        <option>Belarus</option>
                                        <option>Belgium</option>
                                        <option>Belize</option>
                                        <option>Benin</option>
                                        <option>Bermuda</option>
                                        <option>Bhutan</option>
                                        <option>Bolivia</option>
                                        <option>Bosnia Herzegovina</option>
                                        <option>Botswana</option>
                                        <option>Brazil</option>
                                        <option>Brunei Darussalam</option>
                                        <option>Bulgaria</option>
                                        <option>Burkina Faso</option>
                                        <option>Burundi</option>
                                        <option>Cambodia</option>
                                        <option>Cameroon</option>
                                        <option>Canada</option>
                                        <option>Cape Verde</option>
                                        <option>Cayman Islands</option>
                                        <option>Central African Republic</option>
                                        <option>Chad</option>
                                        <option>Chile</option>
                                        <option>China</option>
                                        <option>Christmas Island</option>
                                        <option>Cocos Keeling Islands</option>
                                        <option>Colombia</option>
                                        <option>Congo</option>
                                        <option>Democratic Rep Of The Congo</option>
                                        <option>Cook Islands</option>
                                        <option>Costa Rica</option>
                                        <option>Cote D Ivoire</option>
                                        <option>Croatia</option>
                                        <option>Cuba</option>
                                        <option>Cyprus</option>
                                        <option>Czech Republic</option>
                                        <option>Channel Islands</option>
                                        <option>Denmark</option>
                                        <option>Djibouti</option>
                                        <option>Dominica</option>
                                        <option>Dominican Republic</option>
                                        <option>Ecuador</option>
                                        <option>Egypt</option>
                                        <option>El Salvador</option>
                                        <option>Equatorial Guinea</option>
                                        <option>Eritrea</option>
                                        <option>Estonia</option>
                                        <option>Ethiopia</option>
                                        <option>Faroe Islands</option>
                                        <option>Fiji</option>
                                        <option>Finland</option>
                                        <option>France</option>
                                        <option>French Guiana</option>
                                        <option>French Polynesia</option>
                                        <option>Gabon</option>
                                        <option>Gambia</option>
                                        <option>Georgia</option>
                                        <option>Germany</option>
                                        <option>Gibraltar</option>
                                        <option>Greece</option>
                                        <option>Greenland</option>
                                        <option>Grenada</option>
                                        <option>Guadeloupe</option>
                                        <option>Guam</option>
                                        <option>Guatemala</option>
                                        <option>Guinea</option>
                                        <option>Ghana</option>
                                        <option>Guinea Bissau</option>
                                        <option>Guyana</option>
                                        <option>Haiti</option>
                                        <option>Honduras</option>
                                        <option>Hong Kong</option>
                                        <option>Hungary</option>
                                        <option>Iceland</option>
                                        <option>Indonesia</option>
                                        <option>Iran</option>
                                        <option>Iraq</option>
                                        <option>Ireland</option>
                                        <option>Israel</option>
                                        <option>Italy</option>
                                        <option>India</option>
                                        <option>Ivory cost</option>
                                        <option>Jamaica</option>
                                        <option>Jordan</option>
                                        <option>Japan</option>
                                        <option>Kazakhstan</option>
                                        <option>Kenya</option>
                                        <option>Kiribati</option>
                                        <option>North/Korea South</option>
                                        <option>Kosovo</option>
                                        <option>Kuwait</option>
                                        <option>Kyrgyzstan</option>
                                        <option>Lao People S Dem Republic</option>
                                        <option>Latvia</option>
                                        <option>Lebanon</option>
                                        <option>Lesotho</option>
                                        <option>Liberia</option>
                                        <option>Libya</option>
                                        <option>Liechtenstein</option>
                                        <option>Lithuania</option>
                                        <option>Luxembourg</option>
                                        <option>Mozambique</option>
                                        <option>Malawi</option>
                                        <option>Madagascar</option>
                                        <option>Mauritius</option>
                                        <option>Monaco</option>
                                        <option>Morocco</option>
                                        <option>Malaysia</option>
                                        <option>Mauritania</option>
                                        <option>Malta</option>
                                        <option>Maldives</option>
                                        <option>Macau</option>
                                        <option>Macedonia</option>
                                        <option>Mali</option>
                                        <option>Martinique</option>
                                        <option>Mayotte</option>
                                        <option>Mexico</option>
                                        <option>Moldova</option>
                                        <option>Mongolia</option>
                                        <option>Montenegro</option>
                                        <option>Montserrat</option>
                                        <option>Myanmar</option>
                                        <option>Namibia</option>
                                        <option>Netherlands</option>
                                        <option>Nigeria</option>
                                        <option>New Zealand</option>
                                        <option>Northern Mariana Island</option>
                                        <option>Norway</option>
                                        <option>Nepal</option>
                                        <option>Netherlands Antilles</option>
                                        <option>Nicaragua</option>
                                        <option>Niger</option>
                                        <option>Nauru</option>
                                        <option>Oman</option>
                                        <option>Pakistan</option>
                                        <option>Portugal</option>
                                        <option>Philippines</option>
                                        <option>Poland</option>
                                        <option>Palestine State</option>
                                        <option>Panama</option>
                                        <option>Papua New Guinea</option>
                                        <option>Paraguay</option>
                                        <option>Peru</option>
                                        <option>Puerto Rico</option>
                                        <option>Qatar</option> 
                                        <option>Rwanda</option>
                                        <option>Reunion</option>
                                        <option>Russian Federationa</option>
                                        <option>Saint Lucia</option>
                                        <option>Saint Pierre And Miquelon</option>
                                        <option>Samoa</option>
                                        <option>San Marino</option>
                                        <option>Sao Tome And Principe</option>
                                        <option>Saudi Arabia</option>
                                        <option>Scotland</option>
                                        <option>Senegal</option>
                                        <option>Serbia</option>
                                        <option>Seychelles</option>
                                        <option>Sierra Leone</option>
                                        <option>Singapore</option>
                                        <option>Slovakia</option>
                                        <option>Slovenia</option>
                                        <option>Solomon Islands</option>
                                        <option>Somalia</option>
                                        <option>South Africa - Johannesburg</option>
                                        <option>South Africa - Others</option>
                                        <option>Spain</option>
                                        <option>Sri Lanka</option>
                                        <option>St Kitts And Nevis</option>
                                        <option>St Vincent/st Lucia</option>
                                        <option>Sudan/south sudan</option>
                                        <option>Suriname</option>
                                        <option>Swaziland</option>
                                        <option>Sweden</option>
                                        <option>Switzerland</option>
                                        <option>Syria</option>
                                        <option>Slovenia</option>
                                        <option>Serbia</option>
                                        <option>Samoa</option>
                                        <option>Taiwan</option>
                                        <option>Tajikistan</option>
                                        <option>Tanzania</option>
                                        <option>Thailand</option>
                                        <option>Timor-L'Este</option>
                                        <option>Togo</option>
                                        <option>Tonga</option>
                                        <option>Trinidad & Tobago</option>
                                        <option>Tunisia</option>
                                        <option>Turkey</option>
                                        <option>Turkmenistan</option>
                                        <option>Tuvalu</option>
                                        <option>Uganda</option>
                                        <option>Ukraine</option>
                                        <option>United Arab Emirates</option>
                                        <option>United Kingdom - London</option>
                                        <option>United Kingdom Others</option>
                                        <option>United States</option>
                                        <option>Uruguay</option>
                                        <option>Uzbekistan</option>
                                        <option>Vanuatu</option>
                                        <option>Vaticano</option>
                                        <option>Venezuela</option>
                                        <option>Vietnam</option>
                                        <option>Virgin Islands British</option>
                                        <option>Virgin Islands US</option>
                                        <option>Wales</option>
                                        <option>Yemen</option>
                                        <option>Zimbabwe</option>
                                        <option>Zambia</option>

                                    </select>
                     
                                    </div>
                                    <div className='PickLocationCity'>     
                                    <label htmlFor='PickLocationCityField'>Pickup Location</label>                         
                                    <input type='text' name='PickLocationCityField'placeholder='City' value={formik.values.PickLocationCityField} onChange={formik.handleChange}/>
                                    </div>


                                    <div className='DestinationCountry'>     
                                    <label htmlFor='DestinantionCountry'>Destination Country</label>    
                                    <select name='DestinantionCountry' value={formik.values.DestinationCountry} onChange={formik.handleChange}>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                        <option>American Samoa</option>
                                        <option>Andorra</option>
                                        <option>Angola</option>
                                        <option>Anguilla</option>
                                        <option>Antigua And Barbuda</option>
                                        <option>Argentina</option>
                                        <option>Armenia</option>
                                        <option>Aruba</option>
                                        <option>Australia</option>
                                        <option>Austria</option>
                                        <option>Azerbaijan</option>
                                        <option>Bahamas</option>
                                        <option>Bahrain</option>
                                        <option>Bangladesh</option>
                                        <option>Barbados</option>
                                        <option>Belarus</option>
                                        <option>Belgium</option>
                                        <option>Belize</option>
                                        <option>Benin</option>
                                        <option>Bermuda</option>
                                        <option>Bhutan</option>
                                        <option>Bolivia</option>
                                        <option>Bosnia Herzegovina</option>
                                        <option>Botswana</option>
                                        <option>Brazil</option>
                                        <option>Brunei Darussalam</option>
                                        <option>Bulgaria</option>
                                        <option>Burkina Faso</option>
                                        <option>Burundi</option>
                                        <option>Cambodia</option>
                                        <option>Cameroon</option>
                                        <option>Canada</option>
                                        <option>Cape Verde</option>
                                        <option>Cayman Islands</option>
                                        <option>Central African Republic</option>
                                        <option>Chad</option>
                                        <option>Chile</option>
                                        <option>China</option>
                                        <option>Christmas Island</option>
                                        <option>Cocos Keeling Islands</option>
                                        <option>Colombia</option>
                                        <option>Congo</option>
                                        <option>Democratic Rep Of The Congo</option>
                                        <option>Cook Islands</option>
                                        <option>Costa Rica</option>
                                        <option>Cote D Ivoire</option>
                                        <option>Croatia</option>
                                        <option>Cuba</option>
                                        <option>Cyprus</option>
                                        <option>Czech Republic</option>
                                        <option>Channel Islands</option>
                                        <option>Denmark</option>
                                        <option>Djibouti</option>
                                        <option>Dominica</option>
                                        <option>Dominican Republic</option>
                                        <option>Ecuador</option>
                                        <option>Egypt</option>
                                        <option>El Salvador</option>
                                        <option>Equatorial Guinea</option>
                                        <option>Eritrea</option>
                                        <option>Estonia</option>
                                        <option>Ethiopia</option>
                                        <option>Faroe Islands</option>
                                        <option>Fiji</option>
                                        <option>Finland</option>
                                        <option>France</option>
                                        <option>French Guiana</option>
                                        <option>French Polynesia</option>
                                        <option>Gabon</option>
                                        <option>Gambia</option>
                                        <option>Georgia</option>
                                        <option>Germany</option>
                                        <option>Gibraltar</option>
                                        <option>Greece</option>
                                        <option>Greenland</option>
                                        <option>Grenada</option>
                                        <option>Guadeloupe</option>
                                        <option>Guam</option>
                                        <option>Guatemala</option>
                                        <option>Guinea</option>
                                        <option>Ghana</option>
                                        <option>Guinea Bissau</option>
                                        <option>Guyana</option>
                                        <option>Haiti</option>
                                        <option>Honduras</option>
                                        <option>Hong Kong</option>
                                        <option>Hungary</option>
                                        <option>Iceland</option>
                                        <option>Indonesia</option>
                                        <option>Iran</option>
                                        <option>Iraq</option>
                                        <option>Ireland</option>
                                        <option>Israel</option>
                                        <option>Italy</option>
                                        <option>India</option>
                                        <option>Ivory cost</option>
                                        <option>Jamaica</option>
                                        <option>Jordan</option>
                                        <option>Japan</option>
                                        <option>Kazakhstan</option>
                                        <option>Kenya</option>
                                        <option>Kiribati</option>
                                        <option>North/Korea South</option>
                                        <option>Kosovo</option>
                                        <option>Kuwait</option>
                                        <option>Kyrgyzstan</option>
                                        <option>Lao People S Dem Republic</option>
                                        <option>Latvia</option>
                                        <option>Lebanon</option>
                                        <option>Lesotho</option>
                                        <option>Liberia</option>
                                        <option>Libya</option>
                                        <option>Liechtenstein</option>
                                        <option>Lithuania</option>
                                        <option>Luxembourg</option>
                                        <option>Mozambique</option>
                                        <option>Malawi</option>
                                        <option>Madagascar</option>
                                        <option>Mauritius</option>
                                        <option>Monaco</option>
                                        <option>Morocco</option>
                                        <option>Malaysia</option>
                                        <option>Mauritania</option>
                                        <option>Malta</option>
                                        <option>Maldives</option>
                                        <option>Macau</option>
                                        <option>Macedonia</option>
                                        <option>Mali</option>
                                        <option>Martinique</option>
                                        <option>Mayotte</option>
                                        <option>Mexico</option>
                                        <option>Moldova</option>
                                        <option>Mongolia</option>
                                        <option>Montenegro</option>
                                        <option>Montserrat</option>
                                        <option>Myanmar</option>
                                        <option>Namibia</option>
                                        <option>Netherlands</option>
                                        <option>Nigeria</option>
                                        <option>New Zealand</option>
                                        <option>Northern Mariana Island</option>
                                        <option>Norway</option>
                                        <option>Nepal</option>
                                        <option>Netherlands Antilles</option>
                                        <option>Nicaragua</option>
                                        <option>Niger</option>
                                        <option>Nauru</option>
                                        <option>Oman</option>
                                        <option>Pakistan</option>
                                        <option>Portugal</option>
                                        <option>Philippines</option>
                                        <option>Poland</option>
                                        <option>Palestine State</option>
                                        <option>Panama</option>
                                        <option>Papua New Guinea</option>
                                        <option>Paraguay</option>
                                        <option>Peru</option>
                                        <option>Puerto Rico</option>
                                        <option>Qatar</option> 
                                        <option>Rwanda</option>
                                        <option>Reunion</option>
                                        <option>Russian Federationa</option>
                                        <option>Saint Lucia</option>
                                        <option>Saint Pierre And Miquelon</option>
                                        <option>Samoa</option>
                                        <option>San Marino</option>
                                        <option>Sao Tome And Principe</option>
                                        <option>Saudi Arabia</option>
                                        <option>Scotland</option>
                                        <option>Senegal</option>
                                        <option>Serbia</option>
                                        <option>Seychelles</option>
                                        <option>Sierra Leone</option>
                                        <option>Singapore</option>
                                        <option>Slovakia</option>
                                        <option>Slovenia</option>
                                        <option>Solomon Islands</option>
                                        <option>Somalia</option>
                                        <option>South Africa - Johannesburg</option>
                                        <option>South Africa - Others</option>
                                        <option>Spain</option>
                                        <option>Sri Lanka</option>
                                        <option>St Kitts And Nevis</option>
                                        <option>St Vincent/st Lucia</option>
                                        <option>Sudan/south sudan</option>
                                        <option>Suriname</option>
                                        <option>Swaziland</option>
                                        <option>Sweden</option>
                                        <option>Switzerland</option>
                                        <option>Syria</option>
                                        <option>Slovenia</option>
                                        <option>Serbia</option>
                                        <option>Samoa</option>
                                        <option>Taiwan</option>
                                        <option>Tajikistan</option>
                                        <option>Tanzania</option>
                                        <option>Thailand</option>
                                        <option>Timor-L'Este</option>
                                        <option>Togo</option>
                                        <option>Tonga</option>
                                        <option>Trinidad & Tobago</option>
                                        <option>Tunisia</option>
                                        <option>Turkey</option>
                                        <option>Turkmenistan</option>
                                        <option>Tuvalu</option>
                                        <option>Uganda</option>
                                        <option>Ukraine</option>
                                        <option>United Arab Emirates</option>
                                        <option>United Kingdom - London</option>
                                        <option>United Kingdom Others</option>
                                        <option>United States</option>
                                        <option>Uruguay</option>
                                        <option>Uzbekistan</option>
                                        <option>Vanuatu</option>
                                        <option>Vaticano</option>
                                        <option>Venezuela</option>
                                        <option>Vietnam</option>
                                        <option>Virgin Islands British</option>
                                        <option>Virgin Islands US</option>
                                        <option>Wales</option>
                                        <option>Yemen</option>
                                        <option>Zimbabwe</option>
                                        <option>Zambia</option>
                                       
                                    </select>
                     
                                    </div>

                                    <div className='DropLocationCity'>     
                                    <label htmlFor='DropLocationCityField'>Drop Location</label>                         
                                    <input type='text' name='DropLocationCityField'placeholder='City' value={formik.values.DropLocationCityField} onChange={formik.handleChange}/>
                                    </div>
                                   
                                   <button type='submit' className='NextButton'>Next</button>
                                
                                </form>
        
        </div>

        <div className='line'></div>
        </>
    )
}