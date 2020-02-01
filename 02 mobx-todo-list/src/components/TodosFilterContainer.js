import React from 'react';   
import {observer} from 'mobx-react';
import TodoList from '../components/TodoList';
import { Col, Input, Form, Row, Icon, Checkbox } from 'antd';
import styled from "styled-components";
import FilterStatusStore from '../store/FilterStatusStore';

const FilterHeaderRow = styled(Row)`
    margin-bottom: 30px;
    font-size: 16px;

    .ant-col span {
        cursor: pointer;
    }

    .ant-col span.active {
        font-style: italic;
        text-decoration: underline;
        font-weight: bold;
    }
`;

const TodosFilterContainer = observer((props) => {
    const onSelectFilter = (status) => {
        FilterStatusStore.setFilterStatus(status);
    }

    const statuses = FilterStatusStore.ob.status;

    return (
        <div className="Todos">
            <Form>
                <FilterHeaderRow gutter={24} type="flex" justify="center">
                    {
                        Object.keys(statuses).map((status, key) => {
                            return (
                                <Col key={status} span={3}>
                                    <span
                                        className={FilterStatusStore.ob.filterStatus === statuses[status] ? 'active': 'false'}
                                        onClick={() => {
                                        onSelectFilter(statuses[status]);
                                    }}>
                                        {status} /
                                    </span>
                                </Col>
                            )
                        })
                    }
                </FilterHeaderRow>
                <Row>
                    <TodoList form={props.form}/>
                </Row>
            </Form>
        </div>
    )
});

export default TodosFilterContainer;