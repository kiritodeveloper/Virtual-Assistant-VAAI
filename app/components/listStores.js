'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};



    renders.components.listStores = React.createClass({
        displayName: 'listEvents',
        stores: [{
                id: 2346,
                address: 'AV. INDEPENDENCIA NO. 2301 COL. TROJES DE ALONSO',
                name: 'AGUASCALIENTES',
                cp: '20120',
                lat: '21.924244',
                lon: '-102.297275',
                state: 'AGUASCALIENTES'
            },
            {
                id: 3015,
                address: 'CARRET  TRANSP  EDA-LA PAZ  #3976, CARLOS PACHECO',
                name: 'ENSENADA',
                cp: '22780',
                lat: '31.816108',
                lon: '-116.600355',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4139,
                address: 'AV. MARIA LAVALLE URBINA No. 35 COL. AHKIN PEACH',
                name: 'CAMPECHE',
                cp: '24014',
                lat: '19.852397',
                lon: '-90.528949',
                state: 'CAMPECHE'
            },
            {
                id: 1054,
                address: 'AV. TECNOLOGICO 125 COL MIGUEL HIDALGO',
                name: 'COLIMA NORTE',
                cp: '28037',
                lat: '19.257889',
                lon: '-103.719836',
                state: 'COLIMA'
            },
            {
                id: 3879,
                address: 'PEDRO A GALVAN NORTE NO. 120 COL. CENTRO',
                name: 'COLIMA NIÑOS HEROES',
                cp: '28000',
                lat: '19.238387',
                lon: '-103.715703',
                state: 'COLIMA'
            },
            {
                id: 2033,
                address: 'AV. CANAL DE TEZONTLE NO. 1520 COL. DR. ALFONSO ORTIZ TIRADO',
                name: 'PLAZA ORIENTE',
                cp: '9020',
                lat: '19.384414',
                lon: '-99.079818',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2344,
                address: 'BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS',
                name: 'LOMAS',
                cp: '11220',
                lat: '19.450322',
                lon: '-99.217382',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2345,
                address: 'CALZ. DE GUADALUPE NO. 431 COL. GUADALUPE TEPEYAC',
                name: 'TEPEYAC',
                cp: '7840',
                lat: '19.47176',
                lon: '-99.120678',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2347,
                address: 'CALZ. TLÁHUAC NO. 5662  COL. SAN LORENZO TEZONCO',
                name: 'TLAHUAC',
                cp: '13266',
                lat: '19.306226',
                lon: '-99.061031',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2430,
                address: 'AV. COPILCO NO. 164 COL. OXTOPULCO DEL. COYOACAN',
                name: 'COPILCO',
                cp: '4318',
                lat: '19.337935',
                lon: '-99.183565',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2464,
                address: 'AV. ESCUELA NAVAL MILITAR # 753 ESQ. AV. CANAL DE MIRAMONTES DELEG. COYOACÁN',
                name: 'MIRAMONTES',
                cp: '4890',
                lat: '19.31725',
                lon: '-99.125569',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3863,
                address: 'AV. CENTRO COMERCIAL NO. 190 COL. INSURGENTES CUICUILCO',
                name: 'PERIFERICO SUR',
                cp: '4530',
                lat: '19.306299',
                lon: '-99.187436',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3872,
                address: 'FRAY SERVANDO TERESA DE MIER NO. 881 COL.  JARDIN BALBUENA',
                name: 'BALBUENA',
                cp: '15900',
                lat: '19.417102',
                lon: '-99.105894',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3876,
                address: 'LAS AGUILAS NO. 820 COL. LAS AGUILAS',
                name: 'LAS AGUILAS',
                cp: '1710',
                lat: '19.353376',
                lon: '-99.215205',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3877,
                address: 'MIGUEL OTHON DE MENDIZABAL OTE. 343, COL. NUEVA INDUSTRIAL VALLEJO',
                name: 'TORRES LINDAVISTA',
                cp: '7700',
                lat: 'NULL',
                lon: 'NULL',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 4547,
                address: 'CALZADA SAN JUAN DE ARAGÓN NO. 516 COLONIA D.M. NACIONAL DELEGARCIÓN GUSTAVO A. MADERO',
                name: 'EDUARDO MOLINA',
                cp: '7090',
                lat: '19.48',
                lon: '-99.0948',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3848,
                address: 'MIGUEL A. DE QUEVEDO NO. 175 COL. CHIMALISTAC DELEGACION COYOACAN',
                name: 'TAXQUEÑA',
                cp: '1070',
                lat: '19.344602',
                lon: '-99.18241',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3851,
                address: 'CALZADA IGNACIO ZARAGOZA NO. 58   COL. FEDERAL',
                name: 'AEROPUERTO',
                cp: '15700',
                lat: '19.419874',
                lon: '-99.094757',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3852,
                address: 'BLVD. ADOLFO LOPEZ MATEOS NO. 1701 COL. LOMAS DE PLATEROS, DELEG. ALVARO OBREGON',
                name: 'PLATEROS',
                cp: '1460',
                lat: '19.369857',
                lon: '-99.194079',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3857,
                address: 'AV. CANAL DE MIRAMONTES NO. 3520 COL. SAN BARTOLO COAPA',
                name: 'VILLA COAPA',
                cp: '14390',
                lat: '19.292941',
                lon: '-99.123754',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3858,
                address: 'JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA',
                name: 'CUAJIMALPA',
                cp: '5210',
                lat: '19.363776',
                lon: '-99.287916',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3862,
                address: 'AV. NEXTENGO NO. 78 COL. SANTA CRUZ ACAYUCAN',
                name: 'AZCAPOTZALCO',
                cp: '2770',
                lat: '19.472744',
                lon: '-99.19247',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2466,
                address: 'AV. CUITLÁHUAC NO. 3651 COL. HOGAR Y SEGURIDAD DELEG. AZCAPOTZALCO',
                name: 'CUITLAHUAC',
                cp: '2820',
                lat: '19.470953',
                lon: '-99.164241',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2670,
                address: 'CALZADA TLALPAN NO. 1037  COL. NATIVITAS',
                name: 'TLALPAN',
                cp: '3500',
                lat: '19.380743',
                lon: '-99.14118',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2689,
                address: 'AV. SAN FRANCISCO NO. 1621 COL. DEL VALLE DEL. BENITO JUÁREZ',
                name: 'FELIX CUEVAS',
                cp: '3100',
                lat: '19.372604',
                lon: '-99.175437',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3794,
                address: 'AV. LUIS ESPINOZA NO.  160 COL. SANTIAGO ATEPETLAC, DELEGACION GUSTAVO A. MADERO',
                name: 'ACUEDUCTO DE GUADALUPE',
                cp: '7200',
                lat: '19.53071',
                lon: '-99.155527',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3845,
                address: 'AV. UNIVERSIDAD NO. 936-A COL. SANTA CRUZ ATOYAC',
                name: 'UNIVERSIDAD',
                cp: '3310',
                lat: '19.36871',
                lon: '-99.164135',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3846,
                address: 'INSURGENTES NORTE NO. 131, COL GUERRERO',
                name: 'BUENAVISTA',
                cp: '6300',
                lat: '19.443265',
                lon: '-99.153021',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2432,
                address: 'AV. FELIPE PESCADOR NO. 1101 ESQ. PROL. CALLE LIBERTAD',
                name: 'DURANGO',
                cp: '34000',
                lat: '24.036645',
                lon: '-104.653343',
                state: 'DURANGO'
            },
            {
                id: 3014,
                address: 'BLVD. DURANGO No. 100 ESQ. AV. CUITLAHUAC FRACC. EL EDEN',
                name: 'DURANGO II " EL EDEN" ',
                cp: '34160',
                lat: '24.003415',
                lon: '-104.652401',
                state: 'DURANGO'
            },
            {
                id: 3071,
                address: 'BLVD. FRANCISCO VILLA # 4510, COLONIA: VALLE FLORIDO II',
                name: 'FRANCISCO VILLA',
                cp: '34234',
                lat: '24.067187',
                lon: '-104.600541',
                state: 'DURANGO'
            },
            {
                id: 1067,
                address: 'BLVAD. DE LAS NACIONES 802 COL. GRANJAS DEL MARQUEZ, ESQ ANGEL MARTIENZ A UN LADO DEL COLEGIO SIMON BOLIVAR',
                name: 'ACAPULCO DIAMANTE',
                cp: '39890',
                lat: '16.795535',
                lon: '-99.809381',
                state: 'GUERRERO'
            },
            {
                id: 2349,
                address: 'AV. COSTERA MIGUEL ALEMÁN NO. 500 COL. ICACOS',
                name: 'ACAPULCO',
                cp: '39860',
                lat: '16.845561',
                lon: '-99.847265',
                state: 'GUERRERO'
            },
            {
                id: 1584,
                address: 'AV. DR. JORGE JIMENEZ CANTU SN, COL. LA ESTADIA, ENTRE LAS CALLES ESTADIA Y RESIDENCIA CHILUCA',
                name: 'ESPACIO ESMERALDA',
                cp: '52936',
                lat: '19.5523',
                lon: '-99.28997',
                state: 'MEXICO'
            },
            {
                id: 2356,
                address: 'BOULEVARD BERNARDO QUINTANA NO. 4113 COL. SAN PABLO TECNOLÓGICO',
                name: 'QUERETARO',
                cp: '76160',
                lat: '20.615072',
                lon: '-100.397568',
                state: 'QUERETARO'
            },
            {
                id: 5749,
                address: 'AUTOPISTA QUERETARO-CELAYA NO.5501 ,PROLONGACION LAS AMERICAS COL EL JACAL',
                name: 'PLAZA DE TOROS, QRO. ',
                cp: '76187',
                lat: '20.574606',
                lon: '-100.405255',
                state: 'QUERETARO'
            },
            {
                id: 1084,
                address: 'MANZANA 18, LOTE 1-03 COL. SUPERMANZANA 51, ENTRE AV. TECNOLOGICO Y CHILAN-BALAM',
                name: 'NICHUPTE',
                cp: '77533',
                lat: '21.140579',
                lon: '-86.850101',
                state: 'QUINTANA ROO'
            },
            {
                id: 2384,
                address: 'AV. COBA MZA. 2 LOTE 2 SUPERMANZANA 21 DELEG. BENITO JUÁREZ',
                name: 'CANCUN I ',
                cp: '77500',
                lat: '21.153931',
                lon: '-86.834129',
                state: 'QUINTANA ROO'
            },
            {
                id: 3632,
                address: 'CALLE MAYAPAN NO. 511 ZONA (AV. ANDRÉS Q. ROO ESQ. OAXACTUN) INDUSTRIAL M. 4 L8 SM97',
                name: 'CANCUN II',
                cp: '77530',
                lat: '21.1473',
                lon: '-86.8621',
                state: 'QUINTANA ROO'
            },
            {
                id: 4549,
                address: 'BLVD. JIQUILPAN S/N COL. JARDINES DE FATIMA, MUNICIPIO AHOME',
                name: 'LOS MOCHIS',
                cp: '81226',
                lat: '25.8054',
                lon: '-108.991',
                state: 'SINALOA'
            },
            {
                id: 1016,
                address: 'CALLE 30 NO. 185, ENTRE CALLE 23 Y PERIFÉRICO, COL. SAN RAMÓN NORTE',
                name: 'MERIDA NORTE',
                cp: '97117',
                lat: '21.038576',
                lon: '-89.602532',
                state: 'YUCATAN'
            },
            {
                id: 2383,
                address: 'CALLE 56-A AV. PASEO DE MONTEJO  NO. 379 POR PEREZ PONCE COL. CENTRO',
                name: 'MERIDA',
                cp: '97000',
                lat: '20.98716',
                lon: '-89.616595',
                state: 'YUCATAN'
            },
            {
                id: 4048,
                address: 'CALLE 21 No. 371-A ENTRE CALLE 60 Y CALLE 62, COL. MIGUEL HIDALGO',
                name: 'MÉRIDA PENSIONES',
                cp: '97220',
                lat: '20.994517',
                lon: '-89.654245',
                state: 'YUCATAN'
            },
            {
                id: 4073,
                address: 'CALLE 33 NO. 200 INT. C ENTRE CALLE 44 Y CHICHI SUÁREZ, COL. FRACC. ITZIMNÁ 108',
                name: 'POLIGONO',
                cp: '97143',
                lat: '20.997999',
                lon: '-89.573711',
                state: 'YUCATAN'
            },
            {
                id: 1140,
                address: 'CALZADA CETYS NO. 1799, COL. RIVERA, ENTRE CALZADA CETYS Y CALZADA GOMEZ MORIN',
                name: 'PLAZA SAN PEDRO',
                cp: '21210',
                lat: '32.6564',
                lon: '-115.41277',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4026,
                address: 'BLVD. LAZARO CÁRDENAS #2200. COL. EL PORVENIR, ENTRE CALLE ESQ. HEROICO COLEGIO MILITAR.',
                name: 'GALERÍAS DEL VALLE',
                cp: '21220',
                lat: '32.62217',
                lon: '-115.506727',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4156,
                address: 'AV. AGUSTIN OLACHEA S/N ENTRE LAS CALLES CARRETERA TRANSPENINSULAR Y LIBRAMIENTO SUR, COLONIA EL ZACATAL',
                name: 'COLA DE BALLENA',
                cp: '2308',
                lat: '24.119469',
                lon: '-110.342518',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 1685,
                address: 'ISLA DE TRIS S/N ENTRE LAS CALLES 16 DE SEPTIEMBRE Y CRISTOBAL COLON',
                name: 'AEROPUERTO CAMPECHE (SEDE)',
                cp: '24611',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CAMPECHE'
            },
            {
                id: 4062,
                address: 'BLVD. MIGUEL DE LA MADRID NO. 17, ENTRE  BLVD. DE LA MADRID Y CALLE SANTO DOMINGO, COL. SALAHUA',
                name: 'MANZANILLO',
                cp: '28867',
                lat: '19.102499',
                lon: '-104.331596',
                state: 'COLIMA'
            },
            {
                id: 2302,
                address: 'PERIFÉRICO DE LA JUVENTUD NO. 2200 FRACC. HACIENDAS DEL VALLE',
                name: 'CHIHUAHUA',
                cp: '31238',
                lat: '28.634181',
                lon: '-106.119307',
                state: 'CHIHUAHUA'
            },
            {
                id: 3033,
                address: 'BLVD. JOSE FUENTES MARES #8820 COL. SECTOR RELOJ',
                name: 'FUENTES MARES',
                cp: '31064',
                lat: '28.619448',
                lon: '-106.027183',
                state: 'CHIHUAHUA'
            },
            {
                id: 5728,
                address: 'AV. VIALIDAD LOS NOGALES No. 2703 FRACC. COMERCIAL LOS NOGALES',
                name: 'NORTE 2000',
                cp: '31109',
                lat: '28.7282',
                lon: '-106.13',
                state: 'CHIHUAHUA'
            },
            {
                id: 1684,
                address: 'FERNANDO RIOS NERI NO.3, COL. CIUDAD DE LOS SERVICIOS C.P. 39075, CHILPANCINGO DE LOS BRAVOS, GUERRERO',
                name: 'CHILPANCINGO',
                cp: '39075',
                lat: 'NULL',
                lon: 'NULL',
                state: 'GUERRERO'
            },
            {
                id: 1045,
                address: 'AV. DOMINGO DIEZ NO. 727, COL. EMPLEADO',
                name: 'DOMINGO DIEZ',
                cp: '62250',
                lat: '18.956623',
                lon: '-99.237557',
                state: 'MORELOS'
            },
            {
                id: 2219,
                address: 'CARRETERA JOROBAS-TULA 03 38 MANZANA 125 NTE 1 CAMINO A SANTA TERESA',
                name: 'JOROBAS',
                cp: '54695',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 2735,
                address: 'AV. KAN TENAH  MZ 58 MZ 1  LOTE 6 ENTRE LAS CALLES ISLA CONTOY Y COBA',
                name: 'LA CRUZ (PLAYA DEL CARMEN)',
                cp: '77723',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 2839,
                address: 'CIRCUITO RAFAEL GUIZAR Y VALENCIA NO. 900 ESQ. CALLE ACCESO UNIVERSIDAD ANAHUAC',
                name: 'XALAPA SUR',
                cp: '91096',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 5727,
                address: 'CARRETERA FEDERAL CUERNAVACA-CUAUTLA KM 4.8 COL. CIVAC',
                name: 'JIUTEPEC',
                cp: '62571',
                lat: '18.9014',
                lon: '-99.175',
                state: 'MORELOS'
            },
            {
                id: 3895,
                address: 'AV. INSURGENTES NO. 1254 C.P. 63157, TEPIC, NAYARIT, COL. CIUDAD DEL VALLE',
                name: 'TEPIC',
                cp: '63157',
                lat: '21.491472',
                lon: '-104.881867',
                state: 'NAYARIT'
            },
            {
                id: 1622,
                address: 'AV. MANUEL GOMEZ MORIN # 940 ENTRE LAS CALLES PRIVADAS MA DE LOS ANGELES Y PASEO DE LA SIERRA',
                name: 'GOMEZ MORIN ',
                cp: '66250',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2044,
                address: 'AV. LAZARO CARDENAS NO.900 COL.VALLE ORIENTE',
                name: 'VALLE ORIENTE',
                cp: '66269',
                lat: '25.646858',
                lon: '-100.328745',
                state: 'NUEVO LEON'
            },
            {
                id: 1585,
                address: 'AV. TACHICHILTE NORTE NO. 1233 COL. ISLA DE MUSALA, ENTRE LAS CALLES AV. CANCUN Y AV. REVILLAGIGEDO',
                name: 'LA ISLA',
                cp: '80065',
                lat: '24.825111',
                lon: '-107.370675',
                state: 'SINALOA'
            },
            {
                id: 2379,
                address: 'AV.  REGIONAL #1330 V ETAPA PLAN PARCIAL PROYECTO 3 RÍOS',
                name: 'CULIACAN',
                cp: '80000',
                lat: '24.814118',
                lon: '-107.410299',
                state: 'SINALOA'
            },
            {
                id: 5700,
                address: 'AV. GRAL ALVARO OBREGON No. 2891 SUR FRACC. MONTEBELLO',
                name: 'MEXICO 68',
                cp: '80227',
                lat: '24.7785',
                lon: '-107.395',
                state: 'SINALOA'
            },
            {
                id: 1031,
                address: 'PROL. ANILLO PERIFERICO CARLOS PELLICER CAMARA NO. 701 COLONIA CARRIZAL, CALLE:CARRIZAL A 100 MTS DE SAM´S CLUB',
                name: 'TABASCO 2000',
                cp: '86038',
                lat: '17.98956196',
                lon: '-92.96680699',
                state: 'TABASCO'
            },
            {
                id: 2468,
                address: 'PROL. QUINTIN ARAUZ CARRILLO CASI ESQ. H. COLEGIO MILITAR COL. 1O. DE MAYO',
                name: 'CD. DEPORTIVA',
                cp: '86190',
                lat: '17.97758706',
                lon: '-92.94023964',
                state: 'TABASCO'
            },
            {
                id: 3894,
                address: 'BLVD. ADOLFO RUIZ CORTINEZ 496 COL. CASA BLANCA, ENTRE UNIVERSIDAD Y JAVIER MINA',
                name: 'VILLAHERMOSA 1',
                cp: '86060',
                lat: '18.00089105',
                lon: '-92.92583419',
                state: 'TABASCO'
            },
            {
                id: 3069,
                address: 'CARRETERA TRANSPENINSULAR CALLE SAN LUCAS- LA PAZ . KM. 2, COL. RESIDENCIAL COUNTRY CLUB C.P. 23463. CABO SAN LUCAS, B.C. SUR.',
                name: 'LOS CABOS',
                cp: '23463',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 4072,
                address: 'CARRETERA TAPACHULA-PUERTO MADERO KM 2.5 COL. LAS HORTENCIAS',
                name: 'TAPACHULA',
                cp: '30797',
                lat: '14.878094',
                lon: '-92.283545',
                state: 'CHIAPAS'
            },
            {
                id: 1623,
                address: 'BLVD. ING. JORGE DE JESUS CASTILLO CABRERA NO. 1020 ESQ. 16 DE SEPTIEMBRE, COL. LAS HUERTAS',
                name: 'CD. CUAUHTEMOC',
                cp: '31555',
                lat: '28.424758',
                lon: '-106.85106',
                state: 'CHIHUAHUA'
            },
            {
                id: 2091,
                address: 'CALLE EJE NORPONIENTE # 801, COL. LA PURISIMA',
                name: 'EL SAUZ',
                cp: '38130',
                lat: '20.546001',
                lon: '-100.840995',
                state: 'GUANAJUATO'
            },
            {
                id: 3031,
                address: 'PROLONGACIÓN AV. IRRIGACIÓN # 200 ENTRE VÍAS DEL FERROCARRIL Y VÍAS DE LA UNIÓN COL. VILLAS DE BENAVENTE',
                name: 'IRRIGACION',
                cp: '38034',
                lat: '20.536428',
                lon: '-100.797573',
                state: 'GUANAJUATO'
            },
            {
                id: 3061,
                address: 'BLVD. LUIS DONALDO COLOSIO MZ 1 FRACC. 1 NO. 2009, COL. EXHACIENDA COSCOTITLAN, C.P. 42064, PACHUCA DE SOTO HIDALGO.',
                name: 'COMBO PACHUCA',
                cp: '42064',
                lat: '20.094335',
                lon: '-98.757949',
                state: 'HIDALGO'
            },
            {
                id: 3856,
                address: 'AV. MEXICO 3300-F FRACCIONAMIENTO MONRAZ',
                name: 'PLAZA MEXICO',
                cp: '44690',
                lat: '20.67949',
                lon: '-103.403163',
                state: 'JALISCO'
            },
            {
                id: 3861,
                address: 'RAMON LOPEZ VELARDE NO. 821, SECTOR REFORMA',
                name: 'REVOLUCION',
                cp: '44400',
                lat: '20.649345',
                lon: '-103.309672',
                state: 'JALISCO'
            },
            {
                id: 4540,
                address: 'AV. CALZADA INDEPENDENCIA SUR NO. 916 COL. BARRAGÁN Y HERNÁNDEZ',
                name: '16 DE SEPTIEMBRE',
                cp: '44240',
                lat: '20.6647',
                lon: '-103.348',
                state: 'JALISCO'
            },
            {
                id: 3900,
                address: 'VIA JOSE LOPEZ PORTILLO No 100. COL. ZACACUITLA',
                name: 'COACALCO',
                cp: '55710',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4018,
                address: 'VÍA JOSÉ LÓPEZ PORTILLO No. 2 COL. SAN FRANCISCO COACALCO',
                name: 'SANTA MARÍA COACALCO',
                cp: '55712',
                lat: '19.629739',
                lon: '-99.124619',
                state: 'MEXICO'
            },
            {
                id: 1027,
                address: 'AV. RAUL SALINAS LOZANO  # 1001 SUR COL. HACIENDAS DE ANAHUAC, ENTRE SENDEO DIVISORIO Y RAUL SALINAS (OFICIAL)',
                name: 'SENDERO',
                cp: '66055',
                lat: '25.765486',
                lon: '-100.31687',
                state: 'NUEVO LEON'
            },
            {
                id: 2090,
                address: 'BLVD. ATLIXCAYOTL No.1504 COL. GEO VILLAS ATLIXCAYOTL',
                name: 'ANGELÓPOLIS',
                cp: '72197',
                lat: '19.024579',
                lon: '-98.241651',
                state: 'PUEBLA'
            },
            {
                id: 2732,
                address: '9 SUR NO. 11301 ESQ. 113 PONIENTE LATERAL DE PERIFERICO ECOLOGICO',
                name: 'HOSPITAL GENERAL',
                cp: '72490',
                lat: 'NULL',
                lon: 'NULL',
                state: 'PUEBLA'
            },
            {
                id: 3853,
                address: 'DIAGONAL IGNACIO  ZARAGOZA NO. 1404 COL. SAN MANUEL',
                name: 'SAN MANUEL',
                cp: '72570',
                lat: '19.021534',
                lon: '-98.198614',
                state: 'PUEBLA'
            },
            {
                id: 3864,
                address: 'AV. PROLONGACION REFORMA SUR NO. 3117  COL. LA PAZ',
                name: ' REFORMA',
                cp: '72160',
                lat: '19.058286',
                lon: '-98.224409',
                state: 'PUEBLA'
            },
            {
                id: 3886,
                address: 'BLVD. ATLIXCO NO. 3304  COL. NUEVA ANTEQUERA',
                name: 'LAS ANIMAS',
                cp: '72180',
                lat: '19.044231',
                lon: '-98.237395',
                state: 'PUEBLA'
            },
            {
                id: 2080,
                address: 'AV. DE LAS AMERICAS NO. 302, FRACCIONAMIENTO ARBOLEDAS',
                name: 'MATEHUALA (ARBOLEDAS)',
                cp: '78760',
                lat: '23.656775',
                lon: '-100.635622',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 4025,
                address: 'BLVD. ADOLFO LOPEZ MATEOS No. 301 ENTRE LAS CALLES HAITI Y EJERCIRO MEXICANO, COL. RICARDO FLORES MAGON',
                name: 'CIUDAD MADERO',
                cp: '89460',
                lat: '22.253012',
                lon: '-97.853006',
                state: 'TAMAULIPAS'
            },
            {
                id: 2463,
                address: 'AV. VIVEROS NO. 280 FRACC. JARDINES DE VIRGINIA BOCA DEL RÍO VERACRUZ',
                name: 'VERACRUZ',
                cp: '94298',
                lat: '19.155669',
                lon: '-96.111625',
                state: 'VERACRUZ'
            },
            {
                id: 4546,
                address: 'AV. FCO. GARCIA SALINAS NO. 203    FRACC. CLUB CAMPESTRE',
                name: 'ZACATECAS',
                cp: '98064',
                lat: '22.7622',
                lon: '-102.551',
                state: 'ZACATECAS'
            },
            {
                id: 2023,
                address: 'BLVD. INSURGENTES No. 18015 COL. RIO TIJUANA TERCERA ETAPA DELEGACIÓN LA MESA  LOTE  1  MANZANA 15',
                name: 'MACRO PLAZA INSURGENTES',
                cp: '22226',
                lat: '32.493202',
                lon: '-116.931174',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 2304,
                address: 'BOULEVARD LÁZARO CÁRDENAS NO. 1801 COL. EX-EJIDO ZACATECAS',
                name: 'MEXICALI',
                cp: '22360',
                lat: '32.621947',
                lon: '-115.456294',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4011,
                address: 'AGUA CALIENTE # 11999 ESQ. PASEO DE LAS AMERICAS, COL. HIPODROMO AGUACALIENTE',
                name: 'TIJUANA HIPODROMO',
                cp: '22024',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4155,
                address: 'CORREDOR TIJUANA-ROSARITO 2000 NO. 819, ESQ. BLVD CASA BLANCA, COL. EJIDO FCO. VILLA',
                name: 'TIJUANA 2000',
                cp: '22235',
                lat: '32.496995',
                lon: '-116.833073',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4187,
                address: 'CARRETERA LIBRE TIJUANA-ENSENADA No. 300, COL. REFORMA, C.P. 22710. PLAYAS DE ROSARITO, BAJA CALIFORNIA NORTE',
                name: 'PLAYAS DE ROSARITO',
                cp: '22710',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 2765,
                address: 'VALERIO GONZALEZ CANSECO #137 CLUB DE GOLF FONATUR ENTRE BLVD. MAURICIO CASTRO  ',
                name: 'SAN JOSE DEL CABO',
                cp: '23400',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 1007,
                address: 'AV. MADERO NO. 227 COL. CENTRO',
                name: 'MONCLOVA',
                cp: '25700',
                lat: '26.907603',
                lon: '-101.42402',
                state: 'COAHUILA'
            },
            {
                id: 1624,
                address: 'BLVD. DE LAS FEDERACIONES KM 1260.5 NO. 4021, COL. CHICHIMA ACAPETAHUA C.P. 30093, COMITAN DE DOMINGUEZ CHIS',
                name: 'COMITAN DE DOMINGUEZ',
                cp: '30093',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIAPAS'
            },
            {
                id: 1130,
                address: 'BLVAD BELISARIO DOMIGUEZ  2058 FRACC LAS ARBOLEDAS, ENTRE 19APTE Y 20 PTE',
                name: 'BELISARIO DOMINGUEZ',
                cp: '29030',
                lat: '16.754279',
                lon: '-93.13801',
                state: 'CHIAPAS'
            },
            {
                id: 3127,
                address: 'BLVD. SALOMON GONZALEZ BLANCO # 4350 ENTRE CALLE 1 Y CALLE 3',
                name: 'LIBRAMIENTO NORTE',
                cp: '29045',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIAPAS'
            },
            {
                id: 1138,
                address: 'AV. TECNOLOGICO NO. 2 COL. NUEVO TERRAZAS, ENTRE AV. TECNOLOGICO Y PATIO DEL FERROCARRIL',
                name: 'DELICIAS',
                cp: '33020',
                lat: '28.199543',
                lon: '-105.464592',
                state: 'CHIHUAHUA'
            },
            {
                id: 1044,
                address: 'AV. CHALMA NO. 281 COL. JARDINES DE LA HACIENDA',
                name: 'SAN MARCOS IZCALLI',
                cp: '54720',
                lat: '19.670907',
                lon: '-99.2021',
                state: 'MEXICO'
            },
            {
                id: 4154,
                address: 'AUTOPISTA MEXICO-QUERETARO KM 30.2 ENTRE LAS CALLES AV, CENTRAL Y CARRETERA CUAUTITLAN TLANEPANTLA',
                name: 'PERINORTE (ANTES SILOS)',
                cp: '54763',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4157,
                address: 'AUT. MÉXICO-QUERÉTARO KM.  36.5 LTE. 1 COL. PARQUE INDUSTRIAL CUAMATLA',
                name: 'PERIFERICO CUAUTITLAN',
                cp: '54730',
                lat: '19.645359',
                lon: '-99.194593',
                state: 'MEXICO'
            },
            {
                id: 1833,
                address: 'AV. ELOY CAVAZOS NO. 2051, ENTRE PABLO LIVAS Y LAS QUINTAS, COL. LA QUINTA',
                name: 'CERRO DE LA SILLA',
                cp: '67170',
                lat: '25.665384',
                lon: '-100.240967',
                state: 'NUEVO LEON'
            },
            {
                id: 2076,
                address: 'AV. BONIFACIO SALINAS NO. 5000 COL. TORRES LINDAVISTA',
                name: 'MIGUEL ALEMAN',
                cp: '67130',
                lat: '25.691993',
                lon: '-100.23922',
                state: 'NUEVO LEON'
            },
            {
                id: 3800,
                address: 'CARRETERA MONTERREY-REYNOSA KM 7.6 COL. SAN SEBASTIAN',
                name: 'GUADALUPE',
                cp: '67198',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 4548,
                address: 'AV. ELOY CAVAZOS NO. 5200 COL. RESIDENCIAL SAN EDUARDO',
                name: 'ELOY CAVAZOS',
                cp: '67183',
                lat: '25.6528',
                lon: '-100.21',
                state: 'NUEVO LEON'
            },
            {
                id: 2840,
                address: 'INSURGENTES # 41 ENTRE LAS CALLES UNIVERSIDAD Y BENJAMIN HILL',
                name: 'INSURGENTES CHETUMAL',
                cp: '77018',
                lat: 'NULL',
                lon: 'NULL',
                state: 'QUINTANA ROO'
            },
            {
                id: 1727,
                address: 'PASEO A MIGUEL LEYSÓN PÉREZ S/N COL. EJIDAL, ENTRE LAS CALLES PLUTARCO ELIAS CALLES Y LÁZARO CÁRDENAS',
                name: 'GUASAVE',
                cp: '81020',
                lat: '25.580842',
                lon: '-108.474912',
                state: 'SINALOA'
            },
            {
                id: 2380,
                address: 'CARRETERA INTERNACIONAL NO. 1073 FRACC. REAL DEL SOL MUNICIPIO MUNICIPIO DE CAJEME',
                name: 'CD. OBREGON',
                cp: '85050',
                lat: '27.514796',
                lon: '-109.928431',
                state: 'SONORA'
            },
            {
                id: 1170,
                address: 'AV. TECNOLOGICO #31 ESQ. ACACIAS',
                name: 'PARRAL',
                cp: '33855',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIHUAHUA'
            },
            {
                id: 3005,
                address: 'AV. CENTRAL No 120, LOCAL 62 AL 68 Y 118, COL CD. AZTECA 3RA. SECCION',
                name: 'PLAZA ARAGON',
                cp: '55280',
                lat: '19.531808',
                lon: '-99.027838',
                state: 'MEXICO'
            },
            {
                id: 5765,
                address: 'AV. CENTRAL ESQ. AV. 1° DE MAYO, MZ 04 LT. 01 COL. LAS AMERICAS',
                name: 'LAS AMERICAS',
                cp: '55459',
                lat: '19.589555',
                lon: '-99.020203',
                state: 'MEXICO'
            },
            {
                id: 2074,
                address: 'CARRETERA 57 S/N , ESQ. CALLE ROMA, FRACCIONAMIENTO PROVIDENCIA',
                name: 'CARRETERA 57',
                cp: '78390',
                lat: '22.137874',
                lon: '-100.934738',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 2075,
                address: 'CALLE MUÑOZ NO. 400, BARRIO LOMAS DE SANTIAGO',
                name: 'MUÑOZ',
                cp: '78165',
                lat: '22.165603',
                lon: '-100.999937',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 2431,
                address: 'AV. DR. SALVADOR NAVA NO. 3135 COL. COLINAS DEL PARQUE SAN LUIS POTOSÍ',
                name: 'SAN LUS POTOSI',
                cp: '78110',
                lat: '22.138098',
                lon: '-101.001973',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 3718,
                address: 'CARRETERA INTERNACIONAL NO. 2017, COLONIA HACIENDA DEL MAR',
                name: 'EJERCITO MEXICANO',
                cp: '82128',
                lat: '23.2443',
                lon: '-106.423',
                state: 'SINALOA'
            },
            {
                id: 3719,
                address: 'BLVD. MANUEL CAVAZOS LERMA NO. 85 COL. PASEO RESIDENCIAL',
                name: 'MATAMOROS',
                cp: '87380',
                lat: '25.8599',
                lon: '-97.5195',
                state: 'TAMAULIPAS'
            },
            {
                id: 2049,
                address: 'BLVD. ZARAGOZA NO. 6008, COL. PARQUE INDUTRIAL ZARAGOZA',
                name: 'AV. ZARAGOZA',
                cp: '32685',
                lat: '31.658076',
                lon: '-106.441567',
                state: 'CHIHUAHUA'
            },
            {
                id: 2089,
                address: 'PASEO DEL TRIUNFO DE LA REPUBLICA NO. 4630, COLONIA BUROCRATA 2DA SECCION',
                name: 'PLAZA MONUMENTAL',
                cp: '32340',
                lat: '31.73636',
                lon: '-106.444343',
                state: 'CHIHUAHUA'
            },
            {
                id: 2377,
                address: 'AV. EJÉRCITO NACIONAL NO. 7445 COL. PARTIDO IGLESIAS',
                name: 'CD. JUAREZ',
                cp: '38618',
                lat: '31.704352',
                lon: '-106.417013',
                state: 'CHIHUAHUA'
            },
            {
                id: 5764,
                address: 'AV. DE LAS TORRES NO. 1571 COL. PARQUE IND. ANTONIO J. BERMUDEZ',
                name: 'TORRES DEL SUR',
                cp: '32470',
                lat: '31.634',
                lon: '-106.393',
                state: 'CHIHUAHUA'
            },
            {
                id: 1015,
                address: 'PASEO IRAPUATO N. 1209 COL. PRIMERA SAN GABRIEL',
                name: 'IRAPUATO',
                cp: '36690',
                lat: '20.68413',
                lon: '-101.366408',
                state: 'GUANAJUATO'
            },
            {
                id: 1550,
                address: 'AV. FCO. VILLA NO. 1526 ESQ. AV. GONZALEZ GALLO, COL. LOS SAUCES',
                name: 'MACRO PLAZA VALLARTA',
                cp: '48328',
                lat: '20.64375',
                lon: '-105.216201',
                state: 'JALISCO'
            },
            {
                id: 3747,
                address: 'FRANCISCO MEDINA ASCENCIO NO. 2900, COL. LA AURORA',
                name: 'EL PITILLAL',
                cp: '48290',
                lat: '20.6571',
                lon: '-105.238',
                state: 'JALISCO'
            },
            {
                id: 2382,
                address: 'BLVD. MAGNOCENTRO NO. 35, LOTE 1, MANZANA II, COL  BOSQUES DE LAS PALMAS',
                name: 'INTERLOMAS',
                cp: '52787',
                lat: '19.406075',
                lon: '-99.272184',
                state: 'MEXICO'
            },
            {
                id: 2381,
                address: 'CALZ. LA HUERTA NO. 3000 COL EXHACIENDA LA HUERTA',
                name: 'MORELIA',
                cp: '58090',
                lat: '19.679555',
                lon: '-101.22082',
                state: 'MICHOACAN'
            },
            {
                id: 4036,
                address: 'CARRETERA INTERNACIONAL MEXICO-NOGALES KM 1982 #1400, ENTRE LAS CALLES DE LA DIANA CAZADORA Y ELECTRA COL. LOMA LINDA',
                name: 'GUAYMAS',
                cp: '85420',
                lat: 'NULL',
                lon: 'NULL',
                state: 'SONORA'
            },
            {
                id: 3091,
                address: 'REFORMA #5601 FRACC CENTRO COMERCIAL REFORMA',
                name: 'AVE. REFORMA',
                cp: '88240',
                lat: '27.450265',
                lon: '-99.517319',
                state: 'TAMAULIPAS'
            },
            {
                id: 4024,
                address: 'AV UNIVERSIDAD VERACRUZANA 2329 COL. RANCHO ALEGRE 2',
                name: 'AVE. UNIVERSIDAD',
                cp: '96558',
                lat: '18.141277',
                lon: '-94.472211',
                state: 'VERACRUZ'
            },
            {
                id: 1195,
                address: 'BLVD. JUAN ALONSO DE TORRES NO. 1325 COL. SAN JOSE DEL CONSUELO',
                name: 'GALERIAS LAS TORRES',
                cp: '37178',
                lat: '21.146147',
                lon: '-101.648622',
                state: 'GUANAJUATO'
            },
            {
                id: 2433,
                address: 'BLVD. JUAN JOSÉ TORRES LANDA ORIENTE N. 1601 COL. FRACCIÓN DE PREDIO EL TLACUACHE',
                name: 'TORRES LANDA',
                cp: '37500',
                lat: '21.098693',
                lon: '-101.65804',
                state: 'GUANAJUATO'
            },
            {
                id: 3745,
                address: 'BLVD. MANUEL J. CLOUTHIER NO. 302 COL. PREDIO RUSTICO CERRO GORDO',
                name: 'CLOUTHIER',
                cp: '37125',
                lat: '21.1615',
                lon: '-101.691',
                state: 'GUANAJUATO'
            },
            {
                id: 2034,
                address: 'AV. EUGENIO GARZA SADA NO.1061 COL. LAS BRISAS',
                name: 'LAS TORRES',
                cp: '64780',
                lat: '25.617672',
                lon: '-100.273371',
                state: 'NUEVO LEON'
            },
            {
                id: 3051,
                address: 'CALLE VICENTE GUERRERO NO. 2500',
                name: 'PLAZA CENTRIKA',
                cp: '64520',
                lat: '25.702928',
                lon: '-100.308723',
                state: 'NUEVO LEON'
            },
            {
                id: 3720,
                address: 'AV. ABRAHAM LINCOLN No. 5400 COL. RINCON DE STA. CECILIA',
                name: 'LINCOLN ',
                cp: '64117',
                lat: '25.730312',
                lon: '-100.369439',
                state: 'NUEVO LEON'
            },
            {
                id: 4137,
                address: 'AV. CHAPULTEPEC NO. 1836, ENTRE AGUSTIN LARA Y FCO. VILLA, COL. BUENOS AIRES',
                name: 'CHAPULTEPEC MONTERREY',
                cp: '64800',
                lat: '25.665921',
                lon: '-100.279315',
                state: 'NUEVO LEON'
            },
            {
                id: 2303,
                address: 'PASEO RÍO SONORA SUR  NO. 37 L-A  FRACC. PROYECTO RÍO SONORA',
                name: 'HERMOSILLO',
                cp: '83289',
                lat: '29.067791',
                lon: '-110.968679',
                state: 'SONORA'
            },
            {
                id: 3030,
                address: 'BOULEVARD JOSÉ MARÍA MORELOS No. 355, COL. ZONA MILITAR CUARTEL  XV',
                name: 'BLVD. MORELOS',
                cp: '83145',
                lat: '29.123131',
                lon: '-110.950843',
                state: 'SONORA'
            },
            {
                id: 3746,
                address: 'BLVD. SOLIDARIDAD Y AV. TECNOLOLGICO #116 ESQ. COL. SAHUARO',
                name: 'SOLIDARIDAD',
                cp: '83170',
                lat: '29.0979',
                lon: '-110.994',
                state: 'SONORA'
            },
            {
                id: 1404,
                address: 'BOULEVARD NAZARIO ORTIZ GARZA NO. 2345, COL. TANQUE DE PEÑA, ENTRE AV. LOPEZ MATEOS Y PISA',
                name: 'GALERIAS SALTILLO',
                cp: '25000',
                lat: '25.456387',
                lon: '-100.977747',
                state: 'COAHUILA'
            },
            {
                id: 2465,
                address: 'PASEO DE LA REFORMA NO. 1690 COL. PROVIVIENDA, SALTILLO COAHUILA',
                name: 'SALTILLO',
                cp: '25020',
                lat: '25.426126',
                lon: '-100.971397',
                state: 'COAHUILA'
            },
            {
                id: 3790,
                address: 'LEONA VICARIO NO. 502, COL LA PURISIMA',
                name: 'METEPEC',
                cp: '52840',
                lat: '19.255896',
                lon: '-99.619344',
                state: 'MEXICO'
            },
            {
                id: 1022,
                address: 'AV. PROLONGACION LOPEZ MATEOS SUR 1501, COL. FRACC. LA TIJERA',
                name: 'LOPEZ MATEOS',
                cp: '45600',
                lat: '20.586513',
                lon: '-103.444844',
                state: 'JALISCO'
            },
            {
                id: 1119,
                address: 'PERIFERICO SUR  N° 7835, COL. STA MARIA TEQUEPEXPAN',
                name: 'COLÓN',
                cp: '45601',
                lat: '20.604597',
                lon: '-103.400453',
                state: 'JALISCO'
            },
            {
                id: 1032,
                address: 'SUPER CARRETERA LOMAS VERDES No. 1200 VI SECCIÓN LOMAS VERDES',
                name: 'LOMAS VERDES',
                cp: '53120',
                lat: '19.514963',
                lon: '-99.266341',
                state: 'MEXICO'
            },
            {
                id: 3847,
                address: 'CIRCUITO 19 METALURGISTAS NO. 2 CD. SATELITE',
                name: 'SATELITE',
                cp: '53100',
                lat: '19.515508',
                lon: '-99.23111',
                state: 'MEXICO'
            },
            {
                id: 3850,
                address: 'EMILIANO ZAPATA NO 7  COL. SANTA MARÍA NATIVITAS',
                name: 'ECHEGARAY',
                cp: '5320',
                lat: '19.484559',
                lon: '-99.232549',
                state: 'MEXICO'
            },
            {
                id: 3854,
                address: 'BLVD. MANUEL AVILA CAMACHO NO. 2550  FRACC. LOS PIRULES',
                name: 'PIRULES',
                cp: '54050',
                lat: '19.543053',
                lon: '-99.213826',
                state: 'MEXICO'
            },
            {
                id: 2050,
                address: 'BLVD. INDUSTRIAL N.o. 1241 ENTRE PIZÓN Y VERACRUZ COL. VILLA URUAPAN',
                name: 'URUAPAN',
                cp: '60120',
                lat: '19.423123',
                lon: '-102.031998',
                state: 'MICHOACAN'
            },
            {
                id: 2179,
                address: 'AV. SENDERO DIVISORIO # 200 ENTRE REP. MEXICANA Y SENDERO ANAHUAC',
                name: 'SAN NICOLAS',
                cp: '66417',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2676,
                address: 'AV. ROMULO GARZA NO. 256 COL. MIGUEL ALEMAN',
                name: 'LA FE',
                cp: '66470',
                lat: '25.7229',
                lon: '-100.221',
                state: 'NUEVO LEON'
            },
            {
                id: 1686,
                address: 'AV. JUAN GIL PRECIADO # 1544 ENTRE LAS CALLES A LA CIMA Y ARCO ESCOCES',
                name: 'LA CIMA',
                cp: '45130',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 2342,
                address: 'AV. VALLARTA NO. 5455  VALLARTA C.P.45030 FRACC.LA ESTANCIA',
                name: 'VALLARTA',
                cp: '45030',
                lat: '20.678212',
                lon: '-103.432686',
                state: 'JALISCO'
            },
            {
                id: 3721,
                address: 'MANUEL AVILA CAMACHO NO. 2770 FRACCIONAMIENTO SEATLE',
                name: 'AVILA CAMACHO',
                cp: '45150',
                lat: '20.7138',
                lon: '-103.375',
                state: 'JALISCO'
            },
            {
                id: 3878,
                address: 'AV. NIÑO OBRERO NO. 1551, COL. CHAPALITA',
                name: 'NIÑO OBRERO',
                cp: '45050',
                lat: '20.666793',
                lon: '-103.409505',
                state: 'JALISCO'
            },
            {
                id: 4012,
                address: 'LABNÁ NO. 1437 ENTRE AV. PATRIA Y AV. MOCTEZUMA, COL. ANEXO A JARDINES DEL SOL',
                name: 'JARDINES DEL SOL',
                cp: '45050',
                lat: '20.648618',
                lon: '-103.419695',
                state: 'JALISCO'
            },
            {
                id: 4071,
                address: 'PASEO ROYAL COUNTRY #455 ENTRE LAS CALLES AV. PATRIA Y PASEO DE LOS VIRREYES',
                name: 'PATRIA',
                cp: '45116',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 2079,
                address: 'AV. BORDO DE XOCHIACA No. 3 Lt -A2  COL. BENITO JUÁREZ',
                name: 'CD. JARDIN',
                cp: '50000',
                lat: '19.427394',
                lon: '-99.028602',
                state: 'MEXICO'
            },
            {
                id: 1139,
                address: 'AV. INDUSTRIALES DEL PONIENTE NÚMERO 1050, AL ORIENTE DEL FRACCIONAMIENTO BOSQUES DEL PONIENTE C.P. 66362, MUNICIPIO DE SANTA CATARINA, NUEVO LEÓN',
                name: 'LA HUASTECA',
                cp: '66362',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2042,
                address: 'BOULEVARD  EL GRECO NO.47 COLONIA EL GRECO ENTRE BOULEVARD LUIS DONALDO COLOSIO Y ARCADIA NOGALES  ',
                name: 'NOGALES "EL GRECO"',
                cp: '84066',
                lat: '31.28862',
                lon: '-110.941423',
                state: 'SONORA'
            },
            {
                id: 1902,
                address: 'AV. HIDALGO NO. 6904, ENTRE LAS CALLES RIVERA DE CHAMPAYAN Y COLIMA, COL. MEXICO',
                name: 'AEROPUERTO TAMPICO',
                cp: '89348',
                lat: '22.298754',
                lon: '-97.878833',
                state: 'TAMAULIPAS'
            },
            {
                id: 2378,
                address: 'AV. HIDALGO NO.5100 COL. LOMAS DE ROSALES',
                name: 'TAMPICO',
                cp: '89100',
                lat: '22.270868',
                lon: '-97.873066',
                state: 'TAMAULIPAS'
            },
            {
                id: 3893,
                address: 'AV. LAZARO CARDENAS NO. 406  COL. JARDINES DE JALAPA',
                name: 'JALAPA',
                cp: '91179',
                lat: '19.54138',
                lon: '-96.907388',
                state: 'VERACRUZ'
            },
            {
                id: 2375,
                address: 'BOULEVARD DIAGONAL REFORMA NO. 2220 COL. ABASTOS',
                name: 'TORREON',
                cp: '27040',
                lat: '25.551811',
                lon: '-103.423886',
                state: 'COAHUILA'
            },
            {
                id: 3622,
                address: 'BLVD. RODRIGUEZ TRIANA Y  PROL. DIAGONAL LAS FUENTES  COL. LOS CEDROS TORREON COAHUILA',
                name: 'LA ROSITA ',
                cp: '27295',
                lat: '25.5075',
                lon: '-103.397',
                state: 'COAHUILA'
            },
            {
                id: 2734,
                address: 'CALZADA ZAMORA JACONA #1900 ENTRE LAS CALLES VIRREY DE MENDOZA Y RIO NUEVO COL, LA NUEVA LUNETA',
                name: 'PLAZA ANA',
                cp: '59689',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MICHOACAN'
            },
            {
                id: 3630,
                address: 'BLVD. ADOLFO LÓPEZ MATEOS NO. 150 COL. UNIDAD HAB. FIDEL VELAZQUEZ C.P. 87049 CD. VICTORIA TAMAULIPAS',
                name: 'LAS ADELITAS',
                cp: '87049',
                lat: '23.754',
                lon: '-99.1573',
                state: 'TAMAULIPAS'
            },
            {
                id: 3113,
                address: 'AV. RIO NILO # 7377 ESQ. MALECON',
                name: 'NILO',
                cp: '45403',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 3631,
                address: 'AV. RÍO NILO NO. 8096 COL. LOMA DORADA. TONALÁ, JALISCO',
                name: 'TONALA',
                cp: '45418',
                lat: '20.629',
                lon: '-103.257',
                state: 'JALISCO'
            },
            {
                id: 1171,
                address: 'CARRETERA FEDERAL MÉXICO - PACHUCA  KM  36.5   COL. HUEYOTENCO',
                name: 'SAN JOSÉ TECAMAC',
                cp: '55741',
                lat: '19.696403',
                lon: '-98.981644',
                state: 'MEXICO'
            },
            {
                id: 3016,
                address: 'BOSQUES DEL ESTADO DE MEXICO NO. 2 LOTE 1, COL. LOS HEROES TECAMAC, C.P. 55764 TECAMAC EDO. DE MEXICO',
                name: 'MACRO PLAZA HEROES TECAMAC',
                cp: '55764',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 2041,
                address: 'AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN',
                name: 'TOLTECAS',
                cp: '54030',
                lat: '19.55447',
                lon: '-99.193383',
                state: 'MEXICO'
            },
            {
                id: 1169,
                address: 'AUTOPISTA  MEXICO-QUERETARO No. 3985 COL. CENTRO INDUSTRIAL TLALNEPANTLA',
                name: 'MULTIPLAZA ARBOLEDAS',
                cp: '54030',
                lat: '19.546383',
                lon: '-99.209208',
                state: 'MEXICO'
            },
            {
                id: 4191,
                address: 'LAGO DE GPE S/N LOTE 2 LOCAL SA03 COL. SAN PEDRO BARRIENTOS 54010 TLANEPANTLA DE BAZ',
                name: 'LAGO DE GUADALUPE',
                cp: '54010',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4120,
                address: 'CARRETERA POZA RICA-CAZONES # 4706 COLONIA LA RUEDA',
                name: 'POZA RICA',
                cp: '93306',
                lat: '20.5686',
                lon: '-97.435947',
                state: 'VERACRUZ'
            },
            {
                id: 2218,
                address: 'CARRETERA TUXPAN-TAMPICO #88 ENTRE LAS CALLES EL MANGUITO Y CAMINO A JUANA MOZA COL. LAS GRANJAS',
                name: 'TUXPAN',
                cp: '92894',
                lat: 'NULL',
                lon: 'NULL',
                state: 'VERACRUZ'
            },
            {
                id: 1423,
                address: 'CARRETERA CUAUTITLAN-TULTEPEC NO. 2 COL. TERREMOTO, ENTRE LAS CALLES SANTA LUCIA Y CAMINO VIEJO EL QUEMADO',
                name: 'SANTA ELENA',
                cp: '54850',
                lat: '19.676727',
                lon: '-99.148361',
                state: 'MEXICO'
            },
            {
                id: 1107,
                address: 'CARRETERA MEXICO- CUAUTLA LOCALES 3A Y 3B S/N, ENTRE LA ESPINITA E IXTAPALUCA',
                name: 'IXTAPALUCA',
                cp: '56530',
                lat: '19.310338',
                lon: '-98.900392',
                state: 'MEXICO'
            },
            {
                id: 1489,
                address: 'HIDALGO NO. 300, COL. STA. CRUZ DE ARRIBA, ENTRE LAS CALLES CAMINO ALMOLINO DE LAS FLORES Y LIBERTAD',
                name: 'HIPERPLAZA TEXCOCO',
                cp: '56120',
                lat: '19.514789',
                lon: '-98.86847',
                state: 'MEXICO'
            },
            {
                id: 1462,
                address: 'RIO LERMA NO. 5 COL. LA MERCED LERMA, ENTRE LAS CALLES DE MORELOS Y EL CALVARIO ',
                name: 'LERMA TOLUCA',
                cp: '52006',
                lat: '19.282224',
                lon: '-99.497056',
                state: 'MEXICO'
            },
            {
                id: 2343,
                address: 'PASEO TOLLOCAN NO. 600 COL. SECTOR PROGRESO',
                name: 'TOLUCA',
                cp: '50150',
                lat: '19.281266',
                lon: '-99.639775',
                state: 'MEXICO'
            },
            {
                id: 5702,
                address: 'VIALIDAD TOLUCA-NAUCALPAN NO. 1101, SAN MATEO OTZACATIPAN',
                name: 'SANTIN',
                cp: '50200',
                lat: '19.350382',
                lon: '-99.591289',
                state: 'MEXICO'
            },
            {
                id: 5791,
                address: 'BOULEVARD ADOLFO LÓPEZ MATEOS NO. 117 COL. OJUELOS ZINACANTEPEC',
                name: 'ZINACANTEPEC',
                cp: '51350',
                lat: '19.286835',
                lon: '-99.699696',
                state: 'MEXICO'
            },
            {
                id: 5825,
                address: 'BOULEVARD ALFREDO DEL MAZO NO. 503 COL. JARDINES DE TLACOPA',
                name: 'ALFREDO DEL MAZO',
                cp: '50071',
                lat: '19.3098',
                lon: '-99.6351',
                state: 'MEXICO'
            },
            {
                id: 1683,
                address: 'CARRETERA FEDERAL MEXICO -CUAULA # 166 ESQ. CARRETERA A CHALCO-SANTA MARIA HUEXOCULCO',
                name: 'VICENTE GUERRERO',
                cp: '56600',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4138,
                address: 'CARRETERA A REYNOSA NO. 1800, ENTRE AV. LAS TORRES Y CALLE 21 DE MARZO, COL. PASEOS DEL PRADO',
                name: 'VILLA JUAREZ',
                cp: '67250',
                lat: '25.6541',
                lon: '-100.124811',
                state: 'NUEVO LEON'
            },
            {
                id: 3909,
                address: 'BOULERVARD CORDOBA FORTIN NO. 4027 COL. SANTA LETICIA',
                name: 'CORDOBA',
                cp: '94470',
                lat: 'NULL',
                lon: 'NULL',
                state: 'VERACRUZ'
            },
            {
                id: 1403,
                address: 'CARRETERA CHAPALA - AJIJIC NO. 20 COL. SAN ANTONIO TLAYACAPAN, FRENTE AL LIBRAMIENTO A AJIJIC',
                name: 'CHAPALA',
                cp: '45915',
                lat: '20.298686',
                lon: '-103.242266',
                state: 'JALISCO'
            },
            {
                id: 1724,
                address: 'CARRETERA ZUMPANGO LOS REYES S/N COL. BUENAVISTA, ENTRE LAS CALLES DE LOS PINOS Y PIRINEOS',
                name: 'LOS REYES',
                cp: '55635',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4109,
                address: 'CARRETERA FEDERAL MEXICO TEXCOCO KM 30.5   COL. SANTIAGO CUAUTLALPAN',
                name: 'PUERTA TEXCOCO',
                cp: '56259',
                lat: '19.425361',
                lon: '-98.912401',
                state: 'MEXICO'
            },
            {
                id: 4090,
                address: 'CAMINO REAL TETELCINGO CALDERÓN NO. 23,  ENTRE BARRANCA TEZAHUAPAN Y AUTOPISTA CUAUTLA - OAXTEPEC, COL. TIERRA LARGA',
                name: 'LOS ATRIOS CUAUTLA',
                cp: '62751',
                lat: '18.859225',
                lon: '-98.944197',
                state: 'MORELOS'
            },
            {
                id: 1425,
                address: 'AV. TEPIC NO. 430, COL. VALLE DORADO, ENTRE AV. RINCON DEL CIELO Y VALLE DE MEXICO',
                name: 'BAHIA DE BANDERAS',
                cp: '63732',
                lat: '20.712643',
                lon: '-105.274239',
                state: 'NAYARIT'
            },
            {
                id: 1003,
                address: 'REGION 01, MANZANA 040, LOTE 001-1 S/N, SOL. CENTRO',
                name: 'PLAYA DEL CARMEN',
                cp: '77710',
                lat: '20.627901',
                lon: '-87.074518',
                state: 'QUINTANA ROO'
            },
            {
                id: 2731,
                address: 'CARRETERA APIZACO - PUEBLA NO. 3 ENTRE LAS CALLES DE IGNACIO ZARAGOZA Y REFORMA',
                name: 'EL MOLINITO',
                cp: '90610',
                lat: 'NULL',
                lon: 'NULL',
                state: 'TLAXCALA'
            }
        ],
        buildStores: function() {
            var _this = this;
            var options = this.stores.map(function(val, key) {
                if (_this.props.state.cp) {
                    var cp = _this.props.state.cp.trim();
                }
                //return div({ className: _this.props.state.selectedStore.trim() === val.store.toLowerCase().trim() ? 'option active' : 'option' }, val.name)
                return cp == val.cp ? div({ className: 'option' },
                    span({ className: 'name' }, val.name),
                    span({ className: 'cp' }, 'C.P. ', val.cp),
                    div({ className: 'direccion' }, val.address)
                ) : null
            })
            return div({ className: 'listStores' },
                h1({ className: 'titleStores' }, 'Dime quieres "recoger en tienda" o "servicio a domicilio"!'), options,

                //_this.props.state.cp != 0 ? h1({ className: 'store' }, 'Di el nombre de la tienda seguido de la palabra "tienda" para! para seleccionarla') : null
            )
        },
        render: function() {
            return this.props.state.accept ? this.buildStores() : null
        }
    });
})();