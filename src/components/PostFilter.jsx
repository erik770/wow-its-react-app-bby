import React from "react";
import { MySelect } from './UI/select/MySelect';
import { MyInput } from './UI/input/MyInput';

export const PostFilter = function({filter, setFilter}) {

    return (
        <div>
            <MyInput 
                value={filter.search}
                onChange={(event) => setFilter({ ...filter, search: event.target.value })}
            />
            <MySelect
                defaultValue={'Sort by'}
                options={[
                    { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Description' },
                ]}
                value={filter.sort}
                onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}