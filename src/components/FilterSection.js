import React from "react";
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
import "../Styles/filter-styels.scss";
const FilterSection = () => {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");
	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};
	const { Search } = Input;
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const onSearch = (value) => console.log(value);
	const { Meta } = Card;
	const [showCalendar, setShowCalendar] = useState(false);

	const handleIconClick = () => {
		setShowCalendar(!showCalendar);
	};
	return (
		<div className="fliter-section">
			<Row>
				<Form
					form={form}
					layout="vertical"
					initialValues={{
						requiredMarkValue: requiredMark,
					}}
					onValuesChange={onRequiredTypeChange}
					requiredMark={requiredMark}
				>
					<Col className="mail-fliter" span={9}>
						<Form.Item
							label="Search"
							required
							// tooltip="This is a required field"
						>
							<Input.Search
								placeholder="Input search text"
								onSearch={onSearch}
								className="w-300"
							/>
						</Form.Item>
						<Form.Item label="Country" required className="w-300">
							<Select>
								<Select.Option value="demo">Demo</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item label="District/state" required className="w-300">
							<Select>
								<Select.Option value="demo">Demo</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item label="Speciality" required className="w-300">
							<Input.Search
								placeholder="Input search text"
								onSearch={onSearch}
								className="w-300"
							/>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
							<Checkbox onChange={onChange}>Checkbox</Checkbox>
						</Form.Item>
					</Col>
				</Form>
				<Col
					span={15}
					className="card-section d-flex justify-content-space-between"
				>
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
				</Col>
			</Row>
		</div>
	);
};

export default FilterSection;
