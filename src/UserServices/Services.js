const url = 'https://howbuys.com:5000/'

var axios = require('axios')

export async function OrderList(){
    var data = []    
    let result = await axios.post(url+'orderlist',data, 
              {headers: {
               Accept: 'application/json',
            'Content-Type': 'application/json',
            }}) 
            // alert(JSON.stringify(result.data))
            return result.data;
  }

  export async function OrderUpdate(data){
    let result = await axios.post(url+'orderupdate',data, 
              {headers: {
               Accept: 'application/json',
            'Content-Type': 'application/json',
            }}) 
            // alert(JSON.stringify(result.data))
            return result.data;
  }