import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Categories, LoadingBlock, PizzasBlock, SortPopup} from '../components'
import {setCategory, setSortBy} from "../redux/actions/filter"
import {fetchPizzas} from "../redux/actions/pizzas"

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortPopupName = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'},
]

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    activeCategory={category}
                    onClickItems={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup onClickSortType={onSelectSortType} activeSortBy={sortBy.type} items={sortPopupName}/>
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {isLoaded ? items.map(obj =>
                        <PizzasBlock
                            key={obj.id}
                            {...obj}
                        />
                    ) :
                    Array(10)
                        .fill(0).map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    )
}

export default Home