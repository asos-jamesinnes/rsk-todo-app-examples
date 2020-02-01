import React from 'react';   
import {observer} from 'mobx-react';
import styled from "styled-components";
import { Col, Input, Form, Row, Button } from 'antd';

const FormItem = Form.Item;

const Title = styled.h1`
    font-size: 44px;
    font-weight: normal;
    margin: 50px 0;
`;
const SubmitButton = styled(Button)`
    &&& {
        height: 40px;
    }
`;
const InputBar = styled(Input)`
    &&& {
        height: 40px;
        border: 1px solid #c1c1c1;
    }
`;

const TodoInput = observer((props) => {
    const form = props.form;
    const { getFieldDecorator, getFieldValue } = form;

    const getValueInInput = () => {
        props.onSubmit(getFieldValue('todoTitle'));
        form.setFieldsValue({
            todoTitle: '',
        });
    }

    return (
        <div>
            <Row>
                <Col span={24}>
                    <Title>Enter Todo</Title>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8} offset={6}>
                    <FormItem>
                        {getFieldDecorator('todoTitle', {
                        })(
                            <InputBar 
                                placeholder="Enter todo title"
                                allowClear={true}
                                onPressEnter={()=> {
                                    getValueInInput()
                                }}
                            />
                        )}
                    </FormItem>
                </Col>
                <Col span={4}>
                    <SubmitButton 
                    block 
                    type="primary"
                    onClick={()=> {
                        getValueInInput()
                    }}>
                        Enter
                    </SubmitButton>
                </Col>
            </Row>
        </div>
    )
});

export default TodoInput;