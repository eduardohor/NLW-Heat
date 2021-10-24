import { useState } from "react"

import styles from "./styles.module.scss"

import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

export function LikeButton (){
  const [like, setLike] = useState(false)

  return(
    <>
      <button className={styles.buttonLiked} onClick={()=>{
        setLike(!like)
      }}>
        <span>
          {like ? <AiFillHeart/> : <AiOutlineHeart/> }
        </span>
      </button>
    </>
  )
}