import React from "react"

// React.memo позволяет не ререндерить компонет до изменения стейта
const Categories = React.memo(
    function Categories({items, onClickItems}) {

        const [activeItem, setActiveItem] = React.useState(null)

        const onSelectItem = index => {
            setActiveItem(index)
            onClickItems(index)
        }

        console.log('rerender categories')

        return (
            <div className='categories'>
                <ul>
                    <li
                        onClick={() =>
                            onSelectItem(null)
                        }
                        className={
                            activeItem === null ? 'active' : ''
                        }
                    >
                        Все
                    </li>
                    {items && items.map((i, index) =>
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
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