import React from 'react';
import { useState } from "react";
import {
	Layout,
	Typography,
	Form,
	Button,
	Col,
	Row,
	Input,
	Radio,
	Space,
	Select,
	Checkbox,
	Avatar,
	Card,
	DatePicker,
} from "antd";
import {
	SearchOutlined,
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
	CalendarOutlined,
} from "@ant-design/icons";

const Cards = () => {
  const { Meta } = Card;
	const [showCalendar, setShowCalendar] = useState(false);

	const handleIconClick = () => {
		setShowCalendar(!showCalendar);
	};
  return (
    <div className="card-section d-flex justify-content-space-between">
      <Card
cover={
    <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
}

actions={[
    <CalendarOutlined onClick={handleIconClick} key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
]}

>
{showCalendar && (
<DatePicker
  showToday={false}
  onChange={() => {
    // handle calendar date selection
  }}
/>
)}
<Meta
    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
    title="Card title"
    description="This is the description"
/>
</Card>
<Card
cover={
    <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
}

actions={[
    <CalendarOutlined onClick={handleIconClick} key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
]}

>
{showCalendar && (
<DatePicker
  showToday={false}
  onChange={() => {
    // handle calendar date selection
  }}
/>
)}
<Meta
    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
    title="Card title"
    description="This is the description"
/>
</Card>
<Card
cover={
    <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
}

actions={[
    <CalendarOutlined onClick={handleIconClick} key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
]}

>
{showCalendar && (
<DatePicker
  showToday={false}
  onChange={() => {
    // handle calendar date selection
  }}
/>
)}
<Meta
    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
    title="Card title"
    description="This is the description"
/>
</Card>
    </div>
  );
};

export default Cards;