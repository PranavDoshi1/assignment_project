import React from 'react'
import { Table } from 'antd';
import EditForm from './EditForm'
const { Column, ColumnGroup } = Table
export default function Data_Table(props){
    return(
            <Table dataSource={props.data}>
                <ColumnGroup>
                    <Column title="Order ID" dataIndex="order_id" key="order_id"></Column>
                    <Column title="Address" dataIndex="city" key = "city"/>
                    <Column title="Phone No" dataIndex="phone" key="phone"/>
                    <Column title= "E-Mail" dataIndex="email" key="email"/>
                    <Column title = "First Name" dataIndex="first_name" key="first_name"/>
                    <Column title = "Last Name" dataIndex="last_name" key="last_name"/>
                </ColumnGroup>
                <ColumnGroup>
                <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <EditForm
              data={text}
              onRefresh={() => this.componentDidMount()}
            />
            </span>
          )}
        />
                </ColumnGroup>
    
            </Table>
    
    )
    
    
}