import React from 'react'
import ContentLayout from '../Layouts/ContentLayout'

const withLayout = (Component) => {
  return () => (
    <ContentLayout>
        <Component/>
    </ContentLayout>
  )
}

export default withLayout