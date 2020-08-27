import React from 'react'

// React.memo позволяет не ререндерить компонет до изменения стейта
const Categories = React.memo(
    function Categories({activeCategory, items, onClickItems}) {

        return (
            <div className='categories'>
                <ul>
                    <li
                        onClick={() =>
                            onClickItems(null)
                        }
                        className={
                            activeCategory === null ? 'active' : ''
                        }
                    >
                        Все
                    </li>
                    {items && items.map((i, index) =>
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickItems(index)}
                            key={`${i}_${index}`}
                        >
                            {i}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
)

export default Categories