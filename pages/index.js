import Head from 'next/head'
import styles from '../styles/Home.module.css'
import User from './user'
import UserCard from '../component/usercard'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { userReducer } from '../store/reducers/userReducer'
import thunk from 'redux-thunk'

const store =createStore(userReducer,applyMiddleware(thunk));

export default function Home(props) {
  const card=[
    {
      img: '/images/img1.jpg',
      name:'flower'
    },
    {
      img: '/images/img2.jpg',
      name:'hii'
    },
    {
      img: '/images/img4.jpg',
      name:'jii'
    },
    {
      img: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      name:'hlw'
    },

  ]

  return (
     <Provider store={store}>
    
    <div className={styles.container}>
     <h1>welcome piyush dubey to new project</h1>
     {/* <User name="piyush dubey" age="23" /> */}
    
     {
       card.map((item,index)=>(

         <UserCard image={item.img} name={item.name} key={index}/>  
       ))
     }
     
     

  
      
    </div>
  </Provider>
  )
}
