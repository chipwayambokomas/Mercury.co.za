
import "./InstantQuote.css"
import React from 'react'
import { useState } from "react"
import { fabClasses } from "@mui/material";




export default function InstantQuote() {
  
    const { OriginCountry, setOriginCountry } = useState("Zambia");
    const { PickLocationCityField, setPickLocationCityField } = useState("Ndola");
    const { DestinationCountry, setDestinationCountry } = useState("India");
    const { DropLocationCityField, setDropLocationCityField } = useState(null);
    const { Submit, setSubmit } = useState(false);
    function getData1(val){
        setPickLocationCityField(val.target.value)
        setSubmit(false)
    }
    function getData2(val){
        setDropLocationCityField(val.target.value)
        setSubmit(false)
    }

   
        
            {/*if (values.OriginCountry === "Afghanistan") {
                setOriginCountry("12")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }

            else if (values.OriginCountry === "Albania") {
                setOriginCountry("13")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Algeria") {
                setOriginCountry("14")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "American Samoa") {
                setOriginCountry("15")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Andorra") {
                setOriginCountry("16")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Angola") {
                setOriginCountry("17")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Anguilla") {
                setOriginCountry("18")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Antigua And Barbuda") {
                setOriginCountry("19")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Argentina") {
                setOriginCountry("20")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Armenia") {
                setOriginCountry("21")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Aruba") {
                setOriginCountry("22")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())

            }
            else if (values.OriginCountry === "Australia") {
                setOriginCountry("23")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Austria") {
                setOriginCountry("24")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Azerbaijan") {
                setOriginCountry("25")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bahamas") {
                setOriginCountry("26")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bahrain") {
                setOriginCountry("27")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bangladesh") {
                setOriginCountry("28")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Barbados") {
                setOriginCountry("29")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Belarus") {
                setOriginCountry("30")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Belgium") {
                setOriginCountry("31")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Belize") {
                setOriginCountry("32")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Benin") {
                setOriginCountry("33")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bermuda") {
                setOriginCountry("34")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bhutan") {
                setOriginCountry("35")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bolivia") {
                setOriginCountry("36")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bosnia Herzegovina") {
                setOriginCountry("37")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Botswana") {
                setOriginCountry("38")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Brazil") {
                setOriginCountry("39")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Brunei Darussalam") {
                setOriginCountry("40")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Bulgaria") {
                setOriginCountry("41")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Burkina Faso") {
                setOriginCountry("42")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Burundi") {
                setOriginCountry("43")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cambodia") {
                setOriginCountry("44")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cameroon") {
                setOriginCountry("45")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Canada") {
                setOriginCountry("46")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cape Verde") {
                setOriginCountry("47")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cayman Islands") {
                setOriginCountry("48")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Central African Republic") {
                setOriginCountry("49")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Chad") {
                setOriginCountry("50")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Chile") {
                setOriginCountry("51")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "China") {
                setOriginCountry("10")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Christmas Island") {
                setOriginCountry("53")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cocos Keeling Island") {
                setOriginCountry("54")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Colombia") {
                setOriginCountry("55")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Congo") {
                setOriginCountry("56")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Democratic Rep Of The Congo") {
                setOriginCountry("57")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cook Islands") {
                setOriginCountry("58")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Costa Rica") {
                setOriginCountry("59")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cote D Ivoire") {
                setOriginCountry("60")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Croatia") {
                setOriginCountry("61")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cuba") {
                setOriginCountry("62")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Cyprus") {
                setOriginCountry("63")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Czech Republic") {
                setOriginCountry("64")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Channel Islands") {
                setOriginCountry("239")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Denmark") {
                setOriginCountry("65")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Djibouti") {
                setOriginCountry("66")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Dominica") {
                setOriginCountry("67")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Dominican Republic") {
                setOriginCountry("68")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ecuador") {
                setOriginCountry("69")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Egypt") {
                setOriginCountry("70")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "El Salvador") {
                setOriginCountry("71")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Equatorial Guinea") {
                setOriginCountry("72")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Eritrea") {
                setOriginCountry("73")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Estonia") {
                setOriginCountry("74")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ethiopia") {
                setOriginCountry("75")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Faroe Islands") {
                setOriginCountry("76")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Fiji") {
                setOriginCountry("77")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Finland") {
                setOriginCountry("78")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "France") {
                setOriginCountry("79")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "French Guiana") {
                setOriginCountry("80")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "French Polynesia") {
                setOriginCountry("81")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Gabon") {
                setOriginCountry("82")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Gambia") {
                setOriginCountry("83")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Georgia") {
                setOriginCountry("84")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Germany") {
                setOriginCountry("85")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Gibraltar") {
                setOriginCountry("87")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Greece") {
                setOriginCountry("88")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Greenland") {
                setOriginCountry("89")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Grenada") {
                setOriginCountry("90")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guadeloupe") {
                setOriginCountry("91")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guam") {
                setOriginCountry("92")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guatemala") {
                setOriginCountry("93")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guinea") {
                setOriginCountry("94")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ghana") {
                setOriginCountry("6")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guinea Bissau") {
                setOriginCountry("95")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Guyana") {
                setOriginCountry("96")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Haiti") {
                setOriginCountry("97")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Honduras") {
                setOriginCountry("98")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Hong Kong") {
                setOriginCountry("99")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Hungary") {
                setOriginCountry("100")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Iceland") {
                setOriginCountry("101")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Indonesia") {
                setOriginCountry("103")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Iran") {
                setOriginCountry("104")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Iraq") {
                setOriginCountry("105")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ireland") {
                setOriginCountry("106")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Israel") {
                setOriginCountry("107")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Italy") {
                setOriginCountry("108")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "India") {
                setOriginCountry("8")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ivory cost") {
                setOriginCountry("109")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Jamaica") {
                setOriginCountry("110")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Jordan") {
                setOriginCountry("112")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Japan") {
                setOriginCountry("9")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kazakhstan") {
                setOriginCountry("113")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kenya") {
                setOriginCountry("114")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kiribati") {
                setOriginCountry("115")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "North\/South Korea") {
                setOriginCountry("116")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kosovo") {
                setOriginCountry("117")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kuwait") {
                setOriginCountry("118")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Kyrgyzstan") {
                setOriginCountry("119")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Lao People S Dem Republic") {
                setOriginCountry("120")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Latvia") {
                setOriginCountry("121")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Lebanon") {
                setOriginCountry("122")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Lesotho") {
                setOriginCountry("123")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Liberia") {
                setOriginCountry("124")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Libya") {
                setOriginCountry("193")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Liechtenstein") {
                setOriginCountry("201")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Lithuania") {
                setOriginCountry("202")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Luxembourg") {
                setOriginCountry("203")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mozambique") {
                setOriginCountry("184")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Malawi") {
                setOriginCountry("186")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Madagascar") {
                setOriginCountry("187")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mauritius") {
                setOriginCountry("188")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Monaco") {
                setOriginCountry("194")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Morocco") {
                setOriginCountry("195")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Malaysia") {
                setOriginCountry("204")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mauritania") {
                setOriginCountry("205")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Malta") {
                setOriginCountry("206")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Maldives") {
                setOriginCountry("210")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Macau") {
                setOriginCountry("215")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Macedonia") {
                setOriginCountry("216")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mali") {
                setOriginCountry("217")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Martinique") {
                setOriginCountry("218")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mayotte") {
                setOriginCountry("219")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mexico") {
                setOriginCountry("220")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Moldova") {
                setOriginCountry("221")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Mongolia") {
                setOriginCountry("222")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Montenegro") {
                setOriginCountry("223")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Montserrat") {
                setOriginCountry("224")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Myanmar") {
                setOriginCountry("225")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Namibia") {
                setOriginCountry("185")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Netherlands") {
                setOriginCountry("189")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Nigeria") {
                setOriginCountry("190")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "New Zealand") {
                setOriginCountry("196")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Northern Mariana Island") {
                setOriginCountry("207")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Norway") {
                setOriginCountry("197")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Nepal") {
                setOriginCountry("211")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Netherlands Antilles") {
                setOriginCountry("227")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Nicaragua") {
                setOriginCountry("228")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Niger") {
                setOriginCountry("229")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Nauru") {
                setOriginCountry("226")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Oman") {
                setOriginCountry("208")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Pakistan") {
                setOriginCountry("212")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Portugal") {
                setOriginCountry("191")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Philippines") {
                setOriginCountry("213")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Poland") {
                setOriginCountry("198")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Palestine State") {
                setOriginCountry("230")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Panama") {
                setOriginCountry("231")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Papua New Guinea") {
                setOriginCountry("232")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Paraguay") {
                setOriginCountry("233")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Peru") {
                setOriginCountry("234")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Puerto Rico") {
                setOriginCountry("235")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Qatar") {
                setOriginCountry("209")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Rwanda") {
                setOriginCountry("125")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Reunion") {
                setOriginCountry("199")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Russian Federation") {
                setOriginCountry("200")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Saint Lucia") {
                setOriginCountry("126")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Saint Pierre And Miquelon") {
                setOriginCountry("127")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Samoa") {
                setOriginCountry("128")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "San Marino") {
                setOriginCountry("129")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Sao Tome And Principe") {
                setOriginCountry("130")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Saudi Arabia") {
                setOriginCountry("131")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Scotland") {
                setOriginCountry("132")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Senegal") {
                setOriginCountry("133")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Serbia") {
                setOriginCountry("134")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Seychelles") {
                setOriginCountry("135")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Sierra Leone") {
                setOriginCountry("136")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Singapore") {
                setOriginCountry("137")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Slovakia") {
                setOriginCountry("138")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Slovenia") {
                setOriginCountry("139")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Solomon Islands") {
                setOriginCountry("140")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Somalia") {
                setOriginCountry("141")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "South Africa - Johannesburg") {
                setOriginCountry("142")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "South Africa - Others") {
                setOriginCountry("143")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Spain") {
                setOriginCountry("144")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Sri Lanka") {
                setOriginCountry("145")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "St Kitts And Nevis") {
                setOriginCountry("146")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "St Vincent\/st Lucia") {
                setOriginCountry("147")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Sudan\/south sudan") {
                setOriginCountry("148")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Suriname") {
                setOriginCountry("149")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Swaziland") {
                setOriginCountry("150")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Sweden") {
                setOriginCountry("151")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Switzerland") {
                setOriginCountry("152")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Syria") {
                setOriginCountry("153")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Slovenia") {
                setOriginCountry("236")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Serbia") {
                setOriginCountry("237")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Samoa") {
                setOriginCountry("238")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Taiwan") {
                setOriginCountry("154")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Tajikistan") {
                setOriginCountry("155")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Tanzania") {
                setOriginCountry("156")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Thailand") {
                setOriginCountry("157")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Timor-L'Este") {
                setOriginCountry("158")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Togo") {
                setOriginCountry("159")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Tonga") {
                setOriginCountry("160")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Trinidad & Tobago") {
                setOriginCountry("161")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Tunisia") {
                setOriginCountry("162")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Turkey") {
                setOriginCountry("163")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Turkmenistan") {
                setOriginCountry("164")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Tuvalu") {
                setOriginCountry("165")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Uganda") {
                setOriginCountry("166")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Ukraine") {
                setOriginCountry("167")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "United Arab Emirates") {
                setOriginCountry("168")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "United Kingdom - London") {
                setOriginCountry("169")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "United Kingdom Others") {
                setOriginCountry("170")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "United States") {
                setOriginCountry("171")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Uruguay") {
                setOriginCountry("172")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Uzbekistan") {
                setOriginCountry("173")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Vanuatu") {
                setOriginCountry("174")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Vaticano") {
                setOriginCountry("175")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Venezuela") {
                setOriginCountry("176")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Vietnam") {
                setOriginCountry("177")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Virgin Islands British") {
                setOriginCountry("178")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Virgin Islands U S") {
                setOriginCountry("179")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Wales") {
                setOriginCountry("180")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Yemen") {
                setOriginCountry("181")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else if (values.OriginCountry === "Zimbabwe") {
                setOriginCountry("183")
                setPickLocationCityField(values.PickLocationCityField.toLowerCase())
            }
            else {
                setOriginCountry("3")
                if (values.PickLocationCityField.toLowerCase() === "lusaka") {
                    setPickLocationCityField("1")
                }
                else if (values.PickLocationCityField.toLowerCase() === "makeni") {
                    setPickLocationCityField("25")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kafue") {
                    setPickLocationCityField("32")
                }
                else if (values.PickLocationCityField.toLowerCase() === "chirundu") {
                    setPickLocationCityField("33")
                }
                else if (values.PickLocationCityField.toLowerCase() === "livingstone") {
                    setPickLocationCityField("2")
                }
                else if (values.PickLocationCityField.toLowerCase() === "choma") {
                    setPickLocationCityField("15")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kalomo") {
                    setPickLocationCityField("16")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mazabuka") {
                    setPickLocationCityField("17")
                }
                else if (values.PickLocationCityField.toLowerCase() === "monze") {
                    setPickLocationCityField("18")
                }
                else if (values.PickLocationCityField.toLowerCase() === "chingola") {
                    setPickLocationCityField("3")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kitwe") {
                    setPickLocationCityField("12")
                }
                else if (values.PickLocationCityField.toLowerCase() === "ndola") {
                    setPickLocationCityField("13")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mufulira") {
                    setPickLocationCityField("28")
                }
                else if (values.PickLocationCityField.toLowerCase() === "chililabombwe") {
                    setPickLocationCityField("29")
                }
                else if (values.PickLocationCityField.toLowerCase() === "luanshya") {
                    setPickLocationCityField("30")
                }
                else if (values.PickLocationCityField.toLowerCase() === "solwezi") {
                    setPickLocationCityField("4")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kalumbila") {
                    setPickLocationCityField("5")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kabompo") {
                    setPickLocationCityField("38")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mwinlunga") {
                    setPickLocationCityField("40")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kasama") {
                    setPickLocationCityField("20")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mpulungu") {
                    setPickLocationCityField("34")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mbala") {
                    setPickLocationCityField("35")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mongu") {
                    setPickLocationCityField("22")
                }
                else if (values.PickLocationCityField.toLowerCase() === "sesheke") {
                    setPickLocationCityField("39")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kaoma") {
                    setPickLocationCityField("41")
                }
                else if (values.PickLocationCityField.toLowerCase() === "chipata") {
                    setPickLocationCityField("19")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mfuwe") {
                    setPickLocationCityField("23")
                }
                else if (values.PickLocationCityField.toLowerCase() === "petauke") {
                    setPickLocationCityField("42")
                }
                else if (values.PickLocationCityField.toLowerCase() === "lundazi") {
                    setPickLocationCityField("43")
                }
                else if (values.PickLocationCityField.toLowerCase() === "katete") {
                    setPickLocationCityField("45")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mansa") {
                    setPickLocationCityField("21")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kabwe") {
                    setPickLocationCityField("10")
                }
                else if (values.PickLocationCityField.toLowerCase() === "kapiri") {
                    setPickLocationCityField("11")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mkushi") {
                    setPickLocationCityField("14")
                }
                else if (values.PickLocationCityField.toLowerCase() === "serenje") {
                    setPickLocationCityField("31")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mumbwa") {
                    setPickLocationCityField("37")
                }
                else if (values.PickLocationCityField.toLowerCase() === "mpika") {
                    setPickLocationCityField("26")
                }
                else if (values.PickLocationCityField.toLowerCase() === "nakonde") {
                    setPickLocationCityField("27")
                }
                else {
                    setPickLocationCityField("36")
                }

            }


            if (values.DestinationCountry === "Afghanistan") {
                setDestinationCountry("12")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }

            else if (values.DestinationCountry === "Albania") {
                setDestinationCountry("13")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Algeria") {
                setDestinationCountry("14")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "American Samoa") {
                setDestinationCountry("15")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Andorra") {
                setDestinationCountry("16")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Angola") {
                setDestinationCountry("17")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Anguilla") {
                setDestinationCountry("18")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Antigua And Barbuda") {
                setDestinationCountry("19")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Argentina") {
                setDestinationCountry("20")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Armenia") {
                setDestinationCountry("21")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Aruba") {
                setDestinationCountry("22")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())

            }
            else if (values.DestinationCountry === "Australia") {
                setDestinationCountry("23")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Austria") {
                setDestinationCountry("24")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Azerbaijan") {
                setDestinationCountry("25")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bahamas") {
                setDestinationCountry("26")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bahrain") {
                setDestinationCountry("27")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bangladesh") {
                setDestinationCountry("28")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Barbados") {
                setDestinationCountry("29")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Belarus") {
                setDestinationCountry("30")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Belgium") {
                setDestinationCountry("31")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Belize") {
                setDestinationCountry("32")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Benin") {
                setDestinationCountry("33")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bermuda") {
                setDestinationCountry("34")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bhutan") {
                setDestinationCountry("35")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bolivia") {
                setDestinationCountry("36")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bosnia Herzegovina") {
                setDestinationCountry("37")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Botswana") {
                setDestinationCountry("38")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Brazil") {
                setDestinationCountry("39")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Brunei Darussalam") {
                setDestinationCountry("40")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Bulgaria") {
                setDestinationCountry("41")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Burkina Faso") {
                setDestinationCountry("42")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Burundi") {
                setDestinationCountry("43")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cambodia") {
                setDestinationCountry("44")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cameroon") {
                setDestinationCountry("45")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Canada") {
                setDestinationCountry("46")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cape Verde") {
                setDestinationCountry("47")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cayman Islands") {
                setDestinationCountry("48")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Central African Republic") {
                setDestinationCountry("49")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Chad") {
                setDestinationCountry("50")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Chile") {
                setDestinationCountry("51")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "China") {
                setDestinationCountry("10")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Christmas Island") {
                setDestinationCountry("53")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cocos Keeling Island") {
                setDestinationCountry("54")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Colombia") {
                setDestinationCountry("55")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Congo") {
                setDestinationCountry("56")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Democratic Rep Of The Congo") {
                setDestinationCountry("57")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cook Islands") {
                setDestinationCountry("58")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Costa Rica") {
                setDestinationCountry("59")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cote D Ivoire") {
                setDestinationCountry("60")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Croatia") {
                setDestinationCountry("61")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cuba") {
                setDestinationCountry("62")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Cyprus") {
                setDestinationCountry("63")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Czech Republic") {
                setDestinationCountry("64")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Channel Islands") {
                setDestinationCountry("239")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Denmark") {
                setDestinationCountry("65")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Djibouti") {
                setDestinationCountry("66")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Dominica") {
                setDestinationCountry("67")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Dominican Republic") {
                setDestinationCountry("68")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ecuador") {
                setDestinationCountry("69")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Egypt") {
                setDestinationCountry("70")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "El Salvador") {
                setDestinationCountry("71")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Equatorial Guinea") {
                setDestinationCountry("72")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Eritrea") {
                setDestinationCountry("73")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Estonia") {
                setDestinationCountry("74")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ethiopia") {
                setDestinationCountry("75")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Faroe Islands") {
                setDestinationCountry("76")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Fiji") {
                setDestinationCountry("77")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Finland") {
                setDestinationCountry("78")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "France") {
                setDestinationCountry("79")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "French Guiana") {
                setDestinationCountry("80")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "French Polynesia") {
                setDestinationCountry("81")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Gabon") {
                setDestinationCountry("82")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Gambia") {
                setDestinationCountry("83")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Georgia") {
                setDestinationCountry("84")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Germany") {
                setDestinationCountry("85")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Gibraltar") {
                setDestinationCountry("87")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Greece") {
                setDestinationCountry("88")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Greenland") {
                setDestinationCountry("89")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Grenada") {
                setDestinationCountry("90")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guadeloupe") {
                setDestinationCountry("91")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guam") {
                setDestinationCountry("92")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guatemala") {
                setDestinationCountry("93")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guinea") {
                setDestinationCountry("94")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ghana") {
                setDestinationCountry("6")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guinea Bissau") {
                setDestinationCountry("95")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Guyana") {
                setDestinationCountry("96")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Haiti") {
                setDestinationCountry("97")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Honduras") {
                setDestinationCountry("98")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Hong Kong") {
                setDestinationCountry("99")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Hungary") {
                setDestinationCountry("100")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Iceland") {
                setDestinationCountry("101")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Indonesia") {
                setDestinationCountry("103")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Iran") {
                setDestinationCountry("104")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Iraq") {
                setDestinationCountry("105")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ireland") {
                setDestinationCountry("106")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Israel") {
                setDestinationCountry("107")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Italy") {
                setDestinationCountry("108")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "India") {
                setDestinationCountry("8")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ivory cost") {
                setDestinationCountry("109")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Jamaica") {
                setDestinationCountry("110")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Jordan") {
                setDestinationCountry("112")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Japan") {
                setDestinationCountry("9")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kazakhstan") {
                setDestinationCountry("113")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kenya") {
                setDestinationCountry("114")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kiribati") {
                setDestinationCountry("115")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "North\/South Korea") {
                setDestinationCountry("116")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kosovo") {
                setDestinationCountry("117")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kuwait") {
                setDestinationCountry("118")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Kyrgyzstan") {
                setDestinationCountry("119")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Lao People S Dem Republic") {
                setDestinationCountry("120")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Latvia") {
                setDestinationCountry("121")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Lebanon") {
                setDestinationCountry("122")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Lesotho") {
                setDestinationCountry("123")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Liberia") {
                setDestinationCountry("124")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Libya") {
                setDestinationCountry("193")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Liechtenstein") {
                setDestinationCountry("201")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Lithuania") {
                setDestinationCountry("202")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Luxembourg") {
                setDestinationCountry("203")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mozambique") {
                setDestinationCountry("184")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Malawi") {
                setDestinationCountry("186")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Madagascar") {
                setDestinationCountry("187")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mauritius") {
                setDestinationCountry("188")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Monaco") {
                setDestinationCountry("194")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Morocco") {
                setDestinationCountry("195")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Malaysia") {
                setDestinationCountry("204")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mauritania") {
                setDestinationCountry("205")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Malta") {
                setDestinationCountry("206")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Maldives") {
                setDestinationCountry("210")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Macau") {
                setDestinationCountry("215")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Macedonia") {
                setDestinationCountry("216")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mali") {
                setDestinationCountry("217")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Martinique") {
                setDestinationCountry("218")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mayotte") {
                setDestinationCountry("219")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mexico") {
                setDestinationCountry("220")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Moldova") {
                setDestinationCountry("221")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Mongolia") {
                setDestinationCountry("222")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Montenegro") {
                setDestinationCountry("223")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Montserrat") {
                setDestinationCountry("224")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Myanmar") {
                setDestinationCountry("225")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Namibia") {
                setDestinationCountry("185")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Netherlands") {
                setDestinationCountry("189")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Nigeria") {
                setDestinationCountry("190")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "New Zealand") {
                setDestinationCountry("196")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Northern Mariana Island") {
                setDestinationCountry("207")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Norway") {
                setDestinationCountry("197")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Nepal") {
                setDestinationCountry("211")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Netherlands Antilles") {
                setDestinationCountry("227")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Nicaragua") {
                setDestinationCountry("228")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Niger") {
                setDestinationCountry("229")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Nauru") {
                setDestinationCountry("226")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Oman") {
                setDestinationCountry("208")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Pakistan") {
                setDestinationCountry("212")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Portugal") {
                setDestinationCountry("191")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Philippines") {
                setDestinationCountry("213")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Poland") {
                setDestinationCountry("198")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Palestine State") {
                setDestinationCountry("230")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Panama") {
                setDestinationCountry("231")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Papua New Guinea") {
                setDestinationCountry("232")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Paraguay") {
                setDestinationCountry("233")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Peru") {
                setDestinationCountry("234")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Puerto Rico") {
                setDestinationCountry("235")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Qatar") {
                setDestinationCountry("209")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Rwanda") {
                setDestinationCountry("125")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Reunion") {
                setDestinationCountry("199")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Russian Federation") {
                setDestinationCountry("200")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Saint Lucia") {
                setDestinationCountry("126")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Saint Pierre And Miquelon") {
                setDestinationCountry("127")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Samoa") {
                setDestinationCountry("128")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "San Marino") {
                setDestinationCountry("129")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Sao Tome And Principe") {
                setDestinationCountry("130")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Saudi Arabia") {
                setDestinationCountry("131")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Scotland") {
                setDestinationCountry("132")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Senegal") {
                setDestinationCountry("133")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Serbia") {
                setDestinationCountry("134")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Seychelles") {
                setDestinationCountry("135")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Sierra Leone") {
                setDestinationCountry("136")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Singapore") {
                setDestinationCountry("137")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Slovakia") {
                setDestinationCountry("138")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Slovenia") {
                setDestinationCountry("139")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Solomon Islands") {
                setDestinationCountry("140")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Somalia") {
                setDestinationCountry("141")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "South Africa - Johannesburg") {
                setDestinationCountry("142")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "South Africa - Others") {
                setDestinationCountry("143")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Spain") {
                setDestinationCountry("144")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Sri Lanka") {
                setDestinationCountry("145")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "St Kitts And Nevis") {
                setDestinationCountry("146")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "St Vincent\/st Lucia") {
                setDestinationCountry("147")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Sudan\/south sudan") {
                setDestinationCountry("148")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Suriname") {
                setDestinationCountry("149")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Swaziland") {
                setDestinationCountry("150")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Sweden") {
                setDestinationCountry("151")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Switzerland") {
                setDestinationCountry("152")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Syria") {
                setDestinationCountry("153")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Slovenia") {
                setDestinationCountry("236")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Serbia") {
                setDestinationCountry("237")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Samoa") {
                setDestinationCountry("238")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Taiwan") {
                setDestinationCountry("154")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Tajikistan") {
                setDestinationCountry("155")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Tanzania") {
                setDestinationCountry("156")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Thailand") {
                setDestinationCountry("157")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Timor-L'Este") {
                setDestinationCountry("158")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Togo") {
                setDestinationCountry("159")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Tonga") {
                setDestinationCountry("160")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Trinidad & Tobago") {
                setDestinationCountry("161")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Tunisia") {
                setDestinationCountry("162")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Turkey") {
                setDestinationCountry("163")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Turkmenistan") {
                setDestinationCountry("164")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Tuvalu") {
                setDestinationCountry("165")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Uganda") {
                setDestinationCountry("166")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Ukraine") {
                setDestinationCountry("167")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "United Arab Emirates") {
                setDestinationCountry("168")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "United Kingdom - London") {
                setDestinationCountry("169")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "United Kingdom Others") {
                setDestinationCountry("170")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "United States") {
                setDestinationCountry("171")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Uruguay") {
                setDestinationCountry("172")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Uzbekistan") {
                setDestinationCountry("173")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Vanuatu") {
                setDestinationCountry("174")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Vaticano") {
                setDestinationCountry("175")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Venezuela") {
                setDestinationCountry("176")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Vietnam") {
                setDestinationCountry("177")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Virgin Islands British") {
                setDestinationCountry("178")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Virgin Islands U S") {
                setDestinationCountry("179")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Wales") {
                setDestinationCountry("180")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Yemen") {
                setDestinationCountry("181")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else if (values.DestinationCountry === "Zimbabwe") {
                setDestinationCountry("183")
                setDropLocationCityField(values.DropLocationCityField.toLowerCase())
            }
            else {
                setDestinationCountry("3")
                if (values.DropLocationCityField.toLowerCase() === "lusaka") {
                    setDropLocationCityField("1")
                }
                else if (values.DropLocationCityField.toLowerCase() === "makeni") {
                    setDropLocationCityField("25")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kafue") {
                    setDropLocationCityField("32")
                }
                else if (values.DropLocationCityField.toLowerCase() === "chirundu") {
                    setDropLocationCityField("33")
                }
                else if (values.DropLocationCityField.toLowerCase() === "livingstone") {
                    setDropLocationCityField("2")
                }
                else if (values.DropLocationCityField.toLowerCase() === "choma") {
                    setDropLocationCityField("15")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kalomo") {
                    setDropLocationCityField("16")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mazabuka") {
                    setDropLocationCityField("17")
                }
                else if (values.DropLocationCityField.toLowerCase() === "monze") {
                    setDropLocationCityField("18")
                }
                else if (values.DropLocationCityField.toLowerCase() === "chingola") {
                    setDropLocationCityField("3")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kitwe") {
                    setDropLocationCityField("12")
                }
                else if (values.DropLocationCityField.toLowerCase() === "ndola") {
                    setDropLocationCityField("13")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mufulira") {
                    setDropLocationCityField("28")
                }
                else if (values.DropLocationCityField.toLowerCase() === "chililabombwe") {
                    setDropLocationCityField("29")
                }
                else if (values.DropLocationCityField.toLowerCase() === "luanshya") {
                    setDropLocationCityField("30")
                }
                else if (values.DropLocationCityField.toLowerCase() === "solwezi") {
                    setDropLocationCityField("4")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kalumbila") {
                    setDropLocationCityField("5")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kabompo") {
                    setDropLocationCityField("38")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mwinlunga") {
                    setDropLocationCityField("40")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kasama") {
                    setDropLocationCityField("20")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mpulungu") {
                    setDropLocationCityField("34")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mbala") {
                    setDropLocationCityField("35")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mongu") {
                    setDropLocationCityField("22")
                }
                else if (values.DropLocationCityField.toLowerCase() === "sesheke") {
                    setDropLocationCityField("39")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kaoma") {
                    setDropLocationCityField("41")
                }
                else if (values.DropLocationCityField.toLowerCase() === "chipata") {
                    setDropLocationCityField("19")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mfuwe") {
                    setDropLocationCityField("23")
                }
                else if (values.DropLocationCityField.toLowerCase() === "petauke") {
                    setDropLocationCityField("42")
                }
                else if (values.DropLocationCityField.toLowerCase() === "lundazi") {
                    setDropLocationCityField("43")
                }
                else if (values.DropLocationCityField.toLowerCase() === "katete") {
                    setDropLocationCityField("45")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mansa") {
                    setDropLocationCityField("21")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kabwe") {
                    setDropLocationCityField("10")
                }
                else if (values.DropLocationCityField.toLowerCase() === "kapiri") {
                    setDropLocationCityField("11")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mkushi") {
                    setDropLocationCityField("14")
                }
                else if (values.DropLocationCityField.toLowerCase() === "serenje") {
                    setDropLocationCityField("31")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mumbwa") {
                    setDropLocationCityField("37")
                }
                else if (values.DropLocationCityField.toLowerCase() === "mpika") {
                    setDropLocationCityField("26")
                }
                else if (values.DropLocationCityField.toLowerCase() === "nakonde") {
                    setDropLocationCityField("27")
                }
                else {
                    setDropLocationCityField("36")
                }

            }*/}
  

    
    return (
        <>
            <div className="InstantQuote">
                <form className="InstantQuoteForm" >
                    <h1>Instant Quote</h1>


                    <div className="OriginCountry">
                        <label htmlFor="OriginCountry">Origin Country
                        </label>
                        <select name="OriginCountry" >
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
                            <option>Russian Federation</option>
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
                            <option>St Vincent\/st Lucia</option>
                            <option>Sudan\/south sudan</option>
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
                            <option>Timor-L"Este</option>
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
                    <div className="PickLocationCity">
                        <label htmlFor="PickLocationCityField">Pickup Location</label>
                        <input type="text" name="PickLocationCityField" placeholder="City" onChange={getData1} />
                    </div>


                    <div className="DestinationCountry">
                        <label htmlFor="DestinationCountry">Destination Country</label>
                        <select name="DestinationCountry">
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
                            <option>Timor-L"Este</option>
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
                            <option>Virgin Islands U S</option>
                            <option>Wales</option>
                            <option>Yemen</option>
                            <option>Zimbabwe</option>
                            <option>Zambia</option>

                        </select>

                    </div>

                    <div className="DropLocationCity">
                        <label htmlFor="DropLocationCityField">Drop Location</label>
                        <input type="text" name="DropLocationCityField" placeholder="City"  onChange={getData2} />
                    </div>

                    <button  className="NextButton" onClick={() =>setSubmit(true)}>Next</button>

                </form>

            </div>

            <div className="line"></div>

            <div>
                {
                    Submit?
                    <h1>{DropLocationCityField}</h1>
                    :null
                }
            </div>
          

        </>
    )
}