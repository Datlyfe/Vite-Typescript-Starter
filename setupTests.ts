import { configure } from '@testing-library/vue'
import '@testing-library/jest-dom/extend-expect'

configure({
  testIdAttribute: 'data-cy',
})
