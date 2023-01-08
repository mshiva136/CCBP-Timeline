import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectContainer,
  TopContainer,
  TopHeading,
  Description,
  IconContainer,
  Duration,
  AnchorTag,
  Image,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = item
  return (
    <ProjectContainer>
      <Image src={imageUrl} alt="project" />
      <TopContainer>
        <TopHeading>{projectTitle}</TopHeading>
        <IconContainer>
          <AiFillCalendar />
          <Duration>{duration}</Duration>
        </IconContainer>
      </TopContainer>
      <Description>{description}</Description>
      <AnchorTag href={projectUrl} target="__blank">
        Visit
      </AnchorTag>
    </ProjectContainer>
  )
}

export default ProjectTimelineCard
