import React, { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { produce } from 'immer'
type PropType = {
  id: string
  title: string
  isPublished: boolean
  publishQuestion?: (id: string) => void
  deleteCard?: (id: string) => void
}
const List2: FC = () => {
  const [questionList, setQuestionList] = useState<PropType[]>([
    {
      id: 'q1',
      title: '问卷1',
      isPublished: false,
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: false,
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: false,
    },
    {
      id: 'q4',
      title: '问卷4',
      isPublished: false,
    },
  ])

  function publishQuestion(id) {
    // setQuestionList(
    //   questionList.map(q => {
    //     return q.id === id
    //       ? {
    //           ...q,
    //           isPublished: true,
    //         }
    //       : q
    //   })
    // )

    // immer
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        q.isPublished = true
      })
    )
  }
  function deleteCard(id) {
    // setQuestionList(
    //   questionList.filter(q => {
    //     return q.id != id
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function addCard() {
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    // questionList.concat({
    //   id: `q${r}`,
    //   title: '问卷',
    //   isPublished: false,
    // })
    // )
    setQuestionList(
      produce(draft => {
        draft.push({
          id: `q${r}`,
          title: `问卷${r}`,
          isPublished: false,
        })
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            // <QuestionCard key={id} id={id} title={title} isPublished={isPublished}></QuestionCard>
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              publishQuestion={publishQuestion}
              deleteCard={deleteCard}
            ></QuestionCard>
          )
        })}
        <button
          onClick={() => {
            addCard()
          }}
        >
          新增问卷
        </button>
      </div>
    </div>
  )
}

export default List2
