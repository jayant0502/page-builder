import React from 'react'
// import PageMaker from './maker'
import dynamic from 'next/dynamic'
import DraggableHeading from './myElements/DraggableHeadingTag';

const PageMaker = dynamic(
  () => import('./Maker'),
  { ssr: false }
)

const components = {
  DraggableHeading: {
    component: DraggableHeading,
    settings: {
      displayName: 'Heading',
      icon: 'heading', // Assume you have an icon for the heading
      defaultProps: {
        headingType: 'h1',
        initialText: 'Enter heading text'
      },
      props: {
        headingType: {
          type: 'select',
          options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          defaultValue: 'h1'
        },
        initialText: {
          type: 'text',
          defaultValue: 'Enter heading text'
        }
      }
    }
  }
};

const page = () => {
  return (
    <>
    <PageMaker components={components}/>
    </>
  )
}

export default page