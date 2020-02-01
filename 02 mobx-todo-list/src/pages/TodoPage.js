import React from 'react';
import { Form } from 'antd';
import { observer } from 'mobx-react';
import TodoInput from '../components/TodoInput';
import TodosFilterContainer from '../components/TodosFilterContainer';
import styled from "styled-components";
import TodoStore from '../store/TodoStore';

var uuid = 0;

const HorizontalLine = styled.div`
    border-bottom: 1px solid #c7c7c7;
    margin: 30px 0 30px;
`;
const TodoPage = Form.create()(observer((props) => { 
  const onInputEnter = (title) => {
    TodoStore.addTodo(uuid, title);
    uuid++;
};

  return (
      <div className="TodoPage">
        <TodoInput onSubmit={onInputEnter} form={props.form} />
        <HorizontalLine/>
        <TodosFilterContainer form={props.form} />
      </div>
  );
}));

export default TodoPage;