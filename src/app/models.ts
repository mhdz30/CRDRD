

export interface Convocatoria{
    tiposangre: string;
    ubicacion: string;
    id: string;
    fechasolic: Date;
    cd: string;
}


export interface Receptor{
    nombres: string;
    apellidos: string;
    cedula: number;
    id: string;
    fechareg: Date;
    fechanac: Date;
    tiposangre: string;
  
}

export interface DonanteInstantaneo{
    nombres: string;
    apellidos: string;
    cedula: number;
    id: string;
    fechanac: Date;
    tiposangredon: string;
  
}

export interface Solicitud{
    id: string;
    fechasolic: Date;
    tiposangrereq: string;
    cantidadreq: string;
    medicosolic: string;
    institucionsolic: string;
    fechaindic: Date;
}

export interface PintasSangresE{
    idregsangre: string;
    nomTipoSangre: string;
    cantidadexistente: string;
    ubicacion: string;

}
export interface Cita{
    id: string;
    fechacita: Date;
}
export interface FormSelectone{
    id: string;
    res1: string;
    res2: string;
    res3: string;
    res4: string;
    
    
}
export interface FormSelecttwo{
    id: string;
    res5: string;
    res6: string;
    res7: string;
    res8: string;
    
    
}
export interface FormSelectthree{
    id: string;
    res9: string;
    res10: string;
    res11: string;
}
export interface FormSelect4{
    id: string;
    res12: string;
    res13: string;
    res14: string;
    res15: string;
}
export interface FormSelect5{
    id: string;
    res16: string;
    res17: string;
    res18: string;
    res19: string;
    res20: string;
}
export interface FormSelect6{
    id: string;
    res21: string;
    res22: string;
    res23: string;
}
export interface FormSelect7{
    id: string;
    res24: string;
    res25: string;

}
export interface FormSelect8{
    id: string;
    res26: string;
    res27: string;
    res28: string;
    res29: string;
}
export interface FormSelec9{
    id: string;
    res30: string;
    res31: string;
    res32: string;
    res33: string;
    res34: string;

}
export interface FormSelec10{
    id: string;
    res35: string;
    res36: string;
    res37: string;
    res38: string;

}
export interface FormSelec11{
    id: string;
    res39: string;
    res40: string;

}

export interface users{
    uid: string;
    name: string;
    password: string;
    email: string;
    lastname: string;
    ts: string;
    bd: Date;

}

export interface DonacionesC{
    id: string;
    fechad: Date;
    tipo: string;


}
