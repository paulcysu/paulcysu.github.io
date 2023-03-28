import { useId, useState } from 'react'

interface ProjectProp {
  project: {
    id: number
    title: string
    images: string[]
    tools: string[]
  }
}

const Project: React.FC<ProjectProp> = (props) => {
  const { id, images, title, tools } = props.project

  const [enlargedIndex, setEnlargedIndex] = useState<number | null>()

  const handleEnlarge = (index: number | null) => {
    if (enlargedIndex === index) {
      setEnlargedIndex(null)
    } else {
      setEnlargedIndex(index)
    }
  }

  return (
    <div key={id} className="project-item">
      <div className="project-text-section">
        <p className="project-title">{title}</p>
        {tools &&
          tools.map((tool) => {
            return <h3 key={useId()}>{tool}</h3>
          })}
      </div>
      <div className="project-image-section">
        {images.map((image, index) => {
          return (
            <img
              key={useId()}
              className={`project-image image-position-${index} ${
                enlargedIndex == index ? 'enlarged' : ''
              }`}
              src={image}
              onClick={() => {
                handleEnlarge(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Project
