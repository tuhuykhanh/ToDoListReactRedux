import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from './filterSlice'

import clsx from 'clsx'
import styles from './filter.module.scss'
function Filter() {

    const dispatch = useDispatch()
    const statusArray = ['All', 'Todo', 'Completed']
    const priority = ['High', 'Medium', 'Low']


    const [radioCheck, setRadioCheck] = useState('All')
    const [searchText, setSearchText] = useState('');
    const [priorityValue, setPriorityValue] = useState([]);

    const dispatchSearchText = e => {
        setSearchText(e.target.value)
        dispatch(filterSlice.actions.searchFilterChange(e.target.value))
    }
    const dispatchRadio = valueRadio => {

        setRadioCheck(valueRadio)
        dispatch(filterSlice.actions.statusFilterChange(valueRadio))

    }
    const handleChangePriority = e => {

        setPriorityValue(prev => {

            const isExist = priorityValue.includes(e.target.value)
            if (isExist) {
                return priorityValue.filter(childPrio => childPrio !== e.target.value)
            }
            else {
                return [...prev, e.target.value]
            }
        })
    }
    const deletePrio = e => {
        setPriorityValue(prev => {
            const arrayBack = prev.filter(item => item !== e)
            return arrayBack
        })
    }
    useEffect(() => {
        dispatch(filterSlice.actions.priorityFilterChange(priorityValue))
    }, [priorityValue])

    return (
        <div className={clsx(styles.container_filter)}>

            <label htmlFor=''> search  </label>
            <div className={clsx(styles.form_group)}>
                <input
                    className={clsx(styles.input)}
                    value={searchText}
                    onChange={dispatchSearchText}
                    placeholder='input search text'
                />
                <div className={clsx(styles.icon)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <label htmlFor=''>filter by status  </label>
            <div className={clsx(styles.form_group, styles.gap)}>

                {statusArray.map((radioBox, index) => (

                    <div
                        key={index}
                        className={clsx(styles.form_group_item)}>
                        <input
                            checked={radioCheck === radioBox}
                            id={radioBox}
                            type='radio'
                            value={radioBox}
                            onChange={e => dispatchRadio(radioBox)}
                        />
                        <label htmlFor={radioBox}>{radioBox}</label>
                    </div>
                ))}

            </div>
            <label htmlFor=''>filter by priority </label>
            <div className={clsx(styles.form_group)}>

                <div className={clsx(styles.priority)}>
                    <div className={clsx(styles.boxPriority)}>
                        {priorityValue.map((itemPrio, index) => (

                            <div
                                key={index}
                                className={clsx(styles.childPriority)}

                            >
                                {itemPrio}
                                <div
                                    className={clsx(styles.iconTimes)}
                                    onClick={() => deletePrio(itemPrio)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <select
                        value={priorityValue}
                        className={clsx(styles.selectOption)}
                        onChange={handleChangePriority}
                        mode='multiple'
                    >
                        <option value={null} > choise priority </option>
                        {priority.map((prioChild, index) => <option
                            key={index}
                            value={prioChild}
                        >
                            {prioChild}
                        </option>)}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Filter