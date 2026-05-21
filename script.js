function showPortIn(number) {
    
    if (number === 1) {
        document.getElementById("portInAccount").style.display = '';
        document.getElementById("portOutAccount").style.display = 'none';
        //document.getElementById("portInAccount").scrollIntoView({ behavior: 'smooth' });

    }

    if (number === 2) {
        document.getElementById("portInPassword").style.display = '';
        document.getElementById("portOutPassword").style.display = 'none';
        //document.getElementById("portInPassword").scrollIntoView({ behavior: 'smooth' });
        
    }

    if (number === 3) {
        document.getElementById("portInZipcode").style.display = '';
        document.getElementById("portOutZipcode").style.display = 'none';
        //document.getElementById("portInZipcode").scrollIntoView({ behavior: 'smooth' });

    }

    if (number === 4) {
        document.getElementById("portInFirstName").style.display = '';
        document.getElementById("portOutFirstName").style.display = 'none';
        //document.getElementById("portInFirstName").scrollIntoView({ behavior: 'smooth' });
    }

    if (number === 5) {
        document.getElementById("portInLastName").style.display = '';
        document.getElementById("portOutLastName").style.display = 'none';
        //document.getElementById("portInLastName").scrollIntoView({ behavior: 'smooth' });
    }

    if (number === 6) {
        document.getElementById("mdnPortIn").style.display = '';
        document.getElementById("mdnPortOut").style.display = 'none';
    }

    if (number === 7) {
        document.getElementById("ntpPortIn").style.display = '';
        document.getElementById("ntpPortOut").style.display = 'none';
    }

    if (number === 8) {
        document.getElementById("6cPortOut").style.display = 'none';
        document.getElementById("6cPortIn").style.display = '';
    }

    if (number === 9) {
        document.getElementById("mdn6dPortOut").style.display = 'none';
        document.getElementById("mdn6dPortIn").style.display = '';
    }
}


function showPortOut(number) {

    if (number === 1) {
        document.getElementById("portOutAccount").style.display = '';
        document.getElementById("portInAccount").style.display = 'none';
    }

    if (number === 2) {
        document.getElementById("portOutPassword").style.display = '';
        document.getElementById("portInPassword").style.display = 'none';
    }

    if (number === 3) {
        document.getElementById("portOutZipcode").style.display = '';
        document.getElementById("portInZipcode").style.display = 'none';
    }

    if (number === 4) {
        document.getElementById("portOutFirstName").style.display = '';
        document.getElementById("portInFirstName").style.display = 'none';
    }

    if (number === 5) {
        document.getElementById("portOutLastName").style.display = '';
        document.getElementById("portInLastName").style.display = 'none';
    }

    if (number === 6) {
        document.getElementById("mdnPortOut").style.display = '';
        document.getElementById("mdnPortIn").style.display = 'none';
    }

    if (number === 7) {
        document.getElementById("ntpPortIn").style.display = 'none';
        document.getElementById("ntpPortOut").style.display = '';
    }

    if (number === 8) {
        document.getElementById("6cPortOut").style.display = '';
        document.getElementById("6cPortIn").style.display = 'none';
    }

    if (number === 9) {
        document.getElementById("mdn6dPortOut").style.display = '';
        document.getElementById("mdn6dPortIn").style.display = 'none';
    }
}

function showInfo(value) {

    const accountNumberInfo = document.getElementById("8Ainfo");
    const accountPasswordInfo = document.getElementById("8Cinfo");
    const zipCodeInfo = document.getElementById("8Dinfo");
    const firstNameInfo = document.getElementById("8Einfo");
    const lastNameInfo = document.getElementById("8Finfo");

    const portInActivationFailed = document.getElementById("portInActivationFailed");
    const icTimer = document.getElementById("icTimer");
    const notEligible = document.getElementById("notEligible");
    const multipleReasons = document.getElementById("1pMultipleReasons");
    const MDNnotFound = document.getElementById("MDNnotFound");
    const ntpRequired = document.getElementById("ntpRequired");
    const customerInfo6c = document.getElementById("customerInfo6c");
    const mdnNotActive6d = document.getElementById("mdnNotActive6d");
    const delay6g = document.getElementById("delay6g");
    const duplicate6M = document.getElementById("duplicate6M");
    const duplicatePort6N = document.getElementById("duplicatePort6N");
    const mdnPortProtection6P = document.getElementById("mdnPortProtection6p");
    
    


    if (value === "PIAF" || value === "icte" || value === "MDN" || value === "1P" || value === "6A" || value === "6B" || value === "6C" || value === "6D" 
        || value === "6G" || value === "6M" || value === "6N" || value === "6P" || value === "OTH")  
    {
        accountNumberInfo.style.display = 'none';
        accountPasswordInfo.style.display = 'none';
        zipCodeInfo.style.display = 'none';
        firstNameInfo.style.display = 'none';
        lastNameInfo.style.display = 'none';
    }

    if (value === "8A" || value === "8C" || value === "8D" || value === "8E" || value === "8F") {
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         delay6g.style.display = 'none';
         duplicate6M.style.display = 'none';
         duplicatePort6N.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';
    }

    if (value === "PIAF") {
        portInActivationFailed.style.display = '';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         delay6g.style.display = 'none';
         duplicate6M.style.display = 'none';
         duplicatePort6N.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';
    }

    if (value === "icte") {
        icTimer.style.display = '';
        portInActivationFailed.style.display = 'none';
        notEligible.style.display = 'none';
        multipleReasons.style.display = 'none';
        MDNnotFound.style.display = 'none';
        ntpRequired.style.display = 'none';
        customerInfo6c.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "MDN") {
        notEligible.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
        multipleReasons.style.display = 'none';
        MDNnotFound.style.display = 'none';
        ntpRequired.style.display = 'none';
        customerInfo6c.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "1P") {
        multipleReasons.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
        notEligible.style.display = 'none';
        MDNnotFound.style.display = 'none';
        ntpRequired.style.display = 'none';
        customerInfo6c.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6A") {
        MDNnotFound.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
        notEligible.style.display = 'none';
        multipleReasons.style.display = 'none';
        ntpRequired.style.display = 'none';
        customerInfo6c.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6B") {
        ntpRequired.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
        notEligible.style.display = 'none';
        multipleReasons.style.display = 'none';
        MDNnotFound.style.display = 'none';
        customerInfo6c.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6C") {
        customerInfo6c.style.display = '';
        ntpRequired.style.display = 'none';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
        notEligible.style.display = 'none';
        multipleReasons.style.display = 'none';
        MDNnotFound.style.display = 'none';
        mdnNotActive6d.style.display = 'none';
        delay6g.style.display = 'none';
        duplicate6M.style.display = 'none';
        duplicatePort6N.style.display = 'none';
        mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6D") {
        mdnNotActive6d.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         delay6g.style.display = 'none';
         duplicate6M.style.display = 'none';
         duplicatePort6N.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';

    }

    if (value === "6G") {
        delay6g.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         duplicate6M.style.display = 'none';
         duplicatePort6N.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';

    }

    if (value === "6M") {
        duplicate6M.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         delay6g.style.display = 'none';
         duplicatePort6N.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6N") {
        duplicatePort6N.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         delay6g.style.display = 'none';
         duplicate6M.style.display = 'none';
         mdnPortProtection6P.style.display = 'none';
    }

    if (value === "6P") {
        mdnPortProtection6P.style.display = '';
        portInActivationFailed.style.display = 'none';
        icTimer.style.display = 'none';
         notEligible.style.display = 'none';
         multipleReasons.style.display = 'none';
         MDNnotFound.style.display = 'none';
         ntpRequired.style.display = 'none';
         customerInfo6c.style.display = 'none';
         mdnNotActive6d.style.display = 'none';
         delay6g.style.display = 'none';
         duplicate6M.style.display = 'none';
         duplicatePort6N.style.display = 'none';

    }



    if (value === "8A") {
        accountNumberInfo.style.display = '';
        accountPasswordInfo.style.display = 'none';
        zipCodeInfo.style.display = 'none';
        firstNameInfo.style.display = 'none';
        lastNameInfo.style.display = 'none';
    }

    if (value === "8C") {
        accountNumberInfo.style.display = 'none';
        accountPasswordInfo.style.display = '';
        zipCodeInfo.style.display = 'none';
        firstNameInfo.style.display = 'none';
        lastNameInfo.style.display = 'none';
    }

    if (value === "8D") {
        accountNumberInfo.style.display = 'none';
        accountPasswordInfo.style.display = 'none';
        zipCodeInfo.style.display = '';
        firstNameInfo.style.display = 'none';
        lastNameInfo.style.display = 'none';
    }

    if (value === "8E") {
        accountNumberInfo.style.display = 'none';
        accountPasswordInfo.style.display = 'none';
        zipCodeInfo.style.display = 'none';
        firstNameInfo.style.display = '';
        lastNameInfo.style.display = 'none';
    }

    if (value === "8F") {
        accountNumberInfo.style.display = 'none';
        accountPasswordInfo.style.display = 'none';
        zipCodeInfo.style.display = 'none';
        firstNameInfo.style.display = 'none';
        lastNameInfo.style.display = '';
    }
}


function copyAmdocs(number) {
    
}