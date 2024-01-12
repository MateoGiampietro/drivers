export default function Validation(userData, errors, setErrors) {
    const name = userData.name;
    const lastName = userData.lastName;
    const nationality = userData.nationality;
    const image = userData.image;
    const bornDate = userData.bornDate.split("-");
    const description = userData.description;
    const teams = userData.teams;

    const nationalityRegex = /^(?:Afghan|Albanian|Algerian|American|Andorran|Angolan|Antiguans?|Argentine|Armenian|Australian|Austrian|Azerbaijani|Bahamian|Bahraini|Bangladeshi|Barbadian|Barbudans?|Batswana|Belarusian|Belgian|Belizean|Beninese|Bhutanese|Bolivian|Bosnian|Brazilian|British|Bruneian|Bulgarian|Burkinabe|Burmese|Burundian|Cabo Verdean|Cambodian|Cameroonian|Canadian|Central African|Chadian|Chilean|Chinese|Colombian|Comoran|Congolese|Costa Rican|Croatian|Cuban|Cypriot|Czech|Danish|Djibouti|Dominican|Dutch|East Timorese|Ecuadorean|Egyptian|Emirian|Equatorial Guinean|Eritrean|Estonian|Eswatini|Ethiopian|Fijian|Filipino|Finnish|French|Gabonese|Gambian|Georgian|German|Ghanaian|Greek|Grenadian|Guatemalan|Guinea-Bissauan|Guinean|Guyanese|Haitian|Herzegovinian|Honduran|Hungarian|I-Kiribati|Icelander|Indian|Indonesian|Iranian|Iraqi|Irish|Israeli|Italian|Ivorian|Jamaican|Japanese|Jordanian|Kazakhstani|Kenyan|Kittian and Nevisian|Kuwaiti|Kyrgyz|Laotian|Latvian|Lebanese|Liberian|Libyan|Liechtensteiner|Lithuanian|Luxembourger|Macedonian|Malagasy|Malawian|Malaysian|Maldivian|Malian|Maltese|Marshallese|Mauritanian|Mauritian|Mexican|Micronesian|Moldovan|Monacan|Mongolian|Montenegrin|Moroccan|Mozambican|Namibian|Nauruan|Nepalese|New Zealander|Nicaraguan|Nigerian|Nigerien|North Korean|Northern Irish|Norwegian|Omani|Pakistani|Palauan|Panamanian|Papua New Guinean|Paraguayan|Peruvian|Polish|Portuguese|Qatari|Romanian|Russian|Rwandan|Saint Lucian|Salvadoran|Samoan|San Marinese|Sao Tomean|Saudi|Scottish|Senegalese|Serbian|Seychellois|Sierra Leonean|Singaporean|Slovakian|Slovenian|Solomon Islander|Somali|South African|South Korean|South Sudanese|Spanish|Sri Lankan|Sudanese|Surinamer|Swiss|Syrian|Taiwanese|Tajik|Tanzanian|Thai|Togolese|Tongan|Trinidadian or Tobagonian|Tunisian|Turkish|Tuvaluan|Ugandan|Ukrainian|Uruguaian|Uzbekistani|Venezuelan|Vietnamese|Welsh|Yemenite|Zambian|Zimbabwean)$/;

    if (!name) setErrors({...errors, name:'El nombre no puede estar vacio.'});
    else {
        if (name.length < 3) setErrors({...errors, name:"El nombre no puede ser menor a 3 caracteres"})
        else setErrors({...errors, name: 'Nombre invalido'});
    };

    if (!lastName) setErrors({...errors, lastName:'El apellido no puede estar vacio.'});
    else {
        if (name.length < 3) setErrors({...errors, lastName:"El apellido no puede ser menor a 3 caracteres"})
        else setErrors({...errors, lastName: 'Apellido invalido'});
    };

    if (!nationality) setErrors({...errors, nationality:'La nacionalidad no puede estar vacia.'});
    else {
        if (nationalityRegex.test(nationality)) setErrors({...errors, nationality:"Esa nacionaliad no existe o esta mal escrita."})
        else setErrors({...errors, nationality: 'Nacionalidad invalida.'});
    };

    if (!image.toLowerCase().endsWith(".jpg") && !image.toLowerCase().endsWith(".png")) setErrors({...errors, image:'La imagen debe ser jpg o png.'});

    if (!bornDate) setErrors({...errors, bornDate:'La fecha de vencimiento no puede estar vacia.'});
    else {
        if (bornDate[0] > 2024) setErrors({...errors, name:"El año de nacimiento no puede ser mayor a 2024"})
        else setErrors({...errors, bornDate: 'Fecha de nacimiento invalida.'});
    };

    if (!description) setErrors({...errors, description:'La descripcion no puede estar vacia.'});
    else {
        if (description.length > 500) setErrors({...errors, description:"La descripcion no puede ser mayor a 500 caracteres."})
        else setErrors({...errors, description: 'Descripcion invalida.'});
    };

    if (teams.length > 10) setErrors({...errors, teams:'Solo existen 10 escuderias.'});
    if (teams.length > 1) {
        for (let i = 1; i < teams.length; i++) {
            if (teams[i] === teams[i - 1]) {
                setErrors({...errors, teams: 'Hay una escuderia repetida.'});
            };
        };
    };
};