import  { useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gi? Tai sao nên hoc ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gi?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content2() {
    const [lessonId, setLessonId] = useState(1)

    const handleComment = ({detail}) => {
        console.log(detail);
    }

    useEffect(() => {
        window.addEventListener(`lesson-1`, handleComment)
    }, [])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style= {{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content2