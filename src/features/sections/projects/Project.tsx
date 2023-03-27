import { useId } from "react"

interface ProjectProp {
  project: {
    id: number
    title: string
    image: string
    tools: string[]
  }
}

const Project: React.FC<ProjectProp> = (props) => {
  const { id, image, title, tools } = props.project
  
  return (
    <div key={id} className="project-item">
      <img className="project-image" src={image} />
      <h2 className="project-title">{title}</h2>
      {
        tools && tools.map((tool) => {
          return (<h3 key={useId()}>{tool}</h3>)
        })
      }
    </div>
  )
}

export default Project
