import React, { FC } from 'react'
import './QuestionCard.css'

type PropType = {
  id: string
  title: string
  isPublished: boolean
  publishQuestion?: (id: string) => void
  deleteCard?: (id: string) => void
}

const QuestionCard: FC<PropType> = props => {
  const { id, title, isPublished, publishQuestion, deleteCard } = props

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      {/*条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      <button
        onClick={() => {
          publishQuestion(id)
        }}
      >
        发布问卷
      </button>
      <button
        onClick={() => {
          deleteCard(id)
        }}
      >
        删除问卷
      </button>
    </div>
  )
}

export default QuestionCard
