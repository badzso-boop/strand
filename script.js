function szamol() {
    const felnott = parseInt(document.getElementById('felnott').value);
    const diak = parseInt(document.getElementById('diak').value);
    const nyugdijas = parseInt(document.getElementById('nyugdijas').value);

    const arfelnott = 1200;
    const ardiak = 1000;
    const arnyugdijas = 800;

    let osszes = osszesit(felnott*arfelnott,diak*ardiak, nyugdijas*arnyugdijas);

    document.getElementById('osszeg').innerHTML = kedvezmeny(osszes) + "Ft";

    bizonylatnyomtat(felnott,diak,nyugdijas,arfelnott,ardiak,arnyugdijas,osszes);
}

function osszesit(kat1, kat2, kat3) {
    return kat1+kat2+kat3;
}

function kedvezmeny(osszes) {
    if(document.getElementById('kartya').checked == true)
    {
        osszes *= 0.95;
    }
    return osszes;
}

function bizonylatnyomtat(felnott,diak,nyugdijas,arfelnott,ardiak,arnyugdijas,osszes) {
    let kedv = "";
    let ujosszeg = osszes;
    if(document.getElementById('kartya').checked == true)
    {
        kedv = "5%";
        ujosszeg = kedvezmeny(osszes);
    } else {
        kedv = "-";
    }
    console.log(
`BIZONYLAT BALATON STRAND \n 
BALATON, BALATON TÉR 1 \n
DIAK \t \t ${diak}db * ${ardiak}Ft \t ${ardiak*diak}Ft \n
FELNOTT \t ${felnott}db * ${arfelnott}Ft \t ${felnott*arfelnott}Ft \n
NYUGDÍJAS \t ${nyugdijas}db * ${arnyugdijas}Ft \t \t${nyugdijas*arnyugdijas}Ft \n
OSSZESEN \t ${osszes}Ft \n
KEDVEZMENY \t ${kedv} \n
OSSZESEN FIZETENDO \t ${ujosszeg}Ft`
    );
}