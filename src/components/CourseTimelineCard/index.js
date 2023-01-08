import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseContainer,
  TopContainer,
  TopHeading,
  Description,
  IconContainer,
  Duration,
  TagList,
  ListItem,
  ListPara,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  return (
    <CourseContainer>
      <TopContainer>
        <TopHeading>{courseTitle}</TopHeading>
        <IconContainer>
          <AiFillClockCircle />
          <Duration>{duration}</Duration>
        </IconContainer>
      </TopContainer>
      <Description>{description}</Description>
      <TagList>
        {tagsList.map(eachValue => (
          <ListItem key={eachValue.id}>
            <ListPara>{eachValue.name}</ListPara>
          </ListItem>
        ))}
      </TagList>
    </CourseContainer>
  )
}

export default CourseTimelineCard
