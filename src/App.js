import React from 'react';
import { Layout} from 'antd';
import Title from 'antd/lib/typography/Title'
import './App.css';
import Table from './components/datatable'
import {OrderList} from './UserServices/Services'
const { Header, Footer, Sider, Content } = Layout;
var data = [
  {
    order_no: 1,
    order_address: "Bangalore",
    total: 300,
    email: "abcd"
  },
  {
    order_no: 2,
    order_address: "Chennai",
    total: 200,
    email: "efgh"
  },
  {
    order_no: 3,
    order_address: "Surat",
    total: 250,
    email: "jklm"
  }
]



class App extends React.Component{
  intervalID;
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
    this.sortBy = this.sortBy.bind(this)
  }
  componentDidMount(){
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getData = async () => {
    try{
      var data1 = await OrderList()
      this.setState({
        data:data1
      })
      this.intervalID = setInterval(this.getData.bind(this), 50000);
    }
    catch(error){
      console.log(error)
      alert('something went wrong')
    }
  }
  sortBy(key){
    this.setState({
      data: data.sort((a,b)=>
        a.order_no<b.order_no
      )
    })
  }
  render(){
    return(
      <div className="App">
    <Layout>
      <Header style={{padding:10}}>
        <Title style = {{color:'white'}} level={3}>Order Management</Title>
      </Header>
      <Layout>
        <Content style = {{minHeight:530, padding:24, background:'#fff'}}>
        {!this.state.data.data?<div/>:(<Table 
          data={this.state.data.data}
          sortBy={this.sortBy}
          />)

}
          
        </Content>
      </Layout>
      <Footer style={{textAlign:'center'}}>Created By Pranav Doshi</Footer>
    </Layout>
  </div>
    )
  }
} 

export default App;