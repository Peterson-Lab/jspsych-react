import React from 'react'
import dynamic from 'next/dynamic'
const ExperimentWindow = dynamic(
  () => import('./jsPsych/jsPsychKBResponseExperimentWindow'),
  { ssr: false }
)
import drtimg from './drt_img'
import Layout from '../../components/Layout/Layout'

const jspsych: React.FC = () => {
  return (
    <Layout>
      <ExperimentWindow timeline={drtimg} />
    </Layout>
  )
}

export default jspsych
