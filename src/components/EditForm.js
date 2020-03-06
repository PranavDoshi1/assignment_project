import React from "react";
import { Button, Modal, Select } from "antd";
import {OrderUpdate} from '../UserServices/Services'

class EditModal extends React.Component {
  state = {
    loading: false,
    visible: false,
    order_no: "",
    order_id:"",
    email:"",
    phone:"",
    city:"",
    province:"",
    country:"",
    zip:"",
    line_1:"",
    line_2:"",
    first_name:"",
    last_name:"",
    _id:"",
  };

  showModal = data => {
    // alert(JSON.stringify(data))
    this.setState({
      visible: true,
      order_id:data.order_id,
      email:data.email,
      phone:data.phone,
      first_name: data.first_name,
      last_name: data.last_name,
      line_1: data.address1,
      line_2:data.address2,
      city: data.city,
      province: data.province,
      zip:data.zip,
      country:data.country,
      _id:data._id
    });
  };

  handleOk = async() => {
    let data = {
      email:this.state.email,
      order_id: this.state._id,
      city:this.state.city,
      province: this.state.province,
      country: this.state.country,
      zip:parseInt(this.state.zip),
      phone:parseInt(this.state.phone),
      email: this.state.email,
      address1: this.state.line_1,
      address2: this.state.line_2
    };
    var data1 = await OrderUpdate(data)

    // alert(JSON.stringify(data1));
    if(data1.message=='success'){
        this.setState({
            visible:false
        })
    }
    window.location.reload();
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;

    return (
      <div>
        <Button type="primary" onClick={() => this.showModal(this.props.data)}>
          Edit
        </Button>
        <Modal
          visible={visible}
          title="Edit Order Details :"
          width={"38%"}
          bodyStyle={{ width: "80%" }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              loading={loading}
              onClick={this.handleOk}
              style={{
                background: "#0b4377",
                color: "#fff",
                borderColor: "#0b4377"
              }}
            >
              Submit
            </Button>
          ]}
        >
          <form>
            <p>Order ID:</p>
            <input
              readOnly  
              type="text"
              value={this.state.order_id}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ order_no: e.target.value })}
            />
            <br /> <br />
            <p>First Name:</p>
            <input
              readOnly  
              type="text"
              value={this.state.first_name}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ first_name: e.target.value })}
            />
            <br /> <br />
            <p>Last Name:</p>
            <input
              readOnly  
              type="text"
              value={this.state.last_name}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ last_name: e.target.value })}
            />
            <br /> <br />
            <p>Phone:</p>
            <input  
              type="text"
              value={this.state.phone}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ phone: e.target.value })}
            />
            <p>email:</p>
            <input  
              type="text"
              value={this.state.email}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <p>Address Line 1:</p>
            <input  
              type="text"
              value={this.state.line_1}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ line_1: e.target.value })}
            />
            <p>Address Line 2:</p>
            <input  
              type="text"
              value={this.state.line_2}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ line_2: e.target.value })}
            />
            <p>city:</p>
            <input  
              type="text"
              value={this.state.city}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ city: e.target.value })}
            />
            <p>Province:</p>
            <input  
              type="text"
              value={this.state.province}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ province: e.target.value })}
            />
            <p>zip:</p>
            <input  
              type="text"
              value={this.state.zip}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ zip: e.target.value })}
            />
            <p>Country:</p>
            <input  
              readOnly
              type="text"
              value={this.state.country}
              style={{ borderRadius: "5px" }}
              onChange={e => this.setState({ country: e.target.value })}
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditModal;