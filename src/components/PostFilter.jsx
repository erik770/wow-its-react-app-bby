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
                defaultValue={'Сортировка'}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
                value={filter.sort}
                onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}