import React from "react";
import { useState } from "react";
import { Layout, Typography, Form, Button, Col, Row, Input, Radio } from "antd";
import "../Styles/hero-styles.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroSection = () => {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");
	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};
	return (
		<Layout>
			<Content>
				<div className="hero-section">
					<Title>Search Doctor, Make an Appoinment</Title>
					<Paragraph>
						Discover the best doctors, clinics & hospital the city nearest to
						you.
					</Paragraph>
				</div>
			</Content>
			<Row>
				<Col span={8}>
					<div>
						<Paragraph className="text-align-left sm-para-color">
							(Only for medical treatment)
						</Paragraph>
					</div>
					<div className="d-flex">
						<Paragraph className="text-align-left">
							Treatment inquery for
						</Paragraph>
						<div className="pl-1">
							<Radio>Myself</Radio>
							<Radio>Someone</Radio>
						</div>
					</div>
				</Col>
				<Col span={8} className="hero">
					<Form
						
						form={form}
						layout="vertical"
						initialValues={{
							requiredMarkValue: requiredMark,
						}}
						onValuesChange={onRequiredTypeChange}
						requiredMark={requiredMark}
					>
						<Row className="d-flex align-items-end justify-content-space-between">
							<Col>
								<Form.Item
									label="Name"
									required
									// tooltip="This is a required field"
								>
									<Input placeholder="input placeholder" />
								</Form.Item>
								
								
							</Col>
                            <Form.Item
									label="Phone or Email"
									required
									// tooltip={{
									// 	title: "Tooltip with customize icon",
									// }}
								>
									<Input placeholder="input placeholder" />
								</Form.Item>
                            <Col>
                            </Col>
                            <Form.Item>
									<Button type="primary">SUBMIT</Button>
								</Form.Item>
                            <Col>
                            </Col>
						</Row>
					</Form>
				</Col>

				<Col span={4}></Col>
			</Row>
		</Layout>
	);
};

export default HeroSection;
