import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../components/Button/Button'
import { ButtonTypes } from '../components/Button/buttonTypes'

storiesOf('Button', module).add('primary', () => (
  <Button type={ButtonTypes.PRIMARY} label="Primary" />
))
