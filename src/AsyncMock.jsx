const products = [
    {
        id: '1',
        name: 'iPhone 13 PRO 256GB CUATRO CAMARAS',
        price:'1700',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/10/iphone-13-pro-max-blue-select-320x320.png',
        stock:'25',
        descripcion: 'Pantalla: 6.1″, 1170 x 2532 pixels Procesador: Apple A15 Bionic Almacenamiento: 256GB Expansión: sin microSD Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D OS: iOS 15 Perfil: 7.7 mm Peso: 204 g',
    },
    {
        id: '2',
        name: 'Iphone 12 256 GB',
        price:'1199',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-b-320x320.png',
        stock:'25',
        descripcion: 'Procesador: Apple A14 Bionic,Almacenamiento: 256GB, Ram: 4gb, Expansión: sin microSD, Cámara: Dual, 12MP+12MP OS: iOS 14 Perfil: 7.4 mm Peso: 164 g',
    },
    {
        id: '3',
        name: 'iPhone 13 256GB CAMARA DUAL',
        price:'1399',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/10/colores-del-iphone-13-todos-los-tonos-y-tonalidades-que-esperamos-ver-en-el-iphone-13-3-320x320.png',
        stock:'25',
        descripcion: 'Pantalla: 6.1″, 1170 x 2532 pixels Procesador: Apple A15 Bionic Almacenamiento: 256GB Expansión: sin microSD Cámara: Dual, 12MP+12MP OS: iOS 15 Perfil: 7.7 mm Peso: 174 g',
    },
    {
        id: '4',
        name: 'iPhone 14 PRO 512GB TRIPLE DUAL E-Sim',
        price:'1800',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2022/09/iphone-14-pro-color-morado-oscuro-512-gb-de-apple-320x320.jpg',
        stock:'25',
        descripcion: 'Pantalla: 6.1″, 1179 x 2556 pixels Procesador: Apple A16 Bionic RAM: 6GB Almacenamiento: 512GB Expansión: sin microSD Cámara: Triple, 48MP+12MP+12MP OS: iOS 16 Perfil: 7.9 mm Peso: 206 g',
    },

    {
        id: '5',
        name: 'Iphone 12 256 GB',
        price:'1199',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-b-320x320.png',
        stock:'25',
        descripcion: 'Procesador: Apple A14 Bionic,Almacenamiento: 256GB, Ram: 4gb, Expansión: sin microSD, Cámara: Dual, 12MP+12MP OS: iOS 14 Perfil: 7.4 mm Peso: 164 g',
    },

    {
        id: '6',
        name: 'iPhone 13 PRO 256GB CUATRO CAMARAS',
        price:'1150',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/10/iphone-13-pro-max-blue-select-320x320.png',
        stock:'25',
        descripcion: 'Pantalla: 6.1″, 1170 x 2532 pixels Procesador: Apple A15 Bionic Almacenamiento: 256GB Expansión: sin microSD Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D OS: iOS 15 Perfil: 7.7 mm Peso: 204 g',
    },

    {
        id: '7',
        name: 'Tablet2000',
        price:'300',
        category: 'Tablets',
        img: 'https://cbafederal.net/wp-content/uploads/2022/05/1CAMA1421-320x320.webp',
        stock:'25',
        descripcion: 'Tablets',
    },
    {
        id: '8',
        name: 'ASUS 15.6 i5-11300H 16GB 512GB SSD RTX3050 4GB',
        price:'1350',
        category: 'Notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/04/01ac43741c7816117cc4bcca5992.webp',
        stock:'8',
        descripcion: 'Modelo	90NR05U1-M000K0 Nº Parte	FX516PC-HN023 Pantalla	15.6 FHD (1920 x 1080) 16  Procesador Intel® Core i5-11300H Processor 3.1 GHz (8M Cache, up to 4.4 GHz, 4 cores) Memoria	16GB DDR4 (on board) + slot libre Disco	512GB M.2 NVMe PCIe® 3.0 SSD VGA	NVIDIA® GeForce RTX 3050 Laptop GPU 4GB GDDR6 S.O.	Endless 3',
    },
    {
        id: '9',
        name: 'ASUS 15.6″ CELERON N4000 4GB 1TB',
        price:'1380',
        category: 'Notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/06/X543MA-13-1-320x320.jpg',
        stock:'8',
        descripcion: 'Modelo	90NB0IR6-M003S0 Nº Parte X543MA-GQ1381 Pantalla	15.6 HD (1366 x 768) 16 Procesador	Intel® Celeron® N4020 Processor 1.1 GHz (4M Cache, up to 2.8 GHz, 2 cores) Memoria	4GB DDR4 (on board) NO PERMITE AMPLIACION Disco	1TB SATA 5400RPM 2.5 HDDVGA	no posee S.O.	Endless Otros	posee teclado numerico Otros	NO tiene puerto de re Otros	NO tiene puerto m.2',
    },
    {
        id: '10',
        name: 'Lenovo ThinkPad T14 14″ i5-1135G7 8GB RAM 256SSD WIN 10P',
        price:'1400',
        category: 'Notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/09/23n4234er-320x320.png',
        stock:'8',
        descripcion: 'ProcesadorCore I5 Mod. procesador1135G7 Memoria Disco rígidoNO Disco SSDSI Memoria ram8 GB Tipo de discoSSD Sistema Operativo Sistema operativoWINDOWS 10 PRO Imagen Tamaño de pantalla14 pulgadas Resolución de pantalla1920 X 1080',
    },
    {
        id: '11',
        name: 'Lenovo ThinkPad T14 14″ i5-1135G7 8GB RAM 256SSD WIN 10P',
        price:'1480',
        category: 'Notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/09/23n4234er-320x320.png',
        stock:'8',
        descripcion: 'ProcesadorCore I5 Mod. procesador1135G7 Memoria Disco rígidoNO Disco SSDSI Memoria ram8 GB Tipo de discoSSD Sistema Operativo Sistema operativoWINDOWS 10 PRO Imagen Tamaño de pantalla14 pulgadas Resolución de pantalla1920 X 1080',
    },
    {
        id: '12',
        name: 'ASUS 15.6 i5-11300H 16GB 512GB SSD RTX3050 4GB',
        price:'1750',
        category: 'Notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/04/01ac43741c7816117cc4bcca5992.webp',
        stock:'8',
        descripcion: 'Modelo	90NR05U1-M000K0 Nº Parte	FX516PC-HN023 Pantalla	15.6 FHD (1920 x 1080) 16  Procesador Intel® Core i5-11300H Processor 3.1 GHz (8M Cache, up to 4.4 GHz, 4 cores) Memoria	16GB DDR4 (on board) + slot libre Disco	512GB M.2 NVMe PCIe® 3.0 SSD VGA	NVIDIA® GeForce RTX 3050 Laptop GPU 4GB GDDR6 S.O.	Endless 3',
    },


    {
        id: '13',
        name: 'TABLET 7 PERFORMANCE A23 4CORE 1G+16G + FUNDA',
        price:'1680',
        category: 'Tablets',
        img: ' https://cbafederal.net/wp-content/uploads/2021/08/tablet_7_performance_4core_1g8g__funda01-320x320.png',
        stock:'8',
        descripcion: 'Imagen Tamaño de la pantalla: 7 pulgadas  Resolución de la pantalla: 1024×600  Capacidad Multitouch: Si Memoria Memoria Interna: 16G Memoria Ram: 1GB Expandible a: 32GB',
    },

    {
        id: '14',
        name: 'Tablet Samsung Galaxy TAB A8 64GB 4GB 2022',
        price:'1680',
        category: 'Tablets',
        img: 'https://cbafederal.net/wp-content/uploads/2022/09/images-19.jpg',
        stock:'8',
        descripcion: 'Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi direct, usb 2.0, wi-fi, bluetooth, smart switch te permiten potenciar sus funciones al máximo.  Gracias a su cámara principal de 8 Mpx y frontal de 5 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.',
    },
]

export const getproducts = () => {
    return new Promise ( (resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductByid = (productid) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find( prod => prod.id === productid))
        },500)
    })
}

