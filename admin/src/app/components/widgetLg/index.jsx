import { useEffect, useState } from "react";
import { userRequest } from "../../../api/requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});

  //Get order
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  //Get User Name By User Id in Order:
  const getUserById = async (id) => {
    try {
      const user = await userRequest.get(`user/find/${id}`)
      setUser(user)
    }catch(e) {console.log(e)}
  }

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => {
          //getUserById(order?.userId)
          return (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{order?.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}