import React from 'react';   
import {observer} from 'mobx-react';
import { Col, Input, Form, Row, Icon, Checkbox } from 'antd';
import styled from "styled-components";
import TodoStore from '../store/TodoStore';
import FilterStatusStore from '../store/FilterStatusStore';

const FormItem = Form.Item;

const InputBar = styled(Input)`
    &&& {
        height: 40px;
        border: 1px solid #c1c1c1;
    }
`;
const Icons = styled(Icon)`
    &&& {
        font-size: 24px;
        line-height: 42px;
    }
`;
const CheckBox = styled(Checkbox)`
    &&& {
        line-height: 39px;

        input[type='checkbox'] {
            width: 24px;
            height: 24px;
        }
        .ant-checkbox-inner {
            width: 26px;
            height: 26px;
        }
        .ant-checkbox-inner::after {
            left: 25%;
            width: 8.714286px;
            height: 14.142857px;
        }
        .ant-checkbox {
            border: 1px solid #c7c7c7;
        }
    }
`;

const TodoList = observer((props) => {
    const form = props.form;
    const { getFieldDecorator, getFieldValue } = form;

    const onClickDelete = (todoId) => {
        TodoStore.removeTodo(todoId);
    }

    const onCheckTodo = (todoId) => {
        TodoStore.checkTodo(todoId);
    }

    const TodoItems = () => {
        let todos = [];
        if(TodoStore.ob.todoList.size > 0) {
            const filteredTodos = TodoStore.getFilteredTodos(FilterStatusStore.ob.filterStatus);
            filteredTodos.forEach((todo, key) => {
                return (
                    todos.push(
                        <Row gutter={24} key={'row-'+key} type="flex" justify="center">
                            <Col span={16}>
                                <Col span={22} key={'col'+key}>
                                    <FormItem>
                                        {getFieldDecorator(`todoList`+`[${todo['id']}]`, {
                                            initialValue: todo['name']
                                        })(
                                            <InputBar disabled={ todo['completed'] }>
                                            </InputBar>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={1}>
                                    <Icons 
                                        type="close"
                                        onClick={()=> {
                                            onClickDelete(todo['id'])
                                        }}
                                    />
                                </Col>
                                <Col span={1}>
                                    {getFieldDecorator('checktodo'+`[${todo['id']}]`, {
                                    })(
                                        <CheckBox 
                                            checked={ todo['completed'] }
                                            onClick={() => {
                                                onCheckTodo(todo['id'])
                                            }}
                                        />
                                    )}
                                </Col>
                            </Col>
                        </Row>
                    )
                )
            })
        }
        return todos;
    }
    return ( 
        <div>
            {TodoItems()}
        </div>
    )
});

export default TodoList;