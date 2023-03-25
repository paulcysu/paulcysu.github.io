interface ProjectProp {
  project: {
    id: number
    title: string
    image: string
  }
}

const Project: React.FC<ProjectProp> = (props) => {
  const { id, image, title } = props.project
  
  return (
    <div key={id} className="project-item">
      <img className="project-image" src={image} />
      <h3 className="project-title">{title}</h3>
    </div>
  )
}

export default Project
