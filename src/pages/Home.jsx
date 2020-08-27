import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Categories, LoadingBlock, PizzasBlock, SortPopup} from '../components'
import {setCategory} from "../redux/actions/filter"
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortPopupName = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'},
]

function Home() {

    // диспатч для категорий
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPizzas())

    }, [])


    // хук стора react-redux
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)

    // useCallback возвращает ссылку которая изменится только после изменения зависимостей
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    onClickItems={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup items={sortPopupName}/>
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {isLoaded && items.map(obj =>
                    <PizzasBlock
                        key={obj.id}
                        {...obj}
                    />
                )}{
                Array(10).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
            </div>
        </div>
    )
}

export default Home