const products = [
    {
        nombre: 'Café',
        id: 1,
        codigo: 6133,
        fechaCreacion: '2012-12-23',
        precio: 16.38
      },
      {
        nombre: 'Aceite de oliva',
        id: 2,
        codigo: 4972,
        fechaCreacion: '2020-06-02',
        precio: 33.66
      },
      {
        nombre: 'Azúcar',
        id: 3,
        codigo: 8426,
        fechaCreacion: '2016-11-17',
        precio: 7.11
      },
      {
        nombre: 'Sal',
        id: 4,
        codigo: 5816,
        fechaCreacion: '2021-10-08',
        precio: 42.78
      },
      {
        nombre: 'Fideos',
        id: 5,
        codigo: 6175,
        fechaCreacion: '2021-07-23',
        precio: 31.15
      },
      {
        nombre: 'Arroz',
        id: 6,
        codigo: 1946,
        fechaCreacion: '2016-11-07',
        precio: 87.21
      },
      {
        nombre: 'Café',
        id: 7,
        codigo: 1762,
        fechaCreacion: '2017-05-01',
        precio: 16.46
      },
      {
        nombre: 'Arroz',
        id: 8,
        codigo: 5521,
        fechaCreacion: '2010-03-28',
        precio: 52.77
      },
      {
        nombre: 'Fideos',
        id: 9,
        codigo: 7244,
        fechaCreacion: '2015-07-18',
        precio: 33.59
      },
      {
        nombre: 'Huevos',
        id: 10,
        codigo: 1260,
        fechaCreacion: '2023-12-13',
        precio: 5.84
      }
]
const getProducts = (objQuery)=>{
    console.log(objQuery)
    const result = {
        products: products,
        productsFiltered: [...products],
        onceFilterApply: false
    }

    const aviableFilters = ['search', 'max', 'min', 'limit']
    const currentFilters = Object.keys(objQuery)
    for(const aviableFilter of aviableFilters){
        if(currentFilters.includes(aviableFilter)){
            
            result.productsFiltered = filterProducts(
                aviableFilter, 
                objQuery[aviableFilter], 
                result.onceFilterApply ? result.productsFiltered  : result.products
            )
            result.onceFilterApply = true
        }
    }

    return result.productsFiltered
}


const filterProducts = (filter_name, value, products ) =>{
    if(filter_name == 'min'){
        return products.filter((element)=> element.precio >= value)
    }
    else if(filter_name == 'max'){
        return products.filter((element)=> element.precio <= value)
    }
    else if(filter_name == 'limit'){
        return products.slice(0,value)
    }
    else if(filter_name == 'search'){
        return products.filter((element)=>element.nombre.toLowerCase().includes(objQuery.search))
    }
}




const result = getProducts({limit: 2, max: 20})
console.log({result})
module.exports = {getProducts};


'tv samsung 42' //['tv', 'samsung', '42'] esta incluido el samsung

'samsung'
